import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../config/axiosClient";
import AlertMsg from "../../components/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email.trim(), password.trim()].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: false,
      });
    }
    try {
    } catch (error) {}
  };

  const { msg } = alert;

  return (
    <>
      {msg && <AlertMsg alert={alert} />}
      <div className="bg-white shadow-xl max-w-md mx-auto py-3 px-5 rounded-sm">
        <h1 className="text-sky-800 font-bold text-3xl uppercase text text-center">
          Login
        </h1>
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="my-3">
            <label
              htmlFor="email"
              className='uppercase text-gray-600 font-bold after:content-["*"] after:text-gray-400 after:ml-1'
            >
              Email
            </label>
            <input
              type="text"
              className="w-full  p-2 border rounded-xl bg-gray-50"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="password"
              className='uppercase text-gray-600 font-bold after:content-["*"] after:text-gray-400 after:ml-1'
            >
              Password
            </label>
            <input
              type="password"
              className="w-full  p-2 border rounded-xl bg-gray-50"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="Sign in"
            className="bg-sky-700 w-full py-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-sky-800 mb-5"
          />
        </form>
        <div className="lg:flex lg:justify-between space-y-1 md:space-y-0">
          <Link
            to={"/forgot-password"}
            className="block text-center uppercase text-sm text-gray-400 hover:text-gray-600"
          >
            I Forgot my password.
          </Link>
          <Link
            to={"/register"}
            className="block text-center uppercase text-sm text-gray-400 hover:text-gray-600"
          >
            Create an account.
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
