import { Client, GatewayIntentBits, EmbedBuilder, TextChannel } from 'discord.js'
import { Pool } from 'pg'

// ============================================================
// Config — ตั้งค่า env vars บน Railway
// DISCORD_TOKEN        : Bot token จาก Discord Developer Portal
// DISCORD_CHANNEL_ID   : Channel ID ที่จะโพสต์ประกาศ
// DATABASE_URL         : Railway PostgreSQL connection string
// POLL_INTERVAL_MS     : ความถี่ตรวจ DB (default 5 นาที)
// ============================================================
const DISCORD_TOKEN      = process.env.DISCORD_TOKEN!
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID!
const DATABASE_URL       = process.env.DATABASE_URL!
const POLL_INTERVAL_MS   = Number(process.env.POLL_INTERVAL_MS) || 5 * 60 * 1000

// ============================================================
// Database
// ============================================================
const db = new Pool({ connectionString: DATABASE_URL })

// ============================================================
// Discord client
// ============================================================
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// สี embed ตามประเภทประกาศ
const TYPE_COLOR: Record<string, number> = {
  update: 0x4ade80, // เขียว
  promo:  0xfbbf24, // เหลือง
  info:   0x60a5fa, // ฟ้า
}

// ============================================================
// ตรวจและโพสต์ announcement ใหม่
// ============================================================
async function postPendingAnnouncements(): Promise<void> {
  const channel = await client.channels.fetch(DISCORD_CHANNEL_ID)
  if (!channel?.isTextBased()) {
    console.error('Channel not found or not text-based')
    return
  }

  // ดึง announcement ที่ยังไม่ได้โพสต์ Discord
  const { rows } = await db.query<{
    id: number
    project_id: string
    published_at: string
    title: string
    content: string | null
    type: string
  }>(`
    SELECT a.id, a.project_id, a.published_at, a.title, a.content, a.type
    FROM   announcements a
    WHERE  a.discord_posted_at IS NULL
    ORDER  BY a.published_at ASC
  `)

  for (const row of rows) {
    const embed = new EmbedBuilder()
      .setTitle(row.title)
      .setDescription(row.content ?? '')
      .setColor(TYPE_COLOR[row.type] ?? 0x94a3b8)
      .setFooter({ text: `${row.project_id} • ${row.published_at}` })
      .setTimestamp()

    await (channel as TextChannel).send({ embeds: [embed] })

    // mark ว่าโพสต์แล้ว
    await db.query(
      `UPDATE announcements SET discord_posted_at = NOW() WHERE id = $1`,
      [row.id]
    )

    console.log(`Posted announcement #${row.id}: ${row.title}`)
  }
}

// ============================================================
// Main
// ============================================================
client.once('ready', async () => {
  console.log(`Bot ready: ${client.user?.tag}`)

  // โพสต์ทันทีที่ bot เริ่ม จากนั้น poll ทุก POLL_INTERVAL_MS
  await postPendingAnnouncements()
  setInterval(postPendingAnnouncements, POLL_INTERVAL_MS)
})

client.on('error', (err) => console.error('Discord client error:', err))

client.login(DISCORD_TOKEN)
