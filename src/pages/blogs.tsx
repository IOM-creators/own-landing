import Section from "@/components/section";
import Link from "next/link";
import { NextPage } from "next/types";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useProjects } from "@/graphql/queries/blogs";
import { useEffect, useMemo, useState } from "react";


const ArtilcleSlugPage: NextPage = () => {

  const { content } = useProjects();

  return (
    <Section className="section py-10 my-10 md:py-16 md:my-16 container mx-lg">
      <h1 className="text-2xl">Articles</h1>
      <nav>
        <ul>
          {content && content.items && content.items.map((item:any, index:number) => {
            return <li key={item.slug}>
              <Link href={`/blog/${item.slug}`}>{index + 1}: {item.title}</Link>
            </li>
          })}
        </ul>
      </nav>
    </Section>
  );
};

export default ArtilcleSlugPage;
