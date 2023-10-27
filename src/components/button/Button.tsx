import React, { MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import Icon from "../icon";
interface IButton {
  icon?: string;
  primary?: boolean;
  secondary?: boolean;
  rightText?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({
  icon,
  primary,
  secondary,
  className,
  children,
  rightText,
  active,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: primary,
          [styles.secondary]: secondary,
          [styles.active]: active,
          [styles["right-text"]]: rightText,
        },
        className
      )}
      {...props}
    >
      {!rightText && children}
      {icon && (
        <Icon
          className=" group-hover:translate-x-3 duration-500 transition-transform "
          icon={icon}
        />
      )}
      {rightText && children}
    </button>
  );
};

export default Button;
