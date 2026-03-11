import pool from "../../../lib/pool";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const res = await pool.query('SELECT * FROM postgres_users');
        return NextResponse.json(res.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}