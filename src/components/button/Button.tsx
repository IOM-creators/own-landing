import React, { MouseEventHandler } from "react";
import cn from "classnames";
import Image from "../image";
interface IButton {
  icon?: string;
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
  typeButton = "button",
  link,
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
        <a href={link} className={cn(className)}>
          {!rightText && children}
          {icon && <Image onlyImg src={icon} className="mr-3" />}
          {rightText && children}
        </a>
      ) : (
        <button
          type={type}
          className={cn(className)}
          {...props}
          aria-label={type}
        >
          {!rightText && children}
          {icon && <Image onlyImg src={icon} className="mr-3" />}
          {rightText && children}
        </button>
      )}
    </>
  );
};

export default Button;
