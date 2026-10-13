import { getCollection } from 'astro:content';

/** Published case studies, in display order. Drafts are excluded from every page. */
export async function getWork() {
  return (await getCollection('work', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
}

export async function getBuilds() {
  return (await getCollection('builds')).sort((a, b) => +b.data.date - +a.data.date);
}
