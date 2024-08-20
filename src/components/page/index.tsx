import NavigationLoader from "../navigation-loader/NavigationLoader";
import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { sections, children, sectionIndex, showChildren } = props;

  return (
    <>
      <NavigationLoader />
      {showChildren && children}
      {sections &&
        sections.map(({ section }: any, index: number) => {
          if (sectionIndex && sectionIndex === index) {
            return (
              <>
                {children}
                <GqlComponent section={section} key={index} />
              </>
            );
          }
          return <GqlComponent section={section} key={index} />;
        })}
    </>
  );
};

export default Page;
