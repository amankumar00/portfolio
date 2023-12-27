import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

function SocialLinks() {
  return (
    <div className="flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Linkedin <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
