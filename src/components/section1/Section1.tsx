import React from "react";
import Section from "../section";
import TitleSection from "../title-section";
import InfoCard from "../info-card";

import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";

const cards = [
  {
    image: Person1,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    btnText: "Explore page",
    link: "/",
  },
  {
    image: Person2,
    title: "Even cooler feature",
    description: "Learning curve network effects return on investment.",
    btnText: "Explore page",
    link: "/",
  },
  {
    image: Person3,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    btnText: "Explore page",
    link: "/",
  },
];

interface ISection1 {
  className?: string;
}
const Section1: React.FC<ISection1> = ({ className }) => {
  return (
    <Section className={className}>
      <TitleSection
        tag="h2"
        position="text-center"
        className="mb-20"
        supText="Our Services"
        fontSize="lg:text-5xl md:text-4xl sm:text-3xl"
      >
        Handshake infographic mass market crowdfunding iteration.
      </TitleSection>
      <div className="grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-10 mb-10">
        {cards.map((card: any, index: number) => (
          <InfoCard
            card={card}
            key={index}
            className="flex flex-col justify-center"
          />
        ))}
      </div>
    </Section>
  );
};

export default Section1;
