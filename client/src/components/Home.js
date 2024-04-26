import React from "react";
import ankit from "../assets/ankit_kumar.png";
import satwik from "../assets/satwik_pfp.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const email = window.sessionStorage.getItem("token");
  if (!email) {
    alert("You are Not Logged In... Login to View...");
    navigate("/");
  }
  return (
    <div>
      <div className="pl-80 pt-32 px-36 text-center">
        <div className="shadow-lg rounded-lg">
          <div className="inline-block border-b-2 border-dotted border-gray-700">
            <h1 className="text-2xl font-bold">Online Clearance System</h1>
          </div>
          <div className="p-2 pb-7 mt-2 text-lg">
            <span>
              An Online Clearance System typically refers to a digital platform
              or software used to streamline and automate the process of
              obtaining clearances or approvals.
            </span>
            <br/>
            <span>
              This system allows individuals or organizations to submit
              clearance requests, track their progress, and receive electronic
              clearances or approvals.
            </span>
          </div>
        </div>

        {/* {Student Details} */}
        <div className="mt-7 inline-block shadow-xl rounded-lg">
          <div className="inline-block border-b-2 border-dotted border-gray-900">
            <h1 className="text-2xl font-bold">Student Developers</h1>
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <div className="p-4 text-gray-800 rounded-lg flex flex-col items-center justify-center">
              <img
                className="w-48 h-48 shadow-lg rounded-lg "
                src={satwik}
                alt={satwik}
              />
              <h1 className="text-xl font-semibold">Satwik Gupta</h1>
              <div className="w-20 flex justify-evenly">
                <button
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/satwikgupta18/");
                  }}
                >
                  <AiFillLinkedin size={27} className="rounded-full" />
                </button>
                <button
                  onClick={() => {
                    window.open("https://github.com/satwikgupta");
                  }}
                >
                  <AiFillGithub size={27} />
                </button>
              </div>
            </div>
            <div className="p-4 text-gray-900 rounded-lg flex flex-col items-center justify-center">
              <img
                className="w-48 h-48 shadow-lg rounded-lg"
                src={ankit}
                alt={ankit}
              />
              <h1 className="text-xl font-semibold">Ankit Kumar Gupta</h1>
              <div className="w-20 flex justify-evenly">
                <button
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/ankit-kumar-gupta-3a794a237/"
                    );
                  }}
                >
                  <AiFillLinkedin size={27} className="rounded-full" />
                </button>
                <button
                  onClick={() => {
                    window.open("https://github.com/AnkitGupta03");
                  }}
                >
                  <AiFillGithub size={27} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
