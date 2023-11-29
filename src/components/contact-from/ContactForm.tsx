import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import cn from "classnames";
import axios from "axios";

import Button from "../button";
import Icon from "../icon";

interface IContactUs {
  className?: string;
  buttonText: string;
  successMessage: string;
  fields: [
    {
      typeField: string;
      placeholder: string;
      required: boolean;
      errorMessage: string;
    }
  ];
}

const ContactForm: React.FC<IContactUs> = ({
  className,
  fields,
  buttonText,
  successMessage,
}) => {
  const combinedObject = fields.reduce((result, field) => {
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
  return (
    <div className="max-w-lg mx-auto relative">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={cn({
          invisible: isSuccessMessage,
        })}
      >
        <div className="grid grid-cols-1 sm:gap-x-4 sm:grid-cols-6">
          {fields.map((formField, index) => {
            const fieldName = formField.placeholder
              .toLocaleLowerCase()
              .replace(" ", "_");
            return (
              <div
                className={cn(
                  {
                    "sm:col-span-3": index <= 1,
                    "sm:col-span-6": index > 1,
                  },
                  "my-2"
                )}
                key={index}
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
                        className="block w-full rounded-md p-2 px-4 border border-dark-blue resize-none focus:outline-none hover:outline-none"
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
                        className="block w-full rounded-md  p-2 px-4 border border-dark-blue focus:outline-none hover:outline-none"
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
          <Button type="submit" secondary loading={isSending}>
            {buttonText}
          </Button>
        </div>
      </form>
      {isSuccessMessage && (
        <div className="success-message text-center absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center">
          <Icon icon="success" className="mb-5" />
          <p className="text-green">{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
