import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import cn from "classnames";
import ContactButton from "../contact-button";
import Popup from "../popup";
import { useActions } from "@/store/hooks/useActions";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const { headerState } = useActions();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = router;

  useEffect(() => {
    headerState({ height: headerRef.current?.clientHeight || 0 });
  }, [pathname]);

  return (
    <div className={cn({}, `page-template`)}>
      <Header headerRef={headerRef} />
      <main>{children}</main>
      <ContactButton />
      <Popup />
      <Footer />
    </div>
  );
};

export default Layout;
