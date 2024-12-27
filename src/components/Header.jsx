// import items to make the section work
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
// Title with logo of Brainwave
const Header = () => {
  const pathname = useLocation();
  //   Add dropdown menu for mobile
  const [openNavigation, setopenNavigation] = useState(true);
  //   Check if navigation is open
  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      // Add function to keep page scroll on
      enablePageScroll();
    } else {
      setopenNavigation(true);
      // Add function to turn page scroll off
      disablePageScroll();
    }
  };

  //   check if hamburger icon is clicked to activate the dropdown menu on mobile
  const handleClick = () => {
    if (!openNavigation) return;
    // Keep page scroll on if not in navigation section
    enablePageScroll();
    setopenNavigation(false);
  };
  return (
    // Make it responsive for different size devices as well as mobile
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        {/* Check if navigation is open */}
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Add navigations from items in index.js */}
            {navigation.map((item) => (
              // Make nav bars change colour when mouse hovers over them and display certain things on Mobile or Desktop
              <a
                key={item.id}
                href={item.url}
                // Display on click
                onClick={handleClick}
                // Display what page user is on after clicking a link
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Add Hamburger icon on right side on mobile */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
