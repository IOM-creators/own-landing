import NavigationLoader from "../navigation-loader/NavigationLoader";
import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { sections } = props;
  return (
    <>
      <NavigationLoader />

      {/* {showTitle && (
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center py-8 mt-8">
          {page?.title}
        </h1>
      )} */}
      {/* {!page?.pageContent?.items && children} */}
      {sections &&
        sections.map(({ section }: any, index: number) => {
          return <GqlComponent section={section} key={index} />;
        })}
    </>
  );
};

export default Page;
