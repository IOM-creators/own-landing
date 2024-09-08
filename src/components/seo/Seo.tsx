import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

interface ISeo {
  title?: string;
  description?: string;
  imagePath?: string;
  pageKeywords?: string;
}

const defaultSeoData: ISeo = {
  title: "IOM Creators",
  description:
    "Explore stunning designs & seamless e-commerce. Discover our crafted websites, optimized for performance & engagement. Elevate your online presence with IOM Creators' custom e-commerce solutions.",
  pageKeywords: `
    iom,
    iom creators,
    iom-creators,
    iom shopify,
    frontend development,
    responsive web design,
    e-commerce development,
    Shopify development,
    wordpress,
    iom develop,
    custom e-commerce solutions
  `,
};

const Seo: React.FC<ISeo> = ({
  title,
  description,
  imagePath,
  pageKeywords,
}) => {
  const [currentUrl, setCurrentUrl] = useState(
    process.env.NEXT_PUBLIC_SITE_URL
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const seoData: ISeo = {
    title: title ? title + " | " + defaultSeoData.title : defaultSeoData.title,
    description: description || defaultSeoData.description,
    pageKeywords: pageKeywords || defaultSeoData.pageKeywords,
    imagePath: imagePath || `${currentUrl}/assets/images/iom.png`,
  };

  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.pageKeywords} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.imagePath} />

      <meta name="twitter:site" content={currentUrl} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.imagePath} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default Seo;
