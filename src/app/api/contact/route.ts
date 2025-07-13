import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const NOTION_DATABASE_ID = '22f1a80d-02b9-80ce-b533-df182fd6d0c9';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: { content: name },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: { content: email },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: { content: message },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as any)?.message || 'Unknown error' }, { status: 500 });
  }
} 