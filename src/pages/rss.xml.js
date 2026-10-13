import rss from '@astrojs/rss';
import { getBuilds } from '../lib/work';
import { site } from '../site';

export async function GET(context) {
  const builds = await getBuilds();
  return rss({
    title: `${site.name} — Builds`,
    description: 'What John Kuria is building, episode by episode.',
    site: context.site,
    items: builds.map((b) => ({
      title: b.data.title,
      description: b.data.summary,
      pubDate: b.data.date,
      link: `/builds/${b.id}/`,
    })),
  });
}
