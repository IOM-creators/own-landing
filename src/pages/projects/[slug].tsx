import { GET_PROJECTS_BY_SLUG } from "@/graphql/queries/projects";
import { CustomNextPageContext, createApolloClient } from "../[slug]";
import { NextPage } from "next";
import Page from "@/components/page";
import Image from "@/components/image";
import Icon from "@/components/icon";
import Button from "@/components/button";

const Projects: NextPage = (props: any) => {
  const item = props.items[0];

  const customStyles: React.CSSProperties = {
    "--pd-top": `100px`,
    "--pd-bottom": `50px`,
    "--bg-height": `50%`,
    "--bg-section": `#FAF7F4`,
  } as React.CSSProperties;
  return (
    <Page page={props.items[0]} sectionIndex={0}>
      <section className="section" style={customStyles}>
        <div className="section__wrapper container">
          <div className="project__header slideUp flex flex-wrap justify-between items-start">
            <div className="mb-4">
              {item?.title && <h2 className="mb-4 text-black">{item.title}</h2>}
              {item.technologies && (
                <ul className="technologies flex items-center gap-4 mt-2">
                  {item.technologies.map(
                    (technology: string, index: number) => (
                      <li key={index} className="bg-white p-2">
                        <span>{technology}</span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <Button
              typeButton="link"
              link={item.siteLink}
              primary
              className="w-auto text-white group w-full md:w-auto"
            >
              Open Live Site
              <Icon
                icon="arrow-next"
                className="ml-2 transform transition-transform group-hover:-translate-x-[-5px]"
              />
            </Button>
          </div>
          {item?.heroImage && (
            <Image
              src={item.heroImage.url}
              className="object-cover lg:object-contain"
              classWrapper="my-10 before:pt-[100%] lg:before:pt-[34%]"
            />
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
