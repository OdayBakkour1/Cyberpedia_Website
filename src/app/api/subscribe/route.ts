import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const NOTION_DATABASE_ID = '22f1a80d-02b9-8010-9a26-f77ce9f680e3';
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        'Name': {
          title: [
            {
              text: { content: email },
            },
          ],
        },
        'Email Address': {
          email: email,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
} 