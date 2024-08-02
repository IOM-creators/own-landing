import { GET_PROJECTS_BY_SLUG } from "@/graphql/queries/projects";
import { CustomNextPageContext, createApolloClient } from "../[slug]";
import { NextPage } from "next";
import Page from "@/components/page";
import Image from "@/components/image";

const Projects: NextPage = (props: any) => {
  const item = props.items[0];
  console.log("section", item);

  const customStyles: React.CSSProperties = {
    "--pd-top": `100px`,
    "--pd-bottom": `100px`,
  } as React.CSSProperties;
  return (
    <Page page={props.items[0]} sectionIndex={0}>
      <section className="section" style={customStyles}>
        <div className="section__wrapper container">
          {item?.image && (
            <Image
              src={item.image.url}
              className="object-contain"
              classWrapper="mb-10 before:pt-[50%]"
            />
          )}
          <div className="slideUp">
            {item?.title && <h2 className="mb-4 text-black">{item.title}</h2>}
          </div>
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
