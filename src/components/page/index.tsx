import NavigationLoader from "../navigation-loader/NavigationLoader";
import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { page, showTitle, children, belowContent, aboveContent } = props;
  return (
    <>
      <NavigationLoader />
      {showTitle && (
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center py-8 mt-8">
          {page?.title}
        </h1>
      )}
      {aboveContent && children}
      {page?.pageContent &&
        page.pageContent.items.map((section: any, index: number) => {
          return <GqlComponent section={section} key={index} />;
        })}
      {belowContent && children}
    </>
  );
};

export default Page;
