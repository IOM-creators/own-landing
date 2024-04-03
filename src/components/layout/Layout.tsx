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
      // Get the pathname from the router object
      const pathname = router.pathname;

      // Split the pathname by '/' to get individual segments
      const segments = pathname.split("/");

      // Filter out empty segments and get the last one, which corresponds to the page name
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
