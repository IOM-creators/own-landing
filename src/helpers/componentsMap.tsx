import dynamic from "next/dynamic";

export const componentMap: any = {
  HeroBanner: dynamic(() =>
    import("../components/hero-banner").then((module) => module.default)
  ),
  Banner: dynamic(() =>
    import("../components/banner/Banner").then((module) => module.default)
  ),
  ContactUs: dynamic(() =>
    import("../components/sections/contact-us/ContactUs").then(
      (module) => module.default
    )
  ),
  ContactForm: dynamic(() =>
    import("../components/contact-form/ContactForm").then(
      (module) => module.default
    )
  ),
  AboutUs: dynamic(() =>
    import("../components/sections/about-us").then((module) => module.default)
  ),
};
