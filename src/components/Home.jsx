import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import profilePic from "../assets/profilepic.jpg";
function Home() {
  return (
    <section>
      <div
        name="home"
        className=" -z-10 h-screen w-full bg-gradient-to-b from-black  via-black to-gray-900"
      >
        <div className="w-full-lg ml-4 mr-4 flex flex-col items-center justify-center h-full px-4">
          <div className="py-4">
            <img
              src={profilePic}
              alt="my profile"
              className="rounded-full mx-auto w-[150px] "
            />
          </div>
          <div className="flex w-full items-stretch justify-center py-4">
            <div className="flex flex-col h-full">
              <h2 className="  text-2xl text-center leading-none sm:text-2xl font-bold text-white py-4 ">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Hi, I Am Aman kumar ",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h2>
            </div>
          </div>
          <Link to="About" smooth className=" animate-bounce flex flex-col">
            <button
              className="text-white w-fit px-6 py-3 my2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <span className="rotate-90">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
