-- ============================================================
-- Project Siam — PostgreSQL Schema
-- Railway Database
-- ============================================================

-- Enums
CREATE TYPE announcement_type AS ENUM ('update', 'promo', 'info');
CREATE TYPE nation_status AS ENUM ('independent', 'colony', 'collapsed');
CREATE TYPE pin_type AS ENUM ('safezone', 'danger', 'vip');
CREATE TYPE relation_type AS ENUM ('ally', 'war');

-- ============================================================
-- projects — ตารางหลัก
-- ============================================================
CREATE TABLE projects (
  id                  TEXT PRIMARY KEY,       -- e.g. "project-1"
  name                TEXT NOT NULL,
  tagline             TEXT,
  description         TEXT,
  cover_image         TEXT,
  story               TEXT,                   -- HTML content
  -- theme colors
  accent_color        TEXT,
  accent_glow         TEXT,
  primary_color       TEXT,
  primary_glow        TEXT,
  bg_orb              TEXT,
  sort_order          INT  NOT NULL DEFAULT 0,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- banners — สไลด์โชว์ของแต่ละโปรเจค
-- ============================================================
CREATE TABLE banners (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order  INT  NOT NULL DEFAULT 0,
  image       TEXT NOT NULL,
  title       TEXT,
  subtitle    TEXT
);

-- ============================================================
-- announcements — ประกาศ (web แสดง + bot โพสต์ Discord)
-- ============================================================
CREATE TABLE announcements (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  published_at DATE NOT NULL,
  title       TEXT NOT NULL,
  content     TEXT,
  type             announcement_type NOT NULL DEFAULT 'update',
  discord_posted_at TIMESTAMPTZ,              -- NULL = ยังไม่โพสต์ Discord
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- guidelines — แนวทาง/คู่มือเบื้องต้น
-- ============================================================
CREATE TABLE guidelines (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order  INT  NOT NULL DEFAULT 0,
  icon        TEXT,
  title       TEXT NOT NULL,
  content     TEXT
);

-- ============================================================
-- jobs — อาชีพ/คลาสตัวละคร
-- ============================================================
CREATE TABLE jobs (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order  INT  NOT NULL DEFAULT 0,
  icon        TEXT,
  name        TEXT NOT NULL,
  status      TEXT,
  abilities   TEXT,
  description TEXT
);

-- ============================================================
-- player_statuses — สถานะผู้เล่น (ยศ/ชนชั้น)
-- ============================================================
CREATE TABLE player_statuses (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order  INT  NOT NULL DEFAULT 0,
  name        TEXT NOT NULL,
  description TEXT,
  rights      TEXT
);

-- ============================================================
-- services — บริการ/ไอเทมร้านค้า
-- ============================================================
CREATE TABLE services (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order  INT  NOT NULL DEFAULT 0,
  name        TEXT NOT NULL,
  price       NUMERIC(10,2) NOT NULL DEFAULT 0,
  image       TEXT,
  description TEXT
);

-- ============================================================
-- rules — กฎ (JSONB เพราะ structure ต่างกันระหว่างโปรเจค)
-- project-1: { subItems: [{id, title, content, subRules[]}] }
-- project-2/3: { rulesList: [string] }
-- ============================================================
CREATE TABLE rules (
  id            SERIAL PRIMARY KEY,
  project_id    TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sort_order    INT  NOT NULL DEFAULT 0,
  icon          TEXT,
  category_name TEXT NOT NULL,
  content       JSONB NOT NULL DEFAULT '[]'
);

-- ============================================================
-- maps — แผนที่ (1 project = 1 map)
-- ============================================================
CREATE TABLE maps (
  id          SERIAL PRIMARY KEY,
  project_id  TEXT NOT NULL UNIQUE REFERENCES projects(id) ON DELETE CASCADE,
  image       TEXT NOT NULL
);

-- ============================================================
-- nations — ประเทศ/ดินแดน
-- ============================================================
CREATE TABLE nations (
  id            SERIAL PRIMARY KEY,
  map_id        INT  NOT NULL REFERENCES maps(id) ON DELETE CASCADE,
  game_id       INT  NOT NULL,
  name          TEXT NOT NULL,
  founded_date  TEXT,
  founder       TEXT,
  member_count  INT  NOT NULL DEFAULT 0,
  status        nation_status NOT NULL DEFAULT 'independent',
  description   TEXT,
  UNIQUE (map_id, game_id)
);

-- nation_relations — พันธมิตร/สงคราม
CREATE TABLE nation_relations (
  nation_id         INT NOT NULL REFERENCES nations(id) ON DELETE CASCADE,
  related_nation_id INT NOT NULL REFERENCES nations(id) ON DELETE CASCADE,
  relation          relation_type NOT NULL,
  PRIMARY KEY (nation_id, related_nation_id)
);

-- ============================================================
-- map_pins — หมุดบนแผนที่
-- ============================================================
CREATE TABLE map_pins (
  id          SERIAL PRIMARY KEY,
  map_id      INT  NOT NULL REFERENCES maps(id) ON DELETE CASCADE,
  game_id     INT  NOT NULL,
  x           NUMERIC(5,2) NOT NULL,
  y           NUMERIC(5,2) NOT NULL,
  name        TEXT NOT NULL,
  type        pin_type NOT NULL DEFAULT 'safezone',
  description TEXT
);

-- ============================================================
-- waitlist — ผู้สนใจก่อนเปิดเกม (จาก PRODUCT.md)
-- ============================================================
CREATE TABLE waitlist (
  id          SERIAL PRIMARY KEY,
  email       TEXT NOT NULL UNIQUE,
  project_id  TEXT REFERENCES projects(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX idx_banners_project       ON banners(project_id);
CREATE INDEX idx_announcements_project ON announcements(project_id);
CREATE INDEX idx_announcements_date    ON announcements(published_at DESC);
CREATE INDEX idx_jobs_project          ON jobs(project_id);
CREATE INDEX idx_services_project      ON services(project_id);
CREATE INDEX idx_rules_project         ON rules(project_id);
CREATE INDEX idx_nations_map           ON nations(map_id);
CREATE INDEX idx_map_pins_map          ON map_pins(map_id);
