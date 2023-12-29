import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/amankumar-exe/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Girhub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/amankumar00",
    },
    {
      id: 3,
      child: (
        <>
          Mail <CiMail size={30} />
        </>
      ),
      href: "mailto:amanku070300@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <IoPersonOutline size={30} />
        </>
      ),
      href: "http://surl.li/nasav",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
