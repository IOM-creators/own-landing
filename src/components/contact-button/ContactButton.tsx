import React, { useEffect, useState } from "react";
import ContactForm from "../contact-from";
import { useActions } from "../../store/hooks/useActions";
import { useTranslation } from "react-i18next";
import Icon from "../icon";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";

const ContactButton: React.FC = () => {
  const { isOpen }: any = useTypedSelector((state) => state.popup);
  const [iconState, setIconState] = useState(true);
  const { popupState } = useActions();
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setIconState(!iconState);
    popupState({
      isOpen: iconState,
      children: <ContactForm />,
      fullScreen: true,
      title: `${t("contact_us.title")}`,
    });
  };
  useEffect(() => {
    setIconState(!isOpen);
  }, [isOpen]);
  return (
    <div className="fixed right-5 bottom-5 z-30 flex items-center justify-center w-[70px] h-[70px] bg-blue rounded-full p-2">
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
