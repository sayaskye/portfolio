import { useContext } from "react";

import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { configContext } from "../../context/configContext";

const NavigationLinks = () => {
  const { menuOpen, setMenuOpen } = useContext(configContext);
  const links = [
    {
      href: "/",
      id: "home",
    },
    {
      href: "/about",
      id: "about",
    },
    {
      href: "/portfolio",
      id: "projects",
    },
    {
      href: "/contact",
      id: "contact",
    },
  ];
  return (
    <div className="text-main-lightblue dark:text-main-blue text-2xl flex flex-col items-center w-60 font-semibold">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="duration-300 ease-in-out w-full h-14 rounded-3xl flex items-center justify-center bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 hover:text-black mb-2 dark:hover:text-white no-underline dark:text-main-blue text-main-lightblue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FormattedMessage id={`nav.${link.id}`} />
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
