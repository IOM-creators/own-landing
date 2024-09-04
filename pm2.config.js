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
        REACT_APP_CONTENTFUL_ID: process.env.REACT_APP_CONTENTFUL_ID,
        REACT_APP_CONTENTFUL_TOKEN: process.env.REACT_APP_CONTENTFUL_TOKEN,
      },
    },
  ],
};
