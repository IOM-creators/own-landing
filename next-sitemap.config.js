module.exports = {
  siteUrl: "https://iom-creators.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/secret", "/404"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://iom-creators.com/api/sitemap.xml"],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
