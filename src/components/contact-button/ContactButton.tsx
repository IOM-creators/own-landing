import React, { useEffect, useState } from "react";
import ContactForm from "../contact-form";
import { useActions } from "../../store/hooks/useActions";
import cn from "classnames";
import Icon from "../icon";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useGetContactForm } from "../../graphql/";
import Button from "../button";

interface IContactButton {
  id?: string;
  className?: string;
  children?: any;
}

const ContactButton: React.FC<IContactButton> = ({
  id,
  className,
  children,
}) => {
  const { isOpen }: any = useTypedSelector((state) => state.popup);
  const [iconState, setIconState] = useState(true);
  const { popupState } = useActions();

  const handleClickOpen = () => {
    setIconState(!iconState);
    popupState({
      isOpen: iconState,
      children: <ContactForm id="5ttMRXXtvX30PgKWX3iln6" />,
      fullScreen: true,
      closeButton: true,
    });
  };
  useEffect(() => {
    setIconState(!isOpen);
  }, [isOpen]);
  return (
    <div className={cn(className, {})} onClick={handleClickOpen}>
      {children}
    </div>
  );
};

export default ContactButton;
