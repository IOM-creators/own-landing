import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import cn from "classnames";
import ContactButton from "../contact-button";
import Popup from "../popup";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [pageName, setPageName] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = router;

  useEffect(() => {
    const getPageName = () => {
      const segments = pathname.split("/");
      const name =
        segments.filter((segment) => segment !== "").pop() || "index";
      setPageName(name);
    };

    getPageName();
  }, [router.pathname]);

  return (
    <div className={cn({}, `page-template page-template-${pageName}`)}>
      <Header headerRef={headerRef} />
      <main
        style={{
          paddingTop: `${
            pathname !== "/" ? headerRef.current?.clientHeight || 0 : 0
          }px`,
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
