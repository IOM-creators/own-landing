import { NextApiRequest, NextApiResponse } from "next";
import { useProjectsTotal } from "@/graphql";

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slugs } = useProjectsTotal();

  const baseUrl = "https://iom-creators.com";
  const pages = [
    "/",
    "/projects",
    ...slugs.map((slug: string) => `/projects/${slug}`),
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
          <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
};

export default Sitemap;
