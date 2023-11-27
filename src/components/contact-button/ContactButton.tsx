import React, { useEffect, useState } from "react";
import ContactForm from "../contact-from";
import { useActions } from "../../store/hooks/useActions";
import Icon from "../icon";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useGetContactUs } from "../../graphql/";

interface IContactButton {
  id?: string;
}

const ContactButton: React.FC<IContactButton> = ({ id }) => {
  const { section } = useGetContactUs("6POxLTGZS7MVs4Uv2yPLgk");
  const { isOpen }: any = useTypedSelector((state) => state.popup);
  const [iconState, setIconState] = useState(true);
  const { popupState } = useActions();

  const handleClickOpen = () => {
    setIconState(!iconState);
    popupState({
      isOpen: iconState,
      children: (
        <ContactForm
          fields={section.formFields}
          successMessage={section.successMessage}
          buttonText={section.buttonText}
        />
      ),
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
      <button onClick={handleClickOpen}>
        {iconState ? (
          <Icon icon="contact" />
        ) : (
          <Icon icon="close" className="w-8 h-8" strokeClass="stroke-white" />
        )}
      </button>
    </div>
  );
};

export default ContactButton;
