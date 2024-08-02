import React, { MouseEventHandler } from "react";
import cn from "classnames";
import Image from "../image";
interface IButton {
  icon?: string;
  classNameIcon?: string;
  type?: any;
  typeButton?: string;
  link?: string;
  primary?: boolean;
  secondary?: boolean;
  rightText?: boolean;
  active?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({
  icon,
  classNameIcon,
  typeButton = "button",
  link,
  primary,
  secondary,
  type = "button",
  className,
  children,
  rightText,
  active,
  loading,
  ...props
}) => {
  return (
    <>
      {typeButton === "link" ? (
        <a
          href={link}
          target="blank"
          className={cn(className, {
            "btn btn--primary": primary,
            "btn btn--secondary": secondary,
          })}
        >
          {!rightText && children}
          {icon && (
            <Image
              onlyImg
              src={icon}
              className={cn(classNameIcon, {
                "mr-3": rightText,
                "ml-3": !rightText,
              })}
            />
          )}
          {rightText && children}
        </a>
      ) : (
        <button
          type={type}
          className={cn(className, {
            "btn btn--primary": primary,
            "btn btn--secondary": secondary,
          })}
          {...props}
          aria-label={type}
        >
          {!rightText && children}
          {icon && (
            <Image
              onlyImg
              src={icon}
              className={cn(classNameIcon, {
                "mr-3": rightText,
                "ml-3": !rightText,
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
