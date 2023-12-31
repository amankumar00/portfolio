import React from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
function NavigBar() {
  // const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
    {
      id: 6,
      link: "Workex",
    },
  ];

  const socials = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/amankumar-exe/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/amankumar00",
    },
    {
      id: 3,
      child: (
        <>
          <CiMail size={20} />
        </>
      ),
      href: "mailto:amanku070300@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <IoPersonOutline size={20} />
        </>
      ),
      href: "http://surl.li/nasav",
      style: "rounded-br-md",
    },
  ];
  return (
    <section>
      <div className="z-50 flex justify-between items-center w-full h-20 text-white px-4 bg-black">
        <div>
          <h1 className="text-5xl font-signature ml-2">Aman</h1>
        </div>
        <ul className="hidden md:flex lg:flex ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize hover:scale-110 text-gray-500 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="hidden sm:flex xs:flex flex-row">
          {socials.map(({ id, child, href }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize hover:scale-110 text-gray-500 duration-200"
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}
        {/* {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )} */}
      </div>
    </section>
  );
}

export default NavigBar;
