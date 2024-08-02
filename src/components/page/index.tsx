import NavigationLoader from "../navigation-loader/NavigationLoader";
import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { page, showTitle, children, sectionIndex } = props;
  return (
    <>
      <NavigationLoader />
      {showTitle && (
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center py-8 mt-8">
          {page?.title}
        </h1>
      )}
      {!page?.pageContent?.items && children}
      {page?.pageContent &&
        page.pageContent.items.map((section: any, index: number) => {
          if (sectionIndex === index) {
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
