import React, { useState , useEffect} from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { getIcon } from "@/lib/get-icon";
import socialIcons from "@/components/icons/social-icons";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();

  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "About",
      pathname: "/about",
    },
    {
      name: "Rooms",
      pathname: "/rooms",
    },
    {
      name: "Contact",
      pathname: "/contact",
    },
  ];

  const social = [
    {
      link: "https://www.linkedin.com/company/knewton-tech/",
      icons: "Linkedin",
    },
    {
      link: "https://instagram.com/knewtontech?igshid=MzRIODBiNWFLZA==",
      icons: "Instagram",
    },
    {
      link: "",
      icons: "Twitter",
    },
    {
      link: "",
      icons: "Facebook",
    },
    {
      link: "",
      icons: "Youtube",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="mx-2 md:mx-10 lg:flex items-center gap-10 my-10 text-sm hidden">
        <span className="border-l-[1px] w-1 h-10 border-primary"></span>
        <div className="flex gap-2">
          <h5 className="text-primary">Call :</h5>
          <p className="text-white">+999999999</p>
        </div>
        <div className="flex gap-2">
          <h5 className="text-primary">Find Us :</h5>
          <p className="text-white">Banglore</p>
        </div>
        <span className="border-l-[1px] w-1 h-10 border-primary"></span>
        {social?.map((v, i) => (
          <a href={v.link} className="flex">
            {getIcon({
              iconList: socialIcons,
              iconName: v.icons,
              className:
                "w-12 h-12 text-primary text-4xl dark:text-[var(--dark-color)] text-lg font-medium transition-transform transform scale-100 group-hover:scale-110",
            })}
          </a>
        ))}
      </div>
      <div className={`innerSticky transition-all duration-300 ${isSticky ? 'fixed top-0 z-50 w-full' : ''}`}>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center pl-5 bg-white mx-2 md:mx-10 rounded-sm shadow-lg">
          <div className="flex items-center justify-around col-span-1 md:col-span-1">
            <img src="./assets/logo.png" alt="logo" width={100} height={10} />
            <span className="border-l-2 h-10 hidden md:block ml-4"></span>
            <div className="hidden md:flex justify-center items-center gap-9 col-span-1">
              {links?.map((link, index) => (
                <ul key={index}>
                  <li>
                    <Link
                      href={link.pathname}
                      className={` ${
                        pathname == link.pathname ? "text-primary" : ""
                      } uppercase font-semibold font-serif text-sm hover:text-primary`}
                    >
                      {link.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end col-span-1 md:col-span-1 mx-10">
            <span className="border-l-2 h-10 hidden md:block mr-4"></span>
           <Link href="rooms">
            <Button
              label="Search Room"
              variant="normal"
              size="medium"
              className="hidden lg:block"
            />
            </Link>
          </div>
        </div>
       {/* Mobile menu */}
      <div className="lg:hidden flex items-center bg-white justify-around">
            <img src="./assets/logo.png" alt="logo" width={100} height={20} className="pl-4"/>
            <span className="border-l-2 h-10 mx-4"></span>
            <button onClick={toggleMenu} className="flex flex-col lg:hidden float-right">
              <span className="border-b-2 w-4 h-1 mt-1"></span>
              <span className="border-b-2 w-5 h-1 mt-1"></span>
              <span className="border-b-2 w-7 h-1 mt-1"></span>
            </button>
          </div>
       
        {isMenuOpen && (
          <div className="lg:hidden bg-secondary p-4 lg:mx-10 rounded-sm transition-all ease-linear duration-200 text-center">
            {links?.map((link, index) => (
              <ul key={index}>
                <li className="my-3">
                  <Link
                    href={link.pathname}
                    onClick={toggleMenu}
                    className="text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
