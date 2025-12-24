import { NextApiRequest, NextApiResponse } from 'next';

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
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/worktops/granite-worktops', priority: '0.8', changefreq: 'monthly' },
  { path: '/worktops/quartz-worktops', priority: '0.8', changefreq: 'monthly' },
  { path: '/worktops/dekton-worktops', priority: '0.8', changefreq: 'monthly' },
  { path: '/kitchen-islands', priority: '0.8', changefreq: 'monthly' },
  { path: '/small-kitchens', priority: '0.8', changefreq: 'monthly' },
  { path: '/kitchen-extensions', priority: '0.8', changefreq: 'monthly' },
  { path: '/kitchen-storage', priority: '0.8', changefreq: 'monthly' },
  { path: '/kitchen-renovation-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/kitchen-design-trends-2025', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/how-to-choose-kitchen-cabinets', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-lighting-design-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-budget-planning-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/eastleigh-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/waterlooville-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/bishops-waltham-kitchens', priority: '0.7', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.8', changefreq: 'monthly' },
  { path: '/appliances', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/kitchen-extension-planning-permission', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-design-mistakes-to-avoid', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/sustainable-kitchen-design', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-for-entertaining', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-showroom-visit-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/kitchen-installation-process', priority: '0.7', changefreq: 'monthly' },
  { path: '/projects/eastleigh-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/portsmouth-kitchen-project', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/winchester-kitchen-project', priority: '0.8', changefreq: 'monthly' },
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.status(200).send(sitemap);
}

