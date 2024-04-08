import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";
import { useProject } from "@/graphql/queries/blogs";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { content } = useProject(slug as string);
  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <Link href="/blogs"> {"< Back to articles"} </Link>
      <h1 className="text-2xl"> Article : {content && content.item && content.item.title}</h1>
      <h2> Slug : {content && content.item && content.item.slug}</h2>
      {/* Fetch content based on slug */}
    </Section>
  );
};

export default Post;
