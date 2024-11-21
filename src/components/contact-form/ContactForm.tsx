import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import cn from "classnames";
import axios from "axios";

import Button from "../button";
import Image from "../image";
import RichText from "../rich-text";
import { Document } from "@contentful/rich-text-types";
import { useGetContactForm } from "@/graphql";
import Loader from "../loader";
import { motion } from "framer-motion";

interface IContactUsData {
  contactForm: {
    title: string;
    subtitle: string;
    buttonText: string;
    successMessage: Document;
    topImage: {
      url: string;
    };
    successImage: string;
    leftImage: {
      url: string;
    };
    fieldsCollection: {
      items: FormField[];
    };
  };
}

type FormField = {
  typeField: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
};

interface IContactUs {
  className?: string;
  id: string;
  section?: IContactUsData;
  request?: boolean;
}

const ContactForm: React.FC<IContactUs> = ({
  id = "",
  className,
  section,
  request = false,
}) => {
  const { contactForm, loading }: any = request
    ? useGetContactForm(id)
    : section;
  if (!contactForm && !contactForm?.fieldsCollection?.items) return null;

  const combinedObject = contactForm.fieldsCollection?.items.reduce(
    (result: any, field: { placeholder: string }) => {
      const key = field.placeholder.toLocaleLowerCase().replace(" ", "_");
      return {
        ...result,
        [key]: "",
      };
    },
    {}
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      ...combinedObject,
    },
  });
  const [isSuccessMessage, updateMessage] = useState(false);
  const [errorMessage, updateError] = useState("");
  const [isSending, seSisSending] = useState(false);

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    seSisSending(true);
    const axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    axiosInstance
      .post("api/mail", data)
      .then(() => {
        updateMessage(true);
        seSisSending(false);
      })
      .catch((e) => {
        updateError(e.message);
      });
  };
  const onError = (errors: any, e: any) => console.log(errors, e);

  const customStyles: React.CSSProperties = {
    ...(contactForm?.topImage && {
      "--form-top-img": `url(${contactForm.topImage.url})`,
    }),
    ...(contactForm?.leftImage && {
      "--form-left-img": `url(${contactForm.leftImage.url})`,
    }),
  } as React.CSSProperties;

  if (loading) return <Loader />;
  return (
    <div
      className="contact-form max-w-[710px] px-4 py-8 lg:p-[80px] border-contact-form bg-white  w-full mx-auto relative"
      style={customStyles}
    >
      <>
        {contactForm?.title && (
          <motion.h3
            className={cn({
              "mb-[40px]": !contactForm.subtitle,
              "mb-2": contactForm.subtitle,
            })}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {contactForm?.title}
          </motion.h3>
        )}
        {contactForm?.subtitle && (
          <motion.span
            className={cn({}, "mb-[40px] block text-lg font-bold")}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {contactForm.subtitle}
          </motion.span>
        )}
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className={cn({
            invisible: isSuccessMessage,
          })}
        >
          <div className="grid grid-cols-1 sm:gap-x-4 sm:grid-cols-6">
            {contactForm?.fieldsCollection?.items.map(
              (formField: any, index: number) => {
                const fieldName = formField.placeholder
                  .toLocaleLowerCase()
                  .replace(" ", "_");
                return (
                  <motion.div
                    className={cn("my-2 sm:col-span-6")}
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 * index }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <label htmlFor={fieldName}></label>
                    <Controller
                      name={fieldName}
                      control={control}
                      rules={{
                        required: formField.errorMessage,
                      }}
                      render={({ field }) => {
                        return formField.typeField === "textarea" ? (
                          <textarea
                            {...field}
                            id={fieldName}
                            placeholder={formField.placeholder}
                            rows={3}
                            className="block w-full py-5 px-6 border-contact-form resize-none focus:outline-none hover:outline-none"
                            aria-describedby="my-helper-text"
                            {...register(fieldName)}
                          ></textarea>
                        ) : (
                          <input
                            {...field}
                            type={formField.typeField}
                            id={fieldName}
                            placeholder={formField.placeholder}
                            autoComplete="given-name"
                            className="block w-full py-5 px-6 border-contact-form focus:outline-none hover:outline-none"
                            aria-describedby="my-helper-text"
                            {...register(fieldName)}
                          />
                        );
                      }}
                    />
                    {errors[fieldName] && (
                      <motion.span
                        className="text-error"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {formField.errorMessage}
                      </motion.span>
                    )}
                  </motion.div>
                );
              }
            )}
            {errorMessage && (
              <motion.div
                className="error-message col-span-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p className="text-error">{errorMessage}</p>
              </motion.div>
            )}
          </div>
          <motion.div
            className="mt-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Button
              type="submit"
              className={cn("btn btn--primary justify-center", {
                "btn--loading": isSending,
              })}
            >
              {contactForm.buttonText}
            </Button>
          </motion.div>
        </form>
        {isSuccessMessage && (
          <motion.div
            className="success-message text-center absolute bg-white h-full w-full top-0 left-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={contactForm.successImage.url}
              classWrapper="w-60 !flex justify-center"
            />
            <RichText richText={contactForm.successMessage.json} />
          </motion.div>
        )}
      </>
    </div>
  );
};

export default ContactForm;
