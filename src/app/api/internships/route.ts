import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const NOTION_DATABASE_ID = '22f1a80d-02b9-80d2-9923-f4e5113e990e';
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [{ property: 'Deadline', direction: 'ascending' }],
    });
    const internships = response.results.map((page: PageObjectResponse) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props['Title']?.title?.[0]?.plain_text || '',
        duration: props['Duration']?.rich_text?.[0]?.plain_text || '',
        openings: props['Openings']?.rich_text?.[0]?.plain_text || '',
        deadline: props['Deadline']?.date?.start || '',
        shortDescription: props['Short Description']?.rich_text?.[0]?.plain_text || '',
        overview: props['Overview']?.rich_text?.[0]?.plain_text || '',
        requirements: props['Requirements']?.rich_text?.[0]?.plain_text || '',
        responsibilities: props['Responsibilities']?.rich_text?.[0]?.plain_text || '',
        outcome: props['Outcome']?.rich_text?.[0]?.plain_text || '',
        applicationEmail: props['Application Email']?.email || '',
        applicationSubject: props['Application Subject']?.rich_text?.[0]?.plain_text || '',
      };
    });
    return NextResponse.json({ internships });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 