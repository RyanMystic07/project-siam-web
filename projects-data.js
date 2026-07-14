const PROJECTS_DATA = [
  {
    id: "project-1",
    name: "project-1",
    tagline: "not ready yet",
    description: "not ready yet",
    theme: {
      accentColor: "#d4af37",
      accentGlow: "rgba(212, 175, 55, 0.4)",
      primaryColor: "#a82229",
      primaryGlow: "rgba(168, 34, 41, 0.5)",
      bgOrb: "radial-gradient(circle, rgba(168,34,41,0.15) 0%, rgba(212,175,55,0.08) 50%, rgba(12,13,18,0) 100%)"
    },
    coverImage: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
    banners: [
      {
        id: 1,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      },
      {
        id: 2,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      },
      {
        id: 3,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      }
    ],
    announcements: [
      {
        id: 1,
        date: "2026-07-10",
        title: "not ready yet",
        content: "not ready yet",
        type: "update"
      },
      {
        id: 2,
        date: "2026-07-08",
        title: "not ready yet",
        content: "not ready yet",
        type: "promo"
      },
      {
        id: 3,
        date: "2026-07-05",
        title: "not ready yet",
        content: "not ready yet",
        type: "info"
      }
    ],
    guidelines: [
      {
        id: 1,
        icon: "🛡️",
        title: "not ready yet",
        content: "not ready yet"
      },
      {
        id: 2,
        icon: "🌾",
        title: "not ready yet",
        content: "not ready yet"
      },
      {
        id: 3,
        icon: "⚔️",
        title: "not ready yet",
        content: "not ready yet"
      }
    ],
    story: `<h2>story project</h2>
<p>not ready yet <strong>"not ready yet"</strong> not ready yet</p>
<p>not ready yet <em>"not ready yet"</em> not ready yet</p>
<p>not ready yet</p>`,
    jobs: [
      {
        id: 1,
        icon: "⚔️",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 2,
        icon: "🏹",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 3,
        icon: "🔮",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 4,
        icon: "🧪",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      }
    ],
    rules: [
      {
        id: 1,
        icon: "🌐",
        categoryName: "กฎคอมมูนิตี้ส่วนรวม (Community Guidelines)",
        subItems: [
          {
            id: "1.1",
            title: "สิทธิความเป็นส่วนตัวและการจัดการข้อมูล Faction",
            content: `<p>ข้อมูลพื้นฐานของทุกกลุ่มการเมือง (Faction) เช่น วันประกาศเปิดตัว, รายชื่อผู้ดูแล/ผู้นำ, และยอดสมาชิกในสังกัด จะต้องถูกบันทึกและแสดงผลอย่างเปิดเผยบนระบบเว็บบอร์ดของคอมมู</p>
<p>ห้ามผู้เล่นหรือกลุ่มใดๆ ทำการแทรกแซง OOC (นอกระบบโรลเพลย์) เช่น การเข้ายึดครองดิสคอร์ด หรือพยายามเข้าไปเป็นเผด็จการบริหารระบบภายในของ Faction ผู้อื่น หากตรวจสอบพบหลักฐานการคุกคาม ทีมบริหารจะพิจารณาบทลงโทษขั้นสูงสุด</p>`
          },
          {
            id: "1.2",
            title: "การประสานงานและการประชาสัมพันธ์ในเซิร์ฟเวอร์",
            content: `<p>การประกาศข่าวสาร กิจกรรม หรือการเปิดรับสมัครสมาชิกเข้าสังกัดภายในตัวเกม ให้ดำเนินการผ่านคำสั่งระบบที่กำหนดไว้เท่านั้น คือ คำสั่ง :h (ข้อความส่วนบนของจอ) สำหรับการแจ้งเตือนทั่วไป หรือคำสั่ง :n (ข้อความกลางจอ) สำหรับการประกาศกรณีสำคัญ ห้ามทำการสแปมข้อความในระบบดิสคอร์ดหรือช่องแชท</p>`
          },
          {
            id: "1.3",
            title: "ข้อจำกัดด้านการบริหารควบสองคอมมูนิตี้",
            content: `<p>ห้ามผู้ดำรงตำแหน่งผู้นำประเทศ หรือเจ้าของ Faction ไปรับตำแหน่งสำคัญ หรือมีส่วนร่วมในการจัดทำ/บริหารจัดการในคอมมูนิตี้หรือแมพอื่นที่เป็นคู่แข่ง เพื่อป้องกันปัญหาการโยกย้ายฐานผู้เล่นโดยมิชอบ หากตรวจพบจะถูกปลดออกจากตำแหน่งบริหารในเซิร์ฟเวอร์นี้ทันที</p>`
          }
        ]
      },
      {
        id: 2,
        icon: "👥",
        categoryName: "กฎเกี่ยวกับระบบการคัดกรองผู้เล่น (Player Verification & White-list)",
        subItems: [
          {
            id: "2.1",
            title: "ระบบการลงทะเบียนและการถือครองตัวละคร",
            content: `<p>ผู้เล่นทุกคนที่จะเข้ามาดำเนินบทบาทในเซิร์ฟเวอร์ จะต้องทำการยืนยันตัวตนและสร้างประวัติตัวละครผ่าน <strong>ระบบบอทดิสคอร์ดอัตโนมัติ</strong> เพื่อแปลงข้อมูลเข้าสู่บัตรประจำตัวละครอย่างเป็นระบบ (ยกเลิกการพิมพ์ส่งข้อมูลประวัติในช่องแชททั่วไป)</p>
<p><strong>ข้อจำกัดสิทธิ์ตัวละคร (Single Character Rule):</strong> เพื่อความเท่าเทียมและรักษาคุณภาพของการดำเนินสตอรี่ ผู้เล่น 1 คน มีสิทธิ์ลงทะเบียนและเล่นได้เพียง 1 ตัวละคร (1 Role) เท่านั้น ห้ามใช้งานตัวละครหลายตัวพร้อมกันเด็ดขาด</p>`
          },
          {
            id: "2.2",
            title: "เงื่อนไขการสิ้นสุดและการเปลี่ยนบทบาท",
            content: `<p>ผู้เล่นจะสามารถย้ายสังกัด ย้ายประเทศ หรือขอเปลี่ยนตัวละครใหม่ได้ต่อเมื่อตัวละครเดิมสิ้นสุดเนื้อเรื่องอย่างสมบูรณ์ หรือเสียชีวิตในโรลเพลย์ (Permadeath) แล้วเท่านั้น โดยการเริ่มบทบาทใหม่จะต้องเริ่มต้นไต่เต้าจากระดับต่ำสุดตามระบบ</p>`
          }
        ]
      },
      {
        id: 3,
        icon: "⚔️",
        categoryName: "กฎเกี่ยวกับการดำเนินบทบาทและการทหาร (Roleplay & War Rules)",
        subItems: [
          {
            id: "3.1",
            title: "ขอบเขตและอำนาจการรักษาความสงบภายในพระนคร",
            content: `<p>พื้นที่ชั้นใน (พระนคร) เป็นเขตปลอดสงครามและการสู้รบขนาดใหญ่ ห้ามผู้เล่นกระทำการใดๆ ที่เข้าข่ายพฤติกรรม "เรื้อน" เช่น การเดินชักอาวุธปืนหรือดาบขึ้นมาไล่สังหารผู้เล่นอื่นอย่างไร้เหตุผลในโรลเพลย์</p>
<p><strong>การระงับเหตุภายในเมือง:</strong> หากเกิดการทะเลาะวิวาทหรือข้อพิพาทขนาดเล็ก (จำนวนผู้เกี่ยวข้อง 2-5 คน) ให้ดำเนินไปตามบทบาทโดยให้เป็นหน้าที่ของฝ่ายนครบาล (ตำรวจในเกม) ในการควบคุมตัวและลงโทษตามกฎหมายอินเกม แอดมินจะไม่เข้าแทรกแซงในฐานะกฎคอมมู</p>
<p><strong>ข้อกำหนดบทบาทอิสระ (โจรและกบฏ):</strong> บทบาทโจรเป็น Role เสรีในการปล้น จี้ หรือโจมตีตามเนื้อเรื่อง หากโจรทำการสังหารผู้เล่นในเขตพระนครตามโรลเพลย์ (IC) แอดมินจะไม่พิจารณาลงโทษแบน (ไม่นับเป็นเรื้อน) แต่ผู้เล่นในบทบาทโจรต้องยอมรับความเสี่ยงที่จะถูกตำรวจในเกมตามล่าและจับติดคุกตามระบบ</p>`
          },
          {
            id: "3.2",
            title: "มาตรการและกฎบัตรคุ้มครอง Faction เปิดใหม่",
            content: `<p>Faction ที่เพิ่งจดทะเบียนเปิดทำการจะได้รับสิทธิ์คุ้มครองจากระบบเพื่อสร้างความยุติธรรมดังนี้:</p>
<ul>
<li>ห้าม Faction ขนาดใหญ่ใช้อำนาจนอกระบบโรลเพลย์ (OOC) บีบบังคับหรือกดดันให้ Faction เปิดใหม่ลงนามในสัญญาการค้าที่เสียเปรียบ</li>
<li>ห้าม Faction ขนาดใหญ่ดึงตัวหรือชักชวนกำลังพลจาก Faction เปิดใหม่มาร่วมกลุ่มในลักษณะที่เป็นการทำลายกลุ่ม</li>
<li>สิทธิ์การคุ้มครองจะสิ้นสุดลงทันทีเมื่อครบกำหนดระยะเวลา หรือในกรณีที่ Faction เปิดใหม่นั้นเป็นฝ่ายเริ่มประกาศสงครามหรือเปิดฉากโจมตีกลุ่มอื่นก่อน</li>
</ul>`
          },
          {
            id: "3.3",
            title: "ข้อบังคับว่าด้วยการทำสงครามและการปฏิวัติ",
            content: `<p><strong>การประกาศศึก:</strong> การประกาศสงครามต้องมีเหตุผลสนับสนุนภายในเกม (IC) อย่างชัดเจน เช่น ข้อพิพาทเรื่องดินแดน การแย่งชิงทรัพยากร หรือราษฎรถูกทำร้าย ห้ามนำความขัดแย้งส่วนตัวนอกเกม (OOC) มาเปิดศึกเด็ดขาด และต้องยื่นเอกสารผ่านระบบ Ticket ด้วยภาษาสมัยนั้นที่เป็นทางการ</p>
<p><strong>พื้นที่สมรภูมิ (Battlefield):</strong> เมื่อการประกาศสงครามอนุมัติ การสู้รบทั้งหมด ต้องทำในแมพแยก (เซิร์ฟเวอร์สงคราม) เท่านั้น ห้ามเปิดฉากปะทะในแมพหลัก เพื่อป้องกันไม่ให้รบกวนผู้เล่นปกติ</p>
<p><strong>การปลดแอกและการซ้อมรบ:</strong> รัฐที่ต้องการปฏิวัติแข็งเมืองต้องดำเนินเนื้อเรื่องความขัดแย้งอย่างน้อย 5 วัน โดยสิทธิ์ในการคุมเมืองขึ้นของรัฐผู้ชนะจะมีระยะเวลาสูงสุดไม่เกิน 2 สัปดาห์ ส่วนการ "ซ้อมรบ" เพื่อทดสอบกำลังพล ต้องแจ้งฝ่ายตรงข้ามล่วงหน้าและจะไม่มีผลต่อเนื้อเรื่องหลัก (IC Story)</p>`
          }
        ]
      },
      {
        id: 4,
        icon: "🚫",
        categoryName: "บทลงโทษและการยกเลิกโทษ (Penalties & Appeals)",
        subItems: [
          {
            id: "4.1",
            title: "มาตรการลงโทษขั้นเด็ดขาด (ระบบใบแดงทันที)",
            content: `<p>เซิร์ฟเวอร์มีนโยบายต่อต้านพฤติกรรม Toxic อย่างเข้มงวด หากพบผู้เล่นกระทำความผิดในพื้นที่สาธารณะดังต่อไปนี้ แอดมินจะดำเนินการ <strong>ออกใบแดง (แบนออกจากระบบ) ทันที</strong> โดยไม่มีการตักเตือนหรือให้ใบเหลือง:</p>
<ul>
<li><strong>การ Toxic และ Bully:</strong> การด่าทอรุนแรง การเหยียดสีผิว เชื้อชาติ ศาสนา ล้อเลียนเรื่องวัฒนธรรมและความเชื่อ (เช่น ล้อเลียนเรื่องการไม่กินหมู) หรือการล้อเลียนด่าทอไปถึงบุพการี</li>
<li><strong>การใช้โปรแกรมโกงและช่องโหว่ (Cheats & Exploits):</strong> การใช้โปรแกรมช่วยเล่น โปรแกรมดัดแปลงทุกรูปแบบ หรือการจงใจอาศัยช่องโหว่/ข้อผิดพลาดของระบบ (Bug) เพื่อสร้างความได้เปรียบให้แก่ตนเองหรือกลุ่ม โทษสถานเดียวคือ ใบแดงและขึ้นบัญชีดำ (Blacklist) ถาวร</li>
<li><strong>ความผิดเชิงพาณิชย์:</strong> การโฆษณาโปรโมทคอมมูนิตี้อื่น หรือการซื้อขายไอเทม/เงินในเกมด้วยเงินจริง (RMT) โดยไม่ได้รับอนุญาต</li>
</ul>`
          },
          {
            id: "4.2",
            title: "การอุทธรณ์และการยกเลิกโทษ (Appeals)",
            content: `<p>ผู้เล่นที่ถูกลงโทษ (ยกเว้นกรณี Blacklist จากโปรแกรมโกงหรือเจตนาบัคทำลายระบบ) มีสิทธิ์ยื่นคำร้องขออุทธรณ์โทษได้ผ่านช่องทาง Ticket บนเว็บไซต์หรือดิสคอร์ดกลาง โดยต้องชี้แจงเหตุผลและแสดงหลักฐานแก้ต่างอย่างสุภาพ</p>
<p>ทีมบริหารจะประชุมเพื่อพิจารณาหลักฐานย้อนหลังตามความเหมาะสม การตัดสินใจของบอร์ดบริหารสูงสุดถือเป็นที่สิ้นสุด</p>`
          }
        ]
      },
      {
        id: 5,
        icon: "👮",
        categoryName: "ข้อบังคับและขอบเขตอำนาจแอดมิน (Admin & Staff Regulations)",
        subItems: [
          {
            id: "5.1",
            title: "หน้าที่และจรรยาบรรณของทีมงานผู้ดูแล",
            content: `<p>ทีมงานแอดมินมีหน้าที่ควบคุมดูแลกฎความเป็นระเบียบ OOC (นอกโรลเพลย์) ป้องกันโปรแกรมโกง และดูแลความเสถียรของระบบ Gameplay เท่านั้น จะต้องปฏิบัติหน้าที่ด้วยความโปร่งใส เป็นกลาง และไม่เอื้อประโยชน์ให้แก่ Faction ใดเป็นพิเศษ</p>
<p>แอดมินไม่มีสิทธิ์เข้าไปยุ่งเกี่ยว แทรกแซง หรือชี้นำเนื้อเรื่องภายในเกม (IC) ที่ดำเนินไปอย่างถูกต้องตามกฎ (เช่น การจับกุมโจรในพระนคร ให้เป็นหน้าที่ของระบบตำรวจในเกมจัดการกันเอง)</p>`
          },
          {
            id: "5.2",
            title: "ข้อห้ามและการลงโทษทีมงาน",
            content: `<p>ห้ามแอดมินใช้คำสั่งผู้ดูแล (Admin Commands) ในการเอื้อประโยชน์ให้แก่ตนเอง หรือกลุ่มเพื่อนในโรลเพลย์ หากตรวจพบหลักฐานการใช้อำนาจมิชอบเพื่อผลประโยชน์ส่วนตน จะถูกปลดออกจากตำแหน่งพนักงานและแบนออกจากระบบคอมมูนิตี้ทันที</p>
<p>ผู้เล่นทุกคนมีสิทธิ์บันทึกวิดีโอหรือหลักฐานการปฏิบัติหน้าที่ของทีมงาน หากพบพฤติกรรมที่ไม่เป็นธรรม สามารถยื่นเรื่องร้องเรียนตรงต่อผู้พัฒนาหรือผู้บริหารสูงสุดได้ตลอดเวลา</p>`
          }
        ]
      }
    ],
    statuses: [
      {
        id: 1,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      },
      {
        id: 3,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      }
    ],
    services: [
      {
        id: 1,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 3,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 4,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 5,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 6,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 7,
        name: "not ready yet",
        price: 300,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 8,
        name: "not ready yet",
        price: 450,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      }
    ],
    map: {
      image: "map.jpg",
      // ตัวอย่างโครงสร้างข้อมูล "nations" (ประเทศ/ดินแดน + พันธมิตร/สงคราม)
      // - id           : เลขไอดีประเทศ ใช้อ้างอิงในช่อง allies / atWar ของประเทศอื่น
      // - name         : ชื่อประเทศ
      // - foundedDate  : เปิดเมื่อวันที่/สมัยใด
      // - founder      : ผู้ก่อตั้ง/เจ้าของประเทศ
      // - memberCount  : จำนวนสมาชิกในประเทศ (ตัวเลข)
      // - status       : "independent" (เอกราช) | "colony" (เมืองขึ้น) | "collapsed" (ล่มสลาย)
      // - description  : รายละเอียด/คำอธิบายเพิ่มเติม (ไม่ใส่ก็ได้)
      // - allies       : array ของ id ประเทศที่เป็นพันธมิตรด้วย เช่น [2] = เป็นพันธมิตรกับประเทศ id 2
      // - atWar        : array ของ id ประเทศที่กำลังทำสงครามด้วย เช่น [3] = ทำสงครามกับประเทศ id 3
      // ตัวอย่าง: ถ้าอยุธยา (id:1) เป็นพันธมิตรกับล้านช้าง (id:2)
      //   -> อยุธยา ใส่ allies: [2]  และ ล้านช้าง ใส่ allies: [1] ด้วย (ใส่ทั้งสองฝั่งให้ตรงกัน)
      nations: [
        {
          id: 1,
          name: "not ready yet",
          foundedDate: "not ready yet",
          founder: "not ready yet",
          memberCount: 0,
          status: "independent",
          description: "not ready yet",
          allies: [2],
          atWar: [3]
        },
        {
          id: 2,
          name: "not ready yet",
          foundedDate: "not ready yet",
          founder: "not ready yet",
          memberCount: 0,
          status: "colony",
          description: "not ready yet",
          allies: [1],
          atWar: []
        },
        {
          id: 3,
          name: "not ready yet",
          foundedDate: "not ready yet",
          founder: "not ready yet",
          memberCount: 0,
          status: "collapsed",
          description: "not ready yet",
          allies: [],
          atWar: [1]
        }
      ],
      pins: [
        {
          id: 1,
          x: 50,
          y: 50,
          name: "not ready yet",
          type: "safezone",
          description: "not ready yet"
        },
        {
          id: 2,
          x: 28,
          y: 40,
          name: "not ready yet",
          type: "danger",
          description: "not ready yet"
        },
        {
          id: 3,
          x: 75,
          y: 35,
          name: "not ready yet",
          type: "vip",
          description: "not ready yet"
        },
        {
          id: 4,
          x: 65,
          y: 70,
          name: "not ready yet",
          type: "safezone",
          description: "not ready yet"
        }
      ]
    }
  },
  {
    id: "project-2",
    name: "project-2",
    tagline: "not ready yet",
    description: "not ready yet",
    theme: {
      accentColor: "#00b4d8",
      accentGlow: "rgba(0, 180, 216, 0.4)",
      primaryColor: "#0077b6",
      primaryGlow: "rgba(0, 119, 182, 0.5)",
      bgOrb: "radial-gradient(circle, rgba(0,119,182,0.15) 0%, rgba(0,180,216,0.08) 50%, rgba(12,13,18,0) 100%)"
    },
    coverImage: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
    banners: [
      {
        id: 1,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      },
      {
        id: 2,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      }
    ],
    announcements: [
      {
        id: 1,
        date: "2026-07-11",
        title: "not ready yet",
        content: "not ready yet",
        type: "update"
      },
      {
        id: 2,
        date: "2026-07-09",
        title: "not ready yet",
        content: "not ready yet",
        type: "promo"
      }
    ],
    guidelines: [
      {
        id: 1,
        icon: "⚙️",
        title: "not ready yet",
        content: "not ready yet"
      },
      {
        id: 2,
        icon: "🛩️",
        title: "not ready yet",
        content: "not ready yet"
      }
    ],
    story: `<h2>not ready yet</h2>
<p>not ready yet</p>
<p>not ready yet <strong>"not ready yet"</strong>  not ready yet</p>`,
    jobs: [
      {
        id: 1,
        icon: "🛠️",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 2,
        icon: "🗡️",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      }
    ],
    rules: [
      {
        id: 1,
        categoryName: "rules for project 2",
        rulesList: [
          "not ready yet",
          "not ready yet"
        ]
      }
    ],
    statuses: [
      {
        id: 1,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      }
    ],
    services: [
      {
        id: 1,
        name: "not ready yet",
        price: 200,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        price: 200,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 3,
        name: "not ready yet",
        price: 200,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
    ],
    map: {
      image: "map.jpg",
      pins: [
        {
          id: 1,
          x: 60,
          y: 40,
          name: "not ready yet",
          type: "safezone",
          description: "not ready yet"
        },
        {
          id: 2,
          x: 30,
          y: 60,
          name: "not ready yet",
          type: "danger",
          description: "not ready yet"
        }
      ]
    }
  },
  {
    id: "project-3",
    name: "project-3",
    tagline: "not ready yet",
    description: "not ready yet",
    theme: {
      accentColor: "hsl(0, 0%, 100%)",
      accentGlow: "rgba(0, 0, 0, 0.4)",
      primaryColor: "#f5f3f7",
      primaryGlow: "rgba(6, 5, 7, 0.5)",
      bgOrb: "radial-gradient(circle, rgba(114,9,183,0.15) 0%, rgba(155,93,229,0.08) 50%, rgba(12,13,18,0) 100%)"
    },
    coverImage: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
    banners: [
      {
        id: 1,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      },
      {
        id: 2,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      },
      {
        id: 3,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        title: "not ready yet",
        subtitle: "not ready yet"
      }
    ],
    announcements: [
      {
        id: 1,
        date: "2026-07-10",
        title: "not ready yet",
        content: "not ready yet",
        type: "update"
      },
      {
        id: 2,
        date: "2026-07-08",
        title: "not ready yet",
        content: "not ready yet",
        type: "promo"
      },
      {
        id: 3,
        date: "2026-07-05",
        title: "not ready yet",
        content: "not ready yet",
        type: "info"
      }
    ],
    guidelines: [
      {
        id: 1,
        icon: "🛡️",
        title: "not ready yet",
        content: "not ready yet"
      },
      {
        id: 2,
        icon: "🌾",
        title: "not ready yet",
        content: "not ready yet"
      },
      {
        id: 3,
        icon: "⚔️",
        title: "not ready yet",
        content: "not ready yet"
      }
    ],
    story: `<h2>not ready yet</h2>
<p>not ready yet <strong>"เนรมิตสยาม"</strong> not ready yet</p>
<p>not ready yet <em>"not ready yet"</em> not ready yet</p>
<p>not ready yet</p>`,
    jobs: [
      {
        id: 1,
        icon: "⚔️",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 2,
        icon: "🏹",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 3,
        icon: "🔮",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      },
      {
        id: 4,
        icon: "🧪",
        name: "not ready yet",
        status: "not ready yet",
        abilities: "not ready yet",
        description: "not ready yet"
      }
    ],
    rules: [
      {
        id: 1,
        categoryName: "กฎทั่วไปของเซิร์ฟเวอร์",
        rulesList: [
          "not ready yet",
          "not ready yet",
          "not ready yet",
          "not ready yet"
        ]
      },
      {
        id: 2,
        categoryName: "rules for project 3",
        rulesList: [
          "not ready yet",
          "not ready yet",
          "not ready yet"
        ]
      }
    ],
    statuses: [
      {
        id: 1,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      },
      {
        id: 3,
        name: "not ready yet",
        description: "not ready yet",
        rights: "not ready yet"
      }
    ],
    services: [
      {
        id: 1,
        name: "not ready yet",
        price: 150,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 2,
        name: "not ready yet",
        price: 300,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      },
      {
        id: 3,
        name: "not ready yet",
        price: 450,
        image: "file:///C:/Users/Admin/.gemini/antigravity/scratch/neramit-siam-web/%E0%B9%80%E0%B8%99%E0%B8%A3%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1.png",
        description: "not ready yet"
      }
    ],
    map: {
      image: "map.jpg",
      pins: [
        {
          id: 1,
          x: 50,
          y: 50,
          name: "not ready yet",
          type: "safezone",
          description: "not ready yet"
        },
        {
          id: 2,
          x: 28,
          y: 40,
          name: "not ready yet",
          type: "danger",
          description: "not ready yet"
        },
        {
          id: 3,
          x: 75,
          y: 35,
          name: "not ready yet",
          type: "vip",
          description: "not ready yet"
        },
        {
          id: 4,
          x: 65,
          y: 70,
          name: "not ready yet",
          type: "safezone",
          description: "not ready yet"
        }
      ]
    }
  }
];

window.PROJECTS_DATA = PROJECTS_DATA;
