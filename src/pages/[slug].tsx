import { NextPage } from "next/types";
import Page from "@/components/page";
import Custom404 from "./404";
import { CustomNextPageContext } from "../types/page-props";
import { useEffect, useState } from "react";
import { fetchPageContent } from "@/helpers/getData";

const SlugPage: NextPage = (props: any) => {
  const [clientSections, setClientSections] = useState<any[]>([]);

  useEffect(() => {
    setClientSections(props.sections || []);
  }, [props.sections]);

  if (!props?.sections?.length) {
    return <Custom404 />;
  } else {
    return <Page sections={clientSections} title={props.title}></Page>;
  }
};
export const getServerSideProps = async ({
  locale,
  params,
  query,
  req,
  res,
}: CustomNextPageContext) => {
  const slug = params.slug as string;

  try {
    const { sections, header, footer, userToken, title } =
      await fetchPageContent(slug, req, res);

    if (!sections || !sections.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        title,
        footer,
        header,
        slug,
        sections,
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
