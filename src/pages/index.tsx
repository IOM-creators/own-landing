import { NextPage } from "next/types";
import Page from "@/components/page";
import Custom404 from "./404";
import { CustomNextPageContext } from "../types/page-props";
import { useEffect, useState } from "react";
import { fetchPageContent } from "@/helpers/getData";

// Create Apollo Client

const SlugPage: NextPage = (props: any) => {
  // Ensure content is consistent between SSR and client-side rendering
  const [clientSections, setClientSections] = useState<any[]>([]);

  useEffect(() => {
    // Set sections only on the client side to prevent hydration mismatch
    setClientSections(props.sections || []);
  }, [props.sections]);

  // If no sections are found, show the 404 page
  if (!props?.sections?.length) {
    return <Custom404 />;
  } else {
    // Render the page with sections
    return <Page sections={clientSections}></Page>;
  }
};

// Server-side rendering for the page
export const getServerSideProps = async ({
  locale,
  params,
  query,
  req,
  res,
}: CustomNextPageContext) => {
  try {
    const slug = "index" as string;

    // Fetch the page collections
    const { sections, header, footer, userToken } = await fetchPageContent(
      slug,
      req,
      res
    );
    return {
      props: {
        footer: footer,
        header: header,
        slug,
        sections: sections, // Pass sections with their components
        userToken,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default SlugPage;
