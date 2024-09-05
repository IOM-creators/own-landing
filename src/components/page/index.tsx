import Cookies from "../cookies";
import NavigationLoader from "../navigation-loader/NavigationLoader";
import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { sections, children, sectionIndex } = props;

  return (
    <>
      <NavigationLoader />
      {sections &&
        sections.map(({ section }: any, index: number) => {
          if (sectionIndex === index) {
            return (
              <>
                {children}
                <GqlComponent
                  section={section}
                  key={index}
                  tagH1={sections.length === 1}
                />
              </>
            );
          }
          return (
            <GqlComponent
              section={section}
              key={index}
              tagH1={sections.length === 1}
            />
          );
        })}
      <Cookies />
    </>
  );
};

export default Page;
