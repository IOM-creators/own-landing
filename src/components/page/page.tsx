import GqlComponent from "./gql-component";

const Page = (props: any) => {
  const { page, showTitle } = props;

  return (
    <>
      {showTitle && (
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center py-8">
          {page?.title}
        </h1>
      )}
      {page &&
        page.pageContent.items.map((section: any, index: number) => {
          return <GqlComponent section={section} key={index} />;
        })}
    </>
  );
};

export default Page;
