import React, { MouseEventHandler, useEffect, useState } from "react";
import ContactForm from "../contact-form";
import { useActions } from "../../store/hooks/useActions";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import Link from "next/link";
import cn from "classnames";
import Image from "../image";
interface IButton {
  icon?: string;
  classNameIcon?: string;
  type?: any;
  typeButton?: boolean;
  link?: string;
  styleButton?: string;
  rightText?: boolean;
  active?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  eventClick?: MouseEventHandler<HTMLButtonElement>;
}
const buttonStyles = {
  Primary: "btn btn--primary group",
  Secondary: "btn btn--secondary group",
  Arrow: "btn btn--arrow",
  "Only Icon": "cursor-pointer",
};
const buttonTypes = {
  Link: "link",
  Button: "button",
  "Open Contact Popup": "popup",
};
const Button: React.FC<IButton> = ({
  icon,
  classNameIcon,
  typeButton = "Button",
  styleButton = "Primary",
  link = "",
  type = "button",
  className,
  children,
  rightText,
  active,
  loading,
  eventClick,
  ...props
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
    <>
      {buttonTypes[typeButton] === "link" && (
        <Link
          href={link?.toString() || ""}
          className={cn(className, buttonStyles[styleButton], {})}
        >
          {!rightText && children}
          {icon && (
            <Image
              onlyImg
              src={icon}
              className={cn(classNameIcon, {
                "mr-3 group-hover:translate-x-[-8px] transition-transform duration-300":
                  rightText,
                "ml-3 group-hover:translate-x-2 transition-transform duration-300":
                  !rightText,
              })}
            />
          )}
          {rightText && children}
        </Link>
      )}
      {buttonTypes[typeButton] === "button" && (
        <button
          type={type}
          className={cn(className, buttonStyles[styleButton], {})}
          {...props}
          aria-label={type}
          onClick={eventClick}
        >
          {!rightText && children}
          {icon && (
            <Image
              onlyImg
              src={icon}
              className={cn(classNameIcon, {
                "mr-3 group-hover:translate-x-[-8px] transition-transform duration-300":
                  rightText,
                "ml-3 group-hover:translate-x-2 transition-transform duration-300":
                  !rightText,
              })}
            />
          )}
          {rightText && children}
        </button>
      )}
      {buttonTypes[typeButton] === "popup" && (
        <button
          type={type}
          className={cn(className, buttonStyles[styleButton], {})}
          {...props}
          aria-label={type}
          onClick={handleClickOpen}
        >
          {!rightText && children}
          {icon && (
            <Image
              onlyImg
              src={icon}
              className={cn(classNameIcon, {
                "mr-3 group-hover:translate-x-[-8px] transition-transform duration-300":
                  rightText,
                "ml-3 group-hover:translate-x-2 transition-transform duration-300":
                  !rightText,
              })}
            />
          )}
          {rightText && children}
        </button>
      )}
    </>
  );
};

export default Button;
