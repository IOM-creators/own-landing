import React, { useEffect, useState } from "react";
import ContactForm from "../contact-form";
import { useActions } from "../../store/hooks/useActions";
import Icon from "../icon";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useGetContactForm } from "../../graphql/";
import Button from "../button";

interface IContactButton {
  id?: string;
}

const ContactButton: React.FC<IContactButton> = ({ id }) => {
  const { section } = useGetContactForm("6POxLTGZS7MVs4Uv2yPLgk");
  const { isOpen }: any = useTypedSelector((state) => state.popup);
  const [iconState, setIconState] = useState(true);
  const { popupState } = useActions();

  const handleClickOpen = () => {
    setIconState(!iconState);
    popupState({
      isOpen: iconState,
      children: <ContactForm id={section.formId} />,
      fullScreen: true,
      closeButton: false,
      title: section.title,
    });
  };
  useEffect(() => {
    setIconState(!isOpen);
  }, [isOpen]);
  return (
    <div className="fixed right-5 bottom-5 z-30 flex items-center justify-center w-[60px] h-[60px] bg-blue rounded-full p-2">
      <Button onClick={handleClickOpen}>
        {iconState ? (
          <Icon icon="contact" />
        ) : (
          <Icon icon="close" className="w-8 h-8" strokeClass="stroke-white" />
        )}
      </Button>
    </div>
  );
};

export default ContactButton;
