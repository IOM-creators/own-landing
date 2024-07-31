import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./popup.module.scss";

import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { PopupState } from "../../store/types/popup";
import { useActions } from "../../store/hooks/useActions";
import Icon from "../icon";
import Button from "../button";

const Popup: React.FC = () => {
  const { isOpen, title, children, closeButton }: PopupState = useTypedSelector(
    (state) => state.popup
  );
  const { popupState } = useActions();

  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    popupState({ isOpen: false });
  };
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={cn(styles.popup, {
        [styles.open]: open,
      })}
    >
      <div className={styles.popup__overlay} onClick={handleClose}></div>
      <div className={styles.popup__wrapper}>
        {closeButton && (
          <Button onClick={handleClose} className={styles.popup__close}>
            <Icon icon="close" className="popup__buttom" />
          </Button>
        )}
        {title && <h2 className="text-center my-4">{title}</h2>}
        <div className={styles.popup__content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
