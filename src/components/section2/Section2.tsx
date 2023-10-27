import React from "react";
import Section from "../section";

import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import InfoWithList from "../info-with-list";

const cards = [
  {
    revert: false,
    image: Person4,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    btnText: "Start now",
    link: "/",
    list: [
      {
        text: "We connect our customers with the best.",
        icon: "check",
      },
      {
        text: "We connect our customers with the best.",
        icon: "check",
      },
      {
        text: "We connect our customers with the best.",
        icon: "check",
      },
    ],
  },
  {
    revert: true,
    image: Person5,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    btnText: "Start now",
    link: "/",
    list: [
      {
        text: "We connect our customers with the best.",
        icon: "leaf",
        shadow: true,
      },
      {
        text: "We connect our customers with the best.",
        icon: "eye",
        shadow: true,
      },
      {
        text: "We connect our customers with the best.",
        icon: "sun",
        shadow: true,
      },
    ],
  },
];

interface ISection2 {
  className?: string;
}
const Section2: React.FC<ISection2> = ({ className }) => {
  return (
    <>
      {cards.map((card: any, index: number) => (
        <Section className={className}>
          <InfoWithList
            card={card}
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36"
          />
        </Section>
      ))}
    </>
  );
};

export default Section2;
