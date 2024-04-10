import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";
import { useProject } from "@/graphql/queries/projects";
import { componentMap } from "@/helpers/componentsMap";

const Page = (props:any) => {
  const router = useRouter();
  const { slug } = router.query;
  const { content } = useProject(slug as string);  
  return (
    <div>
        {props.page.pageContent.items.map((item:any)=>{
            return <>div</>
        })}
    </div>
  );
};

export default Page;
