import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";
import { useProject } from "@/graphql/queries/projects";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { content } = useProject(slug as string);
  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <Link href="/projects"> {"< Back to projects"} </Link>
      <h1 className="text-2xl">
        Project : {content && content.item && content.item.title}
      </h1>
      <h2> Slug : {content && content.item && content.item.slug}</h2>
    </Section>
  );
};

export default Post;
