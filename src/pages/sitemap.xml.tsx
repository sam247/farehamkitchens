import { GetServerSideProps } from 'next';

const SITE_URL = 'https://farehamkitchens.co.uk';

// Define all pages with their metadata
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/shaker-kitchens', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/traditional-kitchens', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/modern-kitchens', priority: '0.9', changefreq: 'monthly' },
  { path: '/process', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/brochures', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog/what-is-a-shaker-kitchen', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/best-kitchen-appliances-for-small-uk-homes', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-prices-uk', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/affordable-kitchen-worktops-materials', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/aeg-offer', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog/choosing-the-right-kitchen-worktop', priority: '0.7', changefreq: 'monthly' },
  { path: '/projects/botley-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/southampton-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/totton-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/west-wellow-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/locations', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations/chilworth-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/portsmouth-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/southampton-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/gosport-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/hampshire-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/hedge-end-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/romsey-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/warsash-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/winchester-kitchens', priority: '0.7', changefreq: 'monthly' },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export default function Sitemap() {
  // This component should never render
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

