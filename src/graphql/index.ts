import { useGetContactForm } from "./queries/contact-form";
import { DocumentNode, gql } from "@apollo/client";

export { useGetContactForm };

export const queryMap: {
  [key: string]: (id: string) => DocumentNode;
} = {
  Section: (id: string) => gql`
    query SectionQuery($id: String!) {
      section(id: $id) {
        title
        titleRichtext {
          json
        }
        button {
          ... on Link {
            title
            url
            icon {
              url
            }
            buttonType
            styleButton
          }
        }
        subtitle
        image {
          url
        }
        paddingTop
        paddingBottom
        maxWidth
        aligment
        grid
        gridGap
        background
        heightBackground
        colorText
        content {
          json
        }
        componentsCollection {
          items {
            sys {
              id
            }
          }
        }
        showOnlyComponents
        withoutContainer
      }
    }
  `,
  Video: (id: string) => gql`
    query VideoQuery($id: String!) {
      video(id: $id) {
        title
        video {
          url
        }
        videoPoster {
          url
        }
        height
        objectFit
        autoPlay
        loop
      }
    }
  `,
  ContactForm: (id: string) => gql`
    query ContactFormQuery($id: String!) {
      contactForm(id: $id) {
        title
        subtitle
        buttonText
        successMessage {
          json
        }
        successImage {
          url
        }
        topImage {
          url
        }
        leftImage {
          url
        }
        fieldsCollection {
          items {
            ... on FormItem {
              typeField
              placeholder
              required
              errorMessage
            }
          }
        }
      }
    }
  `,
  ContactInfo: (id: string) => gql`
    query ContactInfoQuery($id: String!) {
      contactInfo(id: $id) {
        title
        subtitle
        companyInfoCollection {
          items {
            ... on Link {
              title
              url
              icon {
                url
              }
              styleButton
              buttonType
            }
          }
        }
        socialInfoCollection {
          items {
            ... on Link {
              title
              url
              icon {
                url
              }
              styleButton
              buttonType
            }
          }
        }
      }
    }
  `,
  HeroBanner: (id: string) => gql`
    query HeroBannerQuery($id: String!) {
      heroBanner(id: $id) {
        titleRichText {
          json
        }
        button {
          ... on Link {
            title
            url
            icon {
              url
            }
            styleButton
            buttonType
          }
        }
        video {
          url
        }
        rIghtBlockText
        callToActionLink {
          ... on Link {
            title
            url
            icon {
              url
            }
            styleButton
            buttonType
          }
        }
        upworkLink {
          ... on Link {
            title
            url
            icon {
              url
            }
            styleButton
            buttonType
          }
        }
        topRatedImage {
          url
          title
        }
        jobSuccessImage {
          url
          title
        }
      }
    }
  `,
  AboutSection: (id: string) => gql`
    query AboutSectionQuery($id: String!) {
      aboutSection(id: $id) {
        title
        image {
          url
        }
        foundersCollection {
          items {
            title
            url
          }
        }
        content {
          json
        }
        foundersText
        projectsInfo
      }
    }
  `,
  Service: (id: string) => gql`
    query ServiceQuery($id: String!) {
      service(id: $id) {
        title
        description
        image {
          url
        }
      }
    }
  `,
  Technologies: (id: string) => gql`
    query TechnologiesQuery($id: String!) {
      technologies(id: $id) {
        title
        technologyCollection {
          items {
            ... on Technology {
              title
              icon {
                url
              }
            }
          }
        }
      }
    }
  `,
  Testimonials: (id: string) => gql`
    query TestimonialsQuery($id: String!) {
      testimonials(id: $id) {
        title
        testimonialCollection {
          items {
            ... on ReviewItem {
              name
              description
              link {
                ... on Link {
                  title
                  url
                  icon {
                    url
                  }
                  styleButton
                  buttonType
                }
              }
              platform {
                url
              }
              paddingTop
              paddingBottom
            }
          }
        }
      }
    }
  `,
  Accordion: (id: string) => gql`
    query AccordionQuery($id: String!) {
      accordion(id: $id) {
        title
        image {
          url
        }
        accordionItemsCollection {
          items {
            ... on AccordionItem {
              title
              description {
                json
              }
              opened
            }
          }
        }
      }
    }
  `,
  ProjectCard: (id: string) => gql`
    query ProjectCardQuery($id: String!) {
      projectCard(id: $id) {
        card {
          ... on Project {
            title
            slug
            technologies
            image {
              url
            }
          }
        }
      }
    }
  `,
  ReviewItem: (id: string) => gql`
    query ReviewItemQuery($id: String!) {
      reviewItem(id: $id) {
        name
        description
        link {
          ... on Link {
            title
            url
            icon {
              url
            }
            styleButton
            buttonType
          }
        }
        platform {
          url
        }
        paddingTop
        paddingBottom
      }
    }
  `,
  Footer: () => gql`
    query getFooter {
      footer(id: "3pfAktCL2Fc93kl1bUGzMM") {
        logo {
          url
        }
        menuCollection {
          items {
            ... on Link {
              title
              url
              icon {
                url
              }
              styleButton
              buttonType
            }
          }
        }
        socialCollection {
          items {
            ... on Link {
              title
              url
              icon {
                url
              }
              styleButton
              buttonType
            }
          }
        }
        background
      }
    }
  `,
  Header: () => gql`
    query getHeader {
      header(id: "1VZKDQL6LQUZ3szuQl31Ze") {
        logo {
          url
        }
        contactButton {
          ... on Link {
            title
            url
            icon {
              url
            }
            styleButton
            buttonType
          }
        }
        menuCollection {
          items {
            ... on Link {
              title
              url
              icon {
                url
              }
              styleButton
              buttonType
            }
          }
        }
        background
      }
    }
  `,
};
