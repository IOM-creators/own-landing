import dynamic from "next/dynamic";

export const componentMap: any = {
  HeroBanner: dynamic(() =>
    import("../components/hero-banner").then((module) => module.default)
  ),
  Banner: dynamic(() =>
    import("../components/banner").then((module) => module.default)
  ),
  ContactForm: dynamic(() =>
    import("../components/contact-form").then((module) => module.default)
  ),
  Section: dynamic(() =>
    import("../components/section").then((module) => module.default)
  ),
};
