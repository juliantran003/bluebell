// Components
import Menu from "./menu";
import Contact from "./contact";
import Logo from "./logo";

// Imports
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Menu />
      <Contact />
      {router.pathname !== "/" && <Logo />}
      <main>{children}</main>
    </>
  );
}
