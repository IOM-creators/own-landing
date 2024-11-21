import React from "react";
import Button from "../button";
import { motion } from "framer-motion";

interface IContactUs {
  className?: string;
  id: string;
  section: any;
}

const ContactInfo: React.FC<IContactUs> = ({ id = "", className, section }) => {
  const { contactInfo } = section;
  const companyInfo = contactInfo?.companyInfoCollection?.items || [];
  const socialInfo = contactInfo?.socialInfoCollection?.items || [];

  return (
    <div className="contact-info">
      {contactInfo?.title && (
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.title}
        </motion.h1>
      )}
      {contactInfo?.subtitle && (
        <motion.span
          className="block text-base lg:text-xl font-bold mt-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {contactInfo.subtitle}
        </motion.span>
      )}

      {companyInfo && (
        <div className="contact-info__comany mt-12 mb-6 lg:mt-20 lg:mb-12">
          <ul className="flex flex-col">
            {companyInfo.map((item: any, index: number) => (
              <motion.li
                key={index}
                className="my-2 lg:my-4 text-base lg:text-xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Button
                  link={item.url}
                  styleButton={item.styleButton}
                  typeButton={item.buttonType}
                  rightText
                  icon={item?.icon?.url}
                  className="flex items-center"
                >
                  {item.title}
                </Button>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      {socialInfo && (
        <div className="contact-info__social my-6 lg:my-12">
          <ul className="flex flex-row gap-2 flex-wrap lap:flex-nowrap">
            {socialInfo.map((item: any, index: number) => (
              <motion.li
                key={index}
                className="p-4 md:py-5 md:px-10 text-base lg:text-xl font-bold bg-light-gray shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Button
                  styleButton={item.styleButton}
                  typeButton={item.buttonType}
                  link={item.url}
                  rightText
                  icon={item?.icon?.url}
                  className="flex items-center"
                >
                  {item.title}
                </Button>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
