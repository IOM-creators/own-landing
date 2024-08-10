import dynamic from "next/dynamic";

export const componentMap: any = {
  HeroBanner: dynamic(() =>
    import("../components/hero-banner").then((module) => module.default)
  ),
  AboutSection: dynamic(() =>
    import("../components/about-section").then((module) => module.default)
  ),
  ContactForm: dynamic(() =>
    import("../components/contact-form").then((module) => module.default)
  ),
  ContactInfo: dynamic(() =>
    import("../components/contact-info").then((module) => module.default)
  ),
  Section: dynamic(() =>
    import("../components/section").then((module) => module.default)
  ),
  Video: dynamic(() =>
    import("../components/video").then((module) => module.default)
  ),
  ReviewItem: dynamic(() =>
    import("../components/review-item").then((module) => module.default)
  ),
  ProjectCard: dynamic(() =>
    import("../components/project-card").then((module) => module.default)
  ),
  Service: dynamic(() =>
    import("../components/service").then((module) => module.default)
  ),
  Technologies: dynamic(() =>
    import("../components/technologies").then((module) => module.default)
  ),
};
