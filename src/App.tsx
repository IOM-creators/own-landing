import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import InfoCard from "./components/info-card";
import TitleSection from "./components/title-section";
import Person1 from "./assets/images/person1.png";
import Person2 from "./assets/images/person2.png";
import Person3 from "./assets/images/person3.png";
import Section from "./components/section";
import Header from "./components/header";


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
function App() {
  return (
    <div className="App relative" >
      <Header />
      <main className=" mx-full">
        <HeroBanner showAnimation />
        <Section id='section1' className="container mb-10 mt-20">
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
      </main>
    </div>
  );
}

export default App;
