const fs = require("fs");

// Define the base URL of your website

const baseUrl = "https://iom-creators.com/";

// Define the URLs to include in the sitemap
const urls = ["/"];

// Generate the sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
    </url>`
    )
    .join("")}
</urlset>`;

// Write the sitemap XML to a file
fs.writeFileSync("public/sitemap.xml", sitemap);
