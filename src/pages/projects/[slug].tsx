import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";
import { useProject } from "@/graphql/queries/projects";
import ImageWithText from "@/components/image-with-text";

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { content } = useProject(slug as string);
  console.log("content", content);

  return (
    <Section className="section py-6 container mx-lg">
      <Link href="/projects" className="font-bold">
        {"< Back to projects"}
      </Link>
      <h1 className="text-4xl mt-6 mb-12 text-center">{content.item.title}</h1>
      <ImageWithText card={content.item.card} />
    </Section>
  );
};

export default Project;
