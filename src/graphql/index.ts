import { useGetHeader } from "./queries/header";
import { useGetHeroBanner } from "./queries/hero-banner";
import { GET_CONTACT_FORM_ENTRY, useGetContactForm } from "./queries/contact-form";
import { useGetFooter } from "./queries/footer";
import { useProjects } from "./queries/projects";
import { useGetAboutSection } from "./queries/about-us";
import { GET_VIDEO_ENTRY } from "./queries/video";
import { DocumentNode, gql } from "@apollo/client";

export {
  useGetHeader,
  useGetHeroBanner,
  useGetAboutSection,
  useGetContactForm,
  useGetFooter,
  useProjects,
};


export const queryMap: {
  [key: string]: (id: string) => DocumentNode;
} = {
  Video: (id: string) => gql`
    query VideoQuery($id: String!) {
      video(id: $id) {
        title
      video{
        url
      }
      videoPoster{
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
      }
    }
  `
};