import React from "react";
import { Helmet } from 'react-helmet';
import siteImage from "../../assets/images/team.png";
interface ISeo {
  title: string
  description: string
  imagePath: string
  siteUrl: string
}



// TODO  

const seoData: ISeo = {
  title: 'Interactive Web Development | Optimized Code Efficiency |  Modern Framework Proficiency | IOM',
  description: 'Top-notch IT services provided by experienced professionals. Discover our managed IT solutions for businesses. Contact us for expert IT support and solutions.',
  imagePath: `${window.location.origin + siteImage}`,
  siteUrl: `${window.location.origin}`,
}


const Seo = () => {
  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <link rel="canonical" href={seoData.siteUrl} />

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
