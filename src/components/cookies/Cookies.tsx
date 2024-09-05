// components/CookieConsent.js
import { setCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "../icon";
import Button from "../button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie("cookie-consent");
    if (!consentCookie) {
      setIsVisible(true);
    }
  }, []);

  const handleApprove = () => {
    setCookie("cookie-consent", "approved", { maxAge: 60 * 60 * 24 * 365 }); // 1 рік
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setCookie("cookie-consent", "dismissed", { maxAge: 60 * 60 * 24 * 365 });
    setIsVisible(false);
  };
  const handleCookie = () => {
    setIsVisible(true);
  };

  if (!isVisible) {
    return (
      <Button
        styleButton="Only Icon"
        className="fixed bottom-8 right-8 z-50 w-10 h-10"
        eventClick={handleCookie}
      >
        <Icon icon="cookie" />
      </Button>
    );
  }
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-white border-t-2 border-border-color flex flex-wrap lg:flex-nowrap justify-between gap-6 align-center">
      <p className="text-base mt-0 mb-4">
        We use cookies to ensure the proper functioning of our website and
        enhance your user experience. Essential cookies are always active. You
        can manage your preferences in our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-4 items-center">
        <button
          onClick={handleApprove}
          className="btn btn--secondary justify-center p-2 min-w-[120px]"
        >
          Accept
        </button>
        <button
          onClick={handleDismiss}
          className="btn btn--primary justify-center p-2 min-w-[120px]"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
