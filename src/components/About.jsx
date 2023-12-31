import React from "react";

function About() {
  return (
    <section>
      <div
        name="About"
        className="w-full h-screen bg-gradient-to-b from-gray-900 to to-black text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-3xl inline border-b-4 border-gray-500">
              Here is a little background
            </p>
          </div>

          <p className="mt-10">
            Greetings! I am a passionate and skilled software developer with
            over 1 year of hands-on experience, specializing in web development
            with the MERN (MongoDB, Express.js, React.js, Node.js) stack. My
            journey in the world of coding began with a profound curiosity for
            creating innovative and efficient solutions. I have a deep
            understanding of software engineering principles, algorithms, and
            data structures. I'm creative and able to think outside of the box
            when it comes to software development.Throughout my professional
            journey, I have had the privilege of working in collaborative
            environments where teamwork and effective communication are key. I
            value open dialogue, constructive feedback, and the collective
            effort to deliver high-quality software products.
          </p>
          <br />
          <p className="hidden lg:flex md:flex text-xl">
            I'm always striving to learn and broaden my knowledge base. My goal
            is to use my technical skills and knowledge to help create
            innovative solutions that make an impact.I am an advocate for clean
            and maintainable code. Writing code that is not only functional but
            also easily understandable and scalable is a principle I prioritize.
            This not only facilitates smoother collaboration but also ensures
            the long-term sustainability of the projects I contribute to.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
