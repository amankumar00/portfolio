import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import graphql from "../assets/graphql.png";
function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 3,
      src: nextjs,
      title: "NextJS",
      style: "shadow-gray-300",
    },
    {
      id: 4,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      style: "shadow-blue-300",
    },
  ];

  return (
    <section>
      <div
        name="Experience"
        className="bg-gradient-to-b from-black to-gray-900 w-full h-fit"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl inline border-b-4 border-gray-500 p-2">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-3 xs:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, style, title }) => {
              return (
                <div
                  key={id}
                  className={`w-auto shadow-md hover:scale-105 duration-200 py-2 rounded-full 
                  ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
