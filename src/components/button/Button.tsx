import React, { MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import Icon from "../icon";
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
  primary,
  secondary,
  className,
  children,
  rightText,
  active,
  loading,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        {
          [styles.primary]: primary,
          [styles.secondary]: secondary,
          [styles.active]: active,
          [styles.loading]: loading,
          [styles["right-text"]]: rightText,
        },
        className
      )}
      {...props}
      aria-label={type}
    >
      {!rightText && children}
      {icon && (
        <Icon
          className=" group-hover:translate-x-1 duration-300 transition-transform "
          icon={icon}
        />
      )}
      {rightText && children}
    </button>
  );
};

export default Button;
