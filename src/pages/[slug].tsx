import { NextPage, NextPageContext } from "next/types";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { client } from "./_app";
import Page from "@/components/page";
import Custom404 from "./404";

export const createApolloClient = () => client;

const SlugPage: NextPage = (props: any) => {
  if (!props?.items?.length) {
    return <Custom404 />;
  } else {
    return <Page page={props.items[0]}></Page>;
  }
};

export interface CustomNextPageContext extends NextPageContext {
  params: {
    slug: string;
  };
  id: string;
}

export const getServerSideProps = async ({
  locale,
  params,
  query,
}: CustomNextPageContext) => {
  const slug = params.slug as string;
  const client = createApolloClient();
  try {
    const res = await client.query({
      query: GET_PAGE_COLLECTIONS(),
      variables: {
        slug: slug,
      },
    });
    return {
      props: {
        slug: slug,
        items: res.data.pageCollection.items,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default SlugPage;