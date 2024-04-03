import { useRouter } from "next/router";
import Link from "next/link";
import Section from "@/components/section";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <Link href="/blogs"> {"< Back to articles"} </Link>
      <h1 className="text-2xl">Article: {slug}</h1>
      {/* Fetch content based on slug */}
    </Section>
  );
};

export default Post;
