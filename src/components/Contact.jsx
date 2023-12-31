import React from "react";

function Contact() {
  return (
    <section>
      <div
        name="Contact"
        className="w-full h-screen bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="text-white">
            <p className="text-4xl inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/f8ece527-dd7b-4827-b32d-6a5a93ff93de"
              method="POST"
              className="flex flex-col w-full md:w-1/2 lg:w-1/2 sm:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your EMail"
                className="p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                id="1"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                rows="10"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200">
                {" "}
                Lets talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
