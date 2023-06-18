import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGooglePlus, FaGithub } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const [show, setShow] = useState(false);
  const [wrong, setWrong] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const beforLocation = location.state?.from?.pathname || "/";

  const { createUser, upDatePhotoAndName, googleSingIn } = useContext(AuthContext);

  // form get data function
  const fromData = (event) => {
    event.preventDefault();
    const data = event.target;
    const name = data.name.value;
    const photo = data.photo.value;
    const email = data.email.value;
    const password = data.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        navigate(navigate, { replace: true });
        data.reset();
        updatep(currentUser,name, photo);
      })
      .catch((error) => console.log(error));
  };

  // update name and profile 
  const updatep = (currentUser,n, p) => {
    upDatePhotoAndName(currentUser,n, p)
      .then((result) => {
        const loged = result.user;
        console.log(loged);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // password validation
  const handlePassword = (e) => {
    const getPassword = e.target.value;
    setPassword(getPassword);
    if (!/(?=.*[A-Z])/.test(password)) {
      setWrong("Please provide one uppercase letter");
    } else if (getPassword.length < 6) {
      setWrong("Wrong! at list six characters");
    } else {
      setWrong("");
    }
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
        <h1 className="text-3xl text-center mt-2 font-bold">Register now!</h1>
        <form onSubmit={fromData} className="p-2 rounded-sm bottom-0 mx-auto ">
          <h1 className="text-base mb-2 mt-2">Name</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <h1 className="text-base mb-2 mt-2">Photo</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Photo"
            type="text"
            name="photo"
          />
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
                onChange={handlePassword}
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

          {wrong && <span className="text-red-500 text-xl">{wrong}</span>}
          <button className="bg-blue-500 py-2 text-xl text-white rounded-lg hover:bg-blue-700 block w-full mt-10">
            Register
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
            Already have an account?{" "}
            <span className="text-blue-500">
              <NavLink to="/login"> Go to Login</NavLink>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
