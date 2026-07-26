"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
// Railway inject DATABASE_URL อัตโนมัติเมื่อ add PostgreSQL service
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL env var is required');
}
exports.db = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
});
