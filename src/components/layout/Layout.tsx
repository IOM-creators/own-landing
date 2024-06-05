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
  const [pageName, setPageName] = useState("");
  const { headerState } = useActions();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = router;

  useEffect(() => {
    const getPageName = () => {
      const segments = pathname.split("/");
      const name =
        segments.filter((segment) => segment !== "").pop() || "index";
      setPageName(name);
    };
    headerState({ height: headerRef.current?.clientHeight || 0 });
    getPageName();
  }, [pathname]);

  return (
    <div className={cn({}, `page-template page-template-${pageName}`)}>
      <Header headerRef={headerRef} />
      <main
        style={{
          marginTop:
            pathname !== "/" ? `${headerRef.current?.clientHeight || 0}px` : 0,
        }}
      >
        {children}
      </main>
      <ContactButton />
      <Popup />
      <Footer />
    </div>
  );
};

export default Layout;
