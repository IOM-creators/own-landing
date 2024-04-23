import GqlComponent from "./gql-component";


const Page = (props:any) => {
  const {page} = props

  return (
    <div>
        {page && page.pageContent.items.map((section:any)=>{
            return <GqlComponent section={section}/>
        })}
    </div>
  );
};

export default Page;
