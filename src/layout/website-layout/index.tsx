"use client";
import { usePathname } from "next/navigation";
import { Header, Footer } from "../../components";

const WebsiteLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  const pathname = usePathname();

  const getVariant = () => {
    switch (pathname) {
      case "/about/":
      case "/merchandise/":
      case "/contact-us/":
        return "light";
      default:
        return "dark";
    }
  };
  return (
    <>
      <Header variant={getVariant()} />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
