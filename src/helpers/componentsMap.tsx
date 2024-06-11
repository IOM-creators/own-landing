import dynamic from "next/dynamic";

export const componentMap: any = {
  HeroBanner: dynamic(() =>
    import("../components/hero-banner").then((module) => module.default)
  ),
  Banner: dynamic(() =>
    import("../components/banner").then((module) => module.default)
  ),
  ContactUs: dynamic(() =>
    import("../components/sections/contact-us").then((module) => module.default)
  ),
  ContactForm: dynamic(() =>
    import("../components/contact-form").then((module) => module.default)
  ),
  AboutUs: dynamic(() =>
    import("../components/sections/about-us").then((module) => module.default)
  ),
  Portfolio: dynamic(() =>
    import("../components/sections/portfolio").then((module) => module.default)
  ),
  ServicesOffered: dynamic(() =>
    import("../components/sections/services-offered").then(
      (module) => module.default
    )
  ),
  WhyChooseUs: dynamic(() =>
    import("../components/sections/why-choose-us").then(
      (module) => module.default
    )
  ),
  CoreTechnologies: dynamic(() =>
    import("../components/sections/technologies").then(
      (module) => module.default
    )
  ),
  Feedbacks: dynamic(() =>
    import("../components/sections/feedbacks").then((module) => module.default)
  ),
  Section: dynamic(() =>
    import("../components/section").then((module) => module.default)
  ),
};
