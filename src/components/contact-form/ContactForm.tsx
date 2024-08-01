import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import cn from "classnames";
import axios from "axios";

import Button from "../button";
import Icon from "../icon";
import { useGetContactForm } from "../../graphql/";

interface IContactUsData {
  section: {
    title: string;
    subtitle: string;
    buttonText: string;
    successMessage: string;
    topImage: {
      url: string;
    };
    leftImage: {
      url: string;
    };
    formFields: [
      {
        typeField: string;
        placeholder: string;
        required: boolean;
        errorMessage: string;
      }
    ];
  };
}
interface IContactUs {
  className?: string;
  id: string;
}

const ContactForm: React.FC<IContactUs> = ({ id = "", className }) => {
  const { section }: IContactUsData = useGetContactForm(id);

  if (!section.formFields) return null;

  const combinedObject = section.formFields?.reduce((result, field) => {
    const key = field.placeholder.toLocaleLowerCase().replace(" ", "_");
    return {
      ...result,
      [key]: "",
    };
  }, {});

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
      .post("https://iom-creators.com/mail", data)
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
    ...(section?.topImage && {
      "--form-top-img": `url(${section.topImage.url})`,
    }),
    ...(section?.leftImage && {
      "--form-left-img": `url(${section.leftImage.url})`,
    }),
  } as React.CSSProperties;

  return (
    <div
      className="contact-form max-w-[710px] px-4 py-8 lg:p-[80px] border-contact-form bg-white  w-full mx-auto relative"
      style={customStyles}
    >
      {section?.title && (
        <h3
          className={cn({
            "mb-[40px]": !section.subtitle,
            "mb-2": section.subtitle,
          })}
        >
          {section?.title}
        </h3>
      )}
      {section?.subtitle && (
        <span className={cn({}, "mb-[40px] block text-lg font-bold")}>
          {section.subtitle}
        </span>
      )}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={cn({
          invisible: isSuccessMessage,
        })}
      >
        <div className="grid grid-cols-1 sm:gap-x-4 sm:grid-cols-6">
          {section.formFields.map((formField, index) => {
            const fieldName = formField.placeholder
              .toLocaleLowerCase()
              .replace(" ", "_");
            return (
              <div className={cn("my-2 sm:col-span-6")} key={index}>
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
                  <span className="text-error">{formField.errorMessage}</span>
                )}
              </div>
            );
          })}
          {errorMessage && (
            <div className="error-message">
              <p className="text-error">{errorMessage}</p>
            </div>
          )}
        </div>
        <div className="mt-5 flex justify-center">
          <Button
            type="submit"
            className="btn btn--primary"
            loading={isSending}
          >
            {section.buttonText}
          </Button>
        </div>
      </form>
      {isSuccessMessage && (
        <div className="success-message text-center absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center">
          <Icon icon="success" className="mb-5" />
          <p className="text-primary-green">{section.successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
