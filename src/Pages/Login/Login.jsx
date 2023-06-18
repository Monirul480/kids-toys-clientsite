import React, { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlus, FaGithub } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {

  useTitle('Login')
  const [show, setShow] = useState(false);
  const [wrong, setWrong] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const beforLocation = location.state?.from?.pathname || "/";

  const {signIn, googleSingIn} = useContext(AuthContext);
 
// form get data function 
  const fromData = (event) => {
    event.preventDefault();
    const data = event.target;
    const email = data.email.value;
    const password = data.password.value;

    signIn(email, password)
    .then((result) => {
      const res = result.user;
      console.log(res);
      setWrong("");
      data.reset();
      navigate(beforLocation, { replace: true });
    })
    .catch((error) => {
      console.log(error.message);
      setWrong(error.message);
    });
  };

  // sign in With google function

  const signGoogle = () => {
    googleSingIn()
      .then((result) => {
        const us = result.user;
        setWrong("");
        console.log(us);
        navigate(beforLocation, { replace: true });
      })
      .catch((error) => {
        setWrong(error.message);
      });
  };

  return (
    <div className="hero bg-gray-100 lg:min-h-[calc(100vh_-_20vh)]">
      <div className="py-8 rounded-2xl shadow-2xl shadow-blue-500/50 border-2 w-full my-5 bg-blue-100 lg:w-2/6">
        <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
        <form onSubmit={fromData} className="p-2 rounded-sm bottom-0 mx-auto ">
          <h1 className="text-base mb-2 mt-4">Email</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <h1 className="text-base mb-2 mt-4">Password</h1>

          <div className="flex">
            <div className="w-11/12">
              <input
                className="w-full h-10 rounded-md pl-3  text-black"
                placeholder="Password"
                type={show ? "text" : "password"}
                name="password"
                required
              />
            </div>
            <div
              onClick={() => setShow(!show)}
              className="bg-white w-10 pl-3 pt-3 pr-0  h-10 rounded-md text-center"
            >
              {show ? (
                <FaEye className="text-center text-black " />
              ) : (
                <FaEyeSlash className="text-center text-black " />
              )}
            </div>
          </div>

          {wrong && <span className="text-yellow-400 text-xl">{wrong}</span>}
          <button className="bg-blue-500 py-2 text-xl text-white rounded-lg hover:bg-blue-700 block w-full mt-10">
            Login
          </button>
          <div className="divider">OR</div>
          <div className="mt-4 justify-center flex">
            <button onClick={signGoogle} className="bg-gray-200 text-black py-1 px-4 flex rounded-lg shadow-md mr-2">
              <FaGooglePlus className="text-xl text-blue-500 flex items-center h-full mr-1" />
              Google
            </button>
            <button className="bg-gray-200 text-black py-1 px-4 flex rounded-lg shadow-md">
              <FaGithub className="text-xl text-blue-500 flex items-center h-full mr-1" />
              Github
            </button>
          </div>
          <p className="mt-4 text-center">
          Dont have an account yet?{" "}
            <span className="text-blue-500">
              <NavLink to="/register">Go to Register</NavLink>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
