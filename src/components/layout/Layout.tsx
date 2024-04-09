import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import cn from "classnames";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const getPageName = () => {
      const pathname = router.pathname;
      const segments = pathname.split("/");
      const name =
        segments.filter((segment) => segment !== "").pop() || "index";
      setPageName(name);
    };

    getPageName();
  }, [router.pathname]);

  return (
    <div className={cn({}, `page-template page-template-${pageName}`)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
