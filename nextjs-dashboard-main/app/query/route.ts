import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}


export async function GET() {
    try {
        const data = await listInvoices();

        return NextResponse.json({
            success: true,
            data,
      });
    } catch (error) {
        console.error('Error querying invoices:', error);
        return NextResponse.json(
            { success: false, message: 'Database query failed', error: String(error) },
            { status: 500 }
        );
    }
}
