import { NextRequest, NextResponse } from 'next/server';

// Notion MCP API client (imported via MCP server)
import { functions } from '@/lib/mcp';

const NOTION_DATABASE_ID = '22f1a80d-02b9-80ce-b533-df182fd6d0c9';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Prepare Notion properties (adjust property names as needed)
    const properties = {
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
    };

    // Call MCP Notion API to create a page
    await functions.mcp_notionApi_API-post-page({
      parent: { database_id: NOTION_DATABASE_ID },
      properties,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as any)?.message || 'Unknown error' }, { status: 500 });
  }
} 