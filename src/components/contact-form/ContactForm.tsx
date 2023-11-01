import React from "react";
import { Controller, useForm } from "react-hook-form";
import Section from "../section";
import Button from "../button";
import TitleSection from "../title-section";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  message: string;
};
interface IContactForm {
  className?: string;
}


const ContactForm: React.FC<IContactForm> = ({ className }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues, e: any) => {
    e.preventDefault();
    console.log("data", data);
  };
  const onError = (errors: any, e: any) => console.log(errors, e);
  return (
    <Section id="ContactUs" className={className}>
      <div className="bg-dark-blue py-20 px-10 md:px-40 rounded-2xl bg-ellipse bg-right-top bg-no-repeat">
        <TitleSection
          tag="h2"
          fontSize="text-3xl md:text-5xl"
          className="text-center mb-10 max-w-lap mx-auto text-white"
        >
          An enterprise template to ramp up your company website
        </TitleSection>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="grid grid-cols-1  sm:gap-4 sm:grid-cols-6">
              <div className="sm:col-span-3  sm:my-4">
                <label htmlFor="name"></label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="first-name"
                      placeholder="First name"
                      autoComplete="given-name"
                      className="block w-full rounded-md  p-2 px-4 "
                      aria-describedby="my-helper-text"
                      {...register("name")}
                    />
                  )}
                />
                {errors.name && (
                  <span className="text-error">{errors.name.message}</span>
                )}
              </div>

              <div className="sm:col-span-3  my-4">
                <label htmlFor="surname"></label>
                <Controller
                  name="surname"
                  control={control}
                  rules={{ required: "Surname is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="surname"
                      placeholder="Last name"
                      autoComplete="family-name"
                      className="block w-full rounded-md  py-2 px-4 "
                      aria-describedby="my-helper-text"
                      {...register("surname")}
                    />
                  )}
                />
                {errors.surname && (
                  <span className="text-error">{errors.surname.message}</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email"></label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Email address"
                    autoComplete="email"
                    className="block w-full rounded-md  p-2 px-4 "
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
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    placeholder="Message"
                    rows={3}
                    className="block w-full rounded-md p-2 px-4 "
                    aria-describedby="my-helper-text"
                    {...register("message")}
                  ></textarea>
                )}
              />
              {errors.message && (
                <span className="text-error">{errors.message.message}</span>
              )}
            </div>
            <div className="mt-5 flex justify-center">
              <Button type="submit" secondary>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
