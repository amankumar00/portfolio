import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
  ];

  return (
    <section>
      <div
        name="Portfolio"
        className="bg-gradient-to-b from-gray-900 to-black w-full text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl  inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work here</p>
            <div className=" h-full grid overflow-x-auto grid-flow-col gap-8 px-3 py-6 sm:px-0">
              {projects.map(({ id, src }) => {
                return (
                  <div
                    key={id}
                    className=" h-52 w-72 shadow-md shadow-gray-600 rounded-lg duration-200  hover:scale-105  "
                  >
                    <img src={src} alt="" className="rounded-md " />
                    <div className="flex items-center justify-center">
                      <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 rounded-lg font-thin ">
                        Demo
                      </button>
                      <button className=" font-thin w-1/2 px-6 py-3 duration-200 hover:scale-105 rounded-lg">
                        Code
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
