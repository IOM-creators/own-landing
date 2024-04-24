import GqlComponent from "./gql-component";


const Page = (props:any) => {
  const {page, showTitle} = props
  return (
    <>
        {showTitle && <p className="text-sm text-dark-blue mb-3 text-center mt-[27px]">{page.title}</p>}
        {page && page.pageContent.items.map((section:any)=>{
            return <GqlComponent section={section}/>
        })}
    </>
  );
};

export default Page;
