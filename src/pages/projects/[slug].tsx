import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";
import { useProject } from "@/graphql/queries/projects";
import ImageWithText from "@/components/image-with-text";
import { CustomNextPageContext, createApolloClient } from "../[slug]";
import { GET_PAGE_COLLECTIONS } from "@/graphql/queries/page-collection";
import { NextPage } from "next";

const Projects: NextPage = (props: any) => {
  const router = useRouter();
  const { slug } = router.query;
  const { content } = useProject(slug as string);
  return <section className="section py-6 container mx-lg">Projects</section>;
};

export default Projects;

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
