import React from "react";
import { Helmet } from "react-helmet";
import siteImage from "../../assets/images/about_us.png";
interface ISeo {
  title: string;
  description: string;
  imagePath: string;
  siteUrl: string;
  pageKeywords: string;
}

// TODO

const seoData: ISeo = {
  title: "IOM Creators",
  description:
    "Explore stunning designs & seamless e-commerce. Discover our crafted websites, optimized for performance & engagement. Elevate your online presence with IOM Creators' custom e-commerce solutions.",
  pageKeywords: `
      iom,
      iom creators,
      iom-creators,
      iom shopify,
      rontend development,
      responsive web design,
      user interface (UI) design,
      user experience (UX) design,
      HTML5, CSS3, JavaScript,
      e-commerce development,
      online store development,
      e-commerce website design,
      e-commerce solutions,
      custom e-commerce development,
      shopping cart integration,
      Shopify,
      Shopify development,
      Shopify theme development,
      Shopify app development,
      Shopify customization,
      Shopify store setup,
      Shopify Plus development,
      front-end frameworks (e.g., React, Angular, Vue),
      CSS preprocessors (e.g., Sass, Less),
      JavaScript frameworks/libraries,
      responsive design,
      mobile-friendly websites,
      online business development,
      digital storefront,
      e-commerce solutions provider,
      Shopify agency
  `,
  imagePath: `${window.location.origin + siteImage}`,
  siteUrl: `${window.location.origin}`,
};

const Seo = () => {
  return (
    <Helmet>

      <meta name="robots" content="index, follow" />

      {/* Tags for social services  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.siteUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.imagePath} />

      <meta name="twitter:site" content={seoData.siteUrl} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.imagePath} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
