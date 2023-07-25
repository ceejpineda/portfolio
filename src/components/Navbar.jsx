import React from "react";
import { Link } from "react-scroll";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
 
export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <Link
          className="nav-link flex items-center font-semibold no-underline cursor-pointer"
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <Link
          className="nav-link flex items-center font-semibold no-underline cursor-pointer"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <Link
          className="nav-link flex items-center font-semibold no-underline cursor-pointer"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <Link
          className="nav-link flex items-center font-semibold no-underline cursor-pointer"
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-none shadow-md py-2 px-4 lg:px-8 lg:py-4">
    <div className="prose prose-lg flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto">
        <h4 className="cursor-pointer font-bold m-0"> &lt;ishnoopy /&gt;</h4>
        <div className="flex items-center gap-4">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
        >
            {openNav ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            )}
        </IconButton>
        </div>
    </div>
    <Collapse open={openNav}>
        {navList}
    </Collapse>
    </Navbar>
  );
}