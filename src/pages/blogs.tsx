import Section from "@/components/section";
import Link from "next/link";
import { NextPage } from "next/types";

const ArtilcleSlugPage: NextPage = () => {
  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <h1 className="text-2xl">Articles</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/test">Article test</Link>
          </li>
          <li>
            <Link href="/blog/test2">Article test 2</Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
};

export default ArtilcleSlugPage;
