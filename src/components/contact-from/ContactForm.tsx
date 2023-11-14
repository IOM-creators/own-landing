import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import axios from "axios";

import Button from "../button";
import { ISectionCommon } from "../../helpers/commonInterfaces";
import Icon from "../icon";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });
  const [successMessage, updateMessage] = useState(false);
  const [errorMessage, updateError] = useState("");
  const [isSending, seSisSending] = useState(false);

  const onSubmit = async (data: FormValues, e: any) => {
    e.preventDefault();
    seSisSending(true);
    const axiosInstance = axios.create({
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    axiosInstance
      .post("https://iom-creators.com/mail.php", data)
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
          invisible: successMessage,
        })}
      >
        <div className="grid grid-cols-1  sm:gap-4 sm:grid-cols-6">
          <div className="sm:col-span-3  sm:my-4">
            <label htmlFor="first_name"></label>
            <Controller
              name="first_name"
              control={control}
              rules={{
                required: t("contact_us.form.first_name") + " is required",
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="first-name"
                  placeholder={t("contact_us.form.first_name")}
                  autoComplete="given-name"
                  className="block w-full rounded-md  p-2 px-4 border border-dark-blue focus:outline-none hover:outline-none"
                  aria-describedby="my-helper-text"
                  {...register("first_name")}
                />
              )}
            />
            {errors.first_name && (
              <span className="text-error">{errors.first_name.message}</span>
            )}
          </div>

          <div className="sm:col-span-3  my-4">
            <label htmlFor="last_name"></label>
            <Controller
              name="last_name"
              control={control}
              rules={{
                required: t("contact_us.form.last_name") + " is required",
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="last_name"
                  placeholder={t("contact_us.form.last_name")}
                  autoComplete="family-name"
                  className="block w-full rounded-md  py-2 px-4 border border-dark-blue focus:outline-none hover:outline-none"
                  aria-describedby="my-helper-text"
                  {...register("last_name")}
                />
              )}
            />
            {errors.last_name && (
              <span className="text-error">{errors.last_name.message}</span>
            )}
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="email"></label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: t("contact_us.form.email") + " is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                placeholder={t("contact_us.form.email")}
                autoComplete="email"
                className="block w-full rounded-md  p-2 px-4 border border-dark-blue focus:outline-none hover:outline-none"
                aria-describedby="my-helper-text"
                {...register("email")}
              />
            )}
          />
          {errors.email && (
            <span className="text-error">{errors.email.message}</span>
          )}
        </div>
        <div className="col-span-full my-4">
          <label htmlFor="message"></label>
          <Controller
            name="message"
            control={control}
            rules={{
              required: t("contact_us.form.message") + " is required",
            }}
            render={({ field }) => (
              <textarea
                {...field}
                id="message"
                placeholder={t("contact_us.form.message")}
                rows={3}
                className="block w-full rounded-md p-2 px-4 border border-dark-blue resize-none focus:outline-none hover:outline-none"
                aria-describedby="my-helper-text"
                {...register("message")}
              ></textarea>
            )}
          />
          {errors.message && (
            <span className="text-error">{errors.message.message}</span>
          )}
        </div>
        {errorMessage && (
          <div className="error-message">
            <p className="text-error">{errorMessage}</p>
          </div>
        )}
        <div className="mt-5 flex justify-center">
          <Button type="submit" secondary loading={isSending}>
            {t("contact_us.btn_text")}
          </Button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message text-center absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center">
          <Icon icon="success" className="mb-5" />
          <p className="text-green">{t("contact_us.success_message")}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
