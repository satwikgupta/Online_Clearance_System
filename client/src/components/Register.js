import React from "react";
import { useState } from "react";
import nita from "../assets/nita_black.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");
  const [acadHostel, setAcadHostel] = useState("");
  const [library, setLibrary] = useState("");
  const [extra, setExtra] = useState("");
  const [phoneno, setPhoneNo] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !rollno ||
      !branch ||
      !year ||
      !password ||
      !mess ||
      !acadHostel ||
      !library ||
      !extra ||
      !phoneno
    ) {
      alert("All fields are required");
    } else {
      try {
        const res = await axios.post("http://localhost:5000/register", {
          name,
          email,
          rollno,
          branch,
          year,
          password,
          mess,
          acadHostel,
          library,
          extra,
          phoneno,
        }, {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.status === "OK") {
          alert("Registration successful");
          navigate("/");
        } else {
            console.log('error', res.data);
            
          alert("Error registering user");
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-30 w-auto" src={nita} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            NITA Online Clearance System
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="rollno"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Roll No
              </label>
              <div className="mt-2">
                <input
                  id="rollno"
                  name="rollno"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="branch"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Branch
              </label>
              <div className="mt-2">
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Year
              </label>
              <div className="mt-2">
                <input
                  id="year"
                  name="year"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mess"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mess
              </label>
              <div className="mt-2">
                <input
                  id="mess"
                  name="mess"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setMess(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="acadHostel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Academic Hostel
              </label>
              <div className="mt-2">
                <input
                  id="acadHostel"
                  name="acadHostel"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setAcadHostel(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="library"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Library
              </label>
              <div className="mt-2">
                <input
                  id="library"
                  name="library"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setLibrary(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="extra"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Extra Curricular
              </label>
              <div className="mt-2">
                <input
                  id="extra"
                  name="extra"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setExtra(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneno"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No
              </label>
              <div className="mt-2">
                <input
                  id="phoneno"
                  name="phoneno"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-gray-900 hover:bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
