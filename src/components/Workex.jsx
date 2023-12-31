import React from "react";
import Apisero from "../assets/we/Apisero.png";
import quagnitia from "../assets/we/quagnitia.png";
function Workex() {
  const exps = [
    {
      id: 1,
      icon: Apisero,
      name: "Apisero",
      role: "Software Engineer",
      duration: "Jul 22 - Feb 23",

      line1:
        "Engineered a robust middleware API using Mule 4 and CloudHub 2.0 to establish a seamless connection between an Oracle database and AWS, meticulously validating incoming data in varied formats such as JSON, CSV, and XML.",
      line2:
        "Implemented precise validation mechanisms within the API to ensure adherence to predefined formats, segregating validated data into designated tables within a Salesforce database, efficiently storing correct data in a ’data’ table and erroneous data in an ’error’ table for further analysis and resolution.",
      tech: "Technologies Used : Java, SpringBoot, AWS EC2, Jenkins, Postman, Jira, Mulesoft",
    },
    {
      id: 2,
      icon: quagnitia,
      name: "Quagnitia",
      role: "Software Engineering Intern",
      duration: "Dec 20 - Apr 22",
      line1:
        "Engineered a medical mobile application using Flutter, creating a user-friendly interface to display crucial emergency contact details in a QR code format on the device’s home screen, ensuring swift access for first respondants during critical situations.",
      line2:
        "Integrated Firebase backend services to securely store and retrieve emergency contact information, ensuring data persistence and real-time updates to the QR code displayed on the user’s phone.",
      tech: "Technologies Used: Flutter, Java, Swift, Firebase, Postman, Jira",
    },
  ];
  return (
    <section>
      <div
        name="Workex"
        className="h-fit bg-gradient-to-b from-black to-gray-900 text-white"
      >
        <div>
          <div className="max-w-screen-lg py-4 px-4 justify-center w-full h-full ">
            <div className="pb-8">
              <p className=" text-4xl inline border-b-4 border-gray-500 ">
                Experience
              </p>
            </div>

            <div className=" py-8 h-max w-full ">
              <div className="p-4 grid gap-4 grid-flow-col overflow-x-auto">
                {exps.map(
                  ({ id, name, line1, line2, tech, icon, duration, role }) => {
                    return (
                      <div
                        key={id}
                        className=" bg-gray-900 h-full min-w-80 max-w-full rounded-xl  "
                      >
                        <div className=" p-4 flex justify-center items-center">
                          <img src={icon} alt="" className="  h-[135px] " />
                        </div>
                        <div className="p-4">
                          <p className="text-3xl pb-2">{role}</p>
                          <p className="text-xl  font-light pb-2">{name}</p>
                          <p className="font-thin text-sm">{duration}</p>
                        </div>

                        <div className="pb-2 px-4 ">
                          <p className="text-sm">{line1}</p>
                          <br></br>
                          <p className="text-sm">{line2} </p>
                          <br></br>
                          <p className="text-sm">{tech} </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workex;
