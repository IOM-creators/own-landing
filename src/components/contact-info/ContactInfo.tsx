import { useGetContactInfo } from "@/graphql/queries/contact-info";
import React from "react";
import Button from "../button";

interface IContactUs {
  className?: string;
  id: string;
}

const ContactInfo: React.FC<IContactUs> = ({ id = "", className }) => {
  const { section, companyInfo, socialInfo } = useGetContactInfo(id);

  return (
    <div className="contact-info">
      {section?.title && <h1>{section.title}</h1>}
      {section?.subtitle && (
        <span className="block text-base lg:text-xl font-bold mt-4">
          {section.subtitle}
        </span>
      )}

      {companyInfo && (
        <div className="contact-info__comany mt-12 mb-6 lg:mt-20 lg:mb-12">
          <ul className="flex flex-col">
            {companyInfo.map((item, index) => (
              <li
                key={index}
                className="my-2 lg:my-4 text-base lg:text-xl font-bold"
              >
                <Button
                  rightText
                  icon={item?.icon?.url}
                  className="flex items-center"
                >
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {socialInfo && (
        <div className="contact-info__social my-6 lg:my-12">
          <ul className="flex flex-row gap-2 flex-wrap md:flex-nowrap">
            {socialInfo.map((item, index) => (
              <li
                key={index}
                className="p-4 md:py-5 md:px-10 text-base lg:text-xl font-bold bg-light-gray"
              >
                <Button
                  rightText
                  icon={item?.icon?.url}
                  className="flex items-center"
                >
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
