import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const NOTION_DATABASE_ID = '22f1a80d-02b9-80d2-9923-f4e5113e990e';
const notion = new Client({ auth: process.env.NOTION_TOKEN });

function getTitle(props: PageObjectResponse['properties'], key: string) {
  return props[key]?.type === 'title' && props[key].title[0]
    ? props[key].title[0].plain_text
    : '';
}
function getRichText(props: PageObjectResponse['properties'], key: string) {
  return props[key]?.type === 'rich_text' && props[key].rich_text[0]
    ? props[key].rich_text[0].plain_text
    : '';
}
function getDate(props: PageObjectResponse['properties'], key: string) {
  return props[key]?.type === 'date' && props[key].date?.start
    ? props[key].date.start
    : '';
}
function getEmail(props: PageObjectResponse['properties'], key: string) {
  return props[key]?.type === 'email' && props[key].email
    ? props[key].email
    : '';
}

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [{ property: 'Deadline', direction: 'ascending' }],
    });
    const internships = response.results
      .filter(
        (page): page is PageObjectResponse =>
          (page as PageObjectResponse).object === 'page' && 'properties' in page
      )
      .map((page) => {
        const props = page.properties;
        return {
          id: page.id,
          title: getTitle(props, 'Title'),
          duration: getRichText(props, 'Duration'),
          openings: getRichText(props, 'Openings'),
          deadline: getDate(props, 'Deadline'),
          shortDescription: getRichText(props, 'Short Description'),
          overview: getRichText(props, 'Overview'),
          requirements: getRichText(props, 'Requirements'),
          responsibilities: getRichText(props, 'Responsibilities'),
          outcome: getRichText(props, 'Outcome'),
          applicationEmail: getEmail(props, 'Application Email'),
          applicationSubject: getRichText(props, 'Application Subject'),
        };
      });
    return NextResponse.json({ internships });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 