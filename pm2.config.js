module.exports = {
  apps: [
    {
      name: "iom-creators",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        NEXT_PUBLIC_CONTENTFUL_ID: process.env.NEXT_PUBLIC_CONTENTFUL_ID,
        NEXT_PUBLIC_CONTENTFUL_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
      },
    },
  ],
};
