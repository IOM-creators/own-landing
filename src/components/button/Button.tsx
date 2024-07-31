import React, { MouseEventHandler } from "react";
import cn from "classnames";
import Image from "../image";
interface IButton {
  icon?: string;
  type?: any;
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
  type = "button",
  className,
  children,
  rightText,
  active,
  loading,
  ...props
}) => {
  return (
    <button type={type} className={cn(className)} {...props} aria-label={type}>
      {!rightText && children}
      {icon && <Image onlyImg src={icon} className="mr-3" />}
      {rightText && children}
    </button>
  );
};

export default Button;
