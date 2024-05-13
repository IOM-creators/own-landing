import { GET_PROJECTS_BY_SLUG } from "@/graphql/queries/projects";
import { CustomNextPageContext, createApolloClient } from "../[slug]";
import { NextPage } from "next";
import Page from "@/components/page";
import Image from "@/components/image";
import TitleSection from "@/components/title-section";
import RichText from "@/components/rich-text";
import Link from "next/link";

const Projects: NextPage = (props: any) => {
  const item = props.items[0];
  return (
    <Page page={props.items[0]} aboveContent>
      <section className="container grid md:grid-cols-2 gap-10 py-20">
        {item?.image && (
          <Image
            src={item.image.url}
            className="object-contain"
            classWrapper="mb-10 before:pt-[50%]"
          />
        )}
        <div className="slideUp">
          {item?.title && (
            <TitleSection
              tag="h3"
              fontSize="text-2xl"
              className="mb-4 text-black"
            >
              {item.title}
            </TitleSection>
          )}
          {item?.description && (
            <div className="text-xl mt-2">
              <RichText richText={item.description.json} />
            </div>
          )}
        </div>
      </section>
    </Page>
  );
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
      query: GET_PROJECTS_BY_SLUG(slug),
    });
    return {
      props: {
        slug: slug,
        items: res.data.projectCollection.items,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
