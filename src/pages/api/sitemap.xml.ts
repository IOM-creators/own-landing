import axios, { AxiosInstance } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Page {
  fields: {
    slug: string;
  };
}

interface Project {
  fields: {
    slug: string;
  };
}

function generateSiteMap(
  url: string,
  pages: Page[],
  projects: Project[]
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return page && page.fields && page.fields.slug !== "search"
        ? `<url>
      <loc>${url}${page.fields.slug}</loc>
    </url>`
        : "";
    })
    .join("")}
  ${projects
    .map((project) => {
      return project && project.fields
        ? `<url>
      <loc>${url}projects/${project.fields.slug}</loc>
    </url>`
        : "";
    })
    .join("")}
  </urlset>`;
}

const client: AxiosInstance = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_ID}`,
});

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pagesResponse = await client.get("/entries", {
      params: {
        content_type: "page",
        limit: 10,
        select: "fields.slug",
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
      },
    });

    const projectsResponse = await client.get("/entries", {
      params: {
        content_type: "project",
        limit: 10,
        select: "fields.slug",
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
      },
    });

    const url: string =
      process.env.NEXT_PUBLIC_SITE_URL || "https://iom-creators.com/";
    const sitemap = generateSiteMap(
      url,
      pagesResponse.data.items,
      projectsResponse.data.items
    );

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).end();
  }
}

export default handler;
