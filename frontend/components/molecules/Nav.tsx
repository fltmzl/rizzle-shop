import { Navbar } from "flowbite-react";
import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Link href="/">
        <Navbar.Brand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Brand-Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
