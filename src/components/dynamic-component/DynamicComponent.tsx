import React from "react";
import AboutUs from "../sections/about-us";
import ServicesOffered from "../sections/services-offered";
import Technologies from "../sections/technologies";
import Portfolio from "../sections/portfolio";
import OurProcess from "../sections/our-process";
import Feedbacks from "../sections/feedbacks";
import ContactUs from "../sections/contact-us";
import WhyChooseUs from "../sections/why-choose-us";

interface IDynamicComponent {
  name?: string;
  id?: string;
  className?: string;
}

const DynamicComponent: React.FC<IDynamicComponent> = ({
  name,
  className,
  id,
  ...props
}) => {
  switch (name) {
    case "AboutUs":
      return <AboutUs {...props} className={className} id={id} />;
    case "ServicesOffered":
      return <ServicesOffered {...props} className={className} id={id} />;
    case "CoreTechnologies":
      return <Technologies {...props} className={className} id={id} />;
    case "WhyChooseUs":
      return <WhyChooseUs {...props} className={className} id={id} />;
    case "Portfolio":
      return <Portfolio {...props} className={className} id={id} />;
    case "OurProcess":
      return <OurProcess {...props} className={className} id={id} />;
    case "Feedbacks":
      return <Feedbacks {...props} className={className} id={id} />;
    case "ContactUs":
      return (
        <ContactUs
          {...props}
          className={`${className} mx-0 max-w-full sm:px-0 sm:container`}
          id={id}
        />
      );
    default:
      return <></>;
  }
};

export default DynamicComponent;
