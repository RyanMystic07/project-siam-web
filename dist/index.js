"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const serve_static_1 = require("@hono/node-server/serve-static");
const hono_1 = require("hono");
const cors_1 = require("hono/cors");
const db_js_1 = require("./db.js");
const app = new hono_1.Hono();
// ============================================================
// Middleware
// ============================================================
app.use('/api/*', (0, cors_1.cors)());
// Guard สำหรับ endpoint ที่ต้องการสิทธิ์แอดมิน
// ตั้งค่า ADMIN_TOKEN บน Railway environment variables
function isAdmin(token) {
    return !!process.env.ADMIN_TOKEN && token === `Bearer ${process.env.ADMIN_TOKEN}`;
}
// ============================================================
// Health
// ============================================================
app.get('/api/health', (c) => c.json({ ok: true }));
// ============================================================
// Projects
// ============================================================
app.get('/api/projects', async (c) => {
    const { rows } = await db_js_1.db.query(`
    SELECT id, name, tagline, description, cover_image,
           accent_color, accent_glow, primary_color, primary_glow, bg_orb,
           sort_order
    FROM   projects
    ORDER  BY sort_order
  `);
    return c.json({ projects: rows });
});
app.get('/api/projects/:id', async (c) => {
    const id = c.req.param('id');
    const { rows } = await db_js_1.db.query(`SELECT * FROM projects WHERE id = $1`, [id]);
    if (!rows[0])
        return c.json({ error: 'Not found' }, 404);
    return c.json({ project: rows[0] });
});
// ============================================================
// Announcements
// ============================================================
// GET — ดึงประกาศทั้งหมด (กรอง project ได้ผ่าน ?project_id=)
app.get('/api/announcements', async (c) => {
    const projectId = c.req.query('project_id');
    const { rows } = await db_js_1.db.query(`SELECT id, project_id, published_at, title, content, type
     FROM   announcements
     ${projectId ? 'WHERE project_id = $1' : ''}
     ORDER  BY published_at DESC
     LIMIT  50`, projectId ? [projectId] : []);
    return c.json({ announcements: rows });
});
// POST — เพิ่มประกาศใหม่ (ต้องการ ADMIN_TOKEN)
app.post('/api/announcements', async (c) => {
    const auth = c.req.header('Authorization');
    if (!isAdmin(auth)) {
        return c.json({ error: 'Unauthorized' }, 401);
    }
    const body = await c.req.json();
    // Validate required fields
    if (!body.project_id || !body.published_at || !body.title) {
        return c.json({ error: 'project_id, published_at, and title are required' }, 400);
    }
    const { rows } = await db_js_1.db.query(`INSERT INTO announcements (project_id, published_at, title, content, type)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`, [
        body.project_id,
        body.published_at,
        body.title,
        body.content ?? null,
        body.type ?? 'update',
    ]);
    return c.json({ announcement: rows[0] }, 201);
});
// ============================================================
// Static frontend
// ============================================================
app.use('/*', (0, serve_static_1.serveStatic)({ root: './' }));
// ============================================================
// Start
// ============================================================
const port = Number(process.env.PORT) || 3000;
console.log(`Server running on port ${port}`);
(0, node_server_1.serve)({ fetch: app.fetch, port });
