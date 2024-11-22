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
  type?: "button" | "submit" | "reset";
  typeButton?: keyof typeof buttonTypes;
  link?: string;
  styleButton?: keyof typeof buttonStyles;
  rightText?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  eventClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyles = {
  Primary: "btn btn--primary group",
  Secondary: "btn btn--secondary group",
  Arrow: "btn btn--arrow group",
  "Only Icon": "cursor-pointer",
} as const;

const buttonTypes = {
  Link: "link",
  Button: "button",
  "Open Contact Popup": "popup",
} as const;

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
  eventClick,
  ...props
}) => {
  const { isOpen } = useTypedSelector((state) => state.popup);
  const [iconState, setIconState] = useState(true);
  const { popupState } = useActions();

  const handleClickOpen = () => {
    setIconState(!iconState);
    popupState({
      isOpen: iconState,
      children: <ContactForm id="5ttMRXXtvX30PgKWX3iln6" request={true} />,
      fullScreen: true,
      closeButton: true,
    });
  };

  useEffect(() => {
    setIconState(!isOpen);
  }, [isOpen]);

  const renderIcon = () =>
    icon && (
      <Image
        onlyImg
        src={icon}
        alt="Button"
        className={cn(classNameIcon, {
          "mr-3 group-hover:translate-x-[-8px] transition-transform duration-300":
            rightText,
          "ml-3 group-hover:translate-x-2 transition-transform duration-300":
            !rightText,
        })}
      />
    );

  return (
    <>
      {typeButton === "Link" && link && (
        <Link
          href={link}
          className={cn(className, buttonStyles[styleButton])}
          {...props}
        >
          {!rightText && children}
          {renderIcon()}
          {rightText && children}
        </Link>
      )}

      {typeButton === "Button" && (
        <button
          type={type}
          className={cn(className, buttonStyles[styleButton])}
          {...props}
          aria-label={type}
          onClick={eventClick}
        >
          {!rightText && children}
          {renderIcon()}
          {rightText && children}
        </button>
      )}

      {typeButton === "Open Contact Popup" && (
        <button
          type={type}
          className={cn(className, buttonStyles[styleButton])}
          {...props}
          aria-label={type}
          onClick={handleClickOpen}
        >
          {!rightText && children}
          {renderIcon()}
          {rightText && children}
        </button>
      )}
    </>
  );
};

export default Button;
