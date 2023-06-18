import React, { useContext , useEffect, useState} from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [ph, setPh] = useState("");

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setName(profile.displayName);
        setPh(profile.photoURL);
      });
    }
  }, [user]);


  // logout 
  const signOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allToys"}
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-white"
          }
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink
              to={"/myToys"}
              className={({ isActive }) =>
                isActive ? "bg-green-500 font-bold" : "bg-white"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/addToys"}
              className={({ isActive }) =>
                isActive ? "bg-green-500 font-bold" : "bg-white"
              }
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          to={"/Blog"}
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-white"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink className="flex" to="/">
          <img className="h-14 w-14 mr-1" src="logo.svg" alt="" />
          <div className="font-bold mt-2  text-3xl">
            <span className="text-primary">Kid</span>hippo
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
            <button onClick={signOut} className="btn btn-primary mr-3 normal-case">
              <NavLink className='hover:text-white' to="/">Log Out</NavLink>
            </button>
          ) : (
            <button className="btn btn-primary normal-case">
              <NavLink className='hover:text-white' to="/login">Login</NavLink>
            </button>
            
          )}

          {user ? (
            <div className="group relative lg:mr-6  flex justify-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full group relative flex justify-center">
                  <img src={ph ? ph : "../../../public/profile.png"}></img>
                </div>
              </label>
              {name ? (
                <span className="absolute top-12 scale-0 rounded flex flex-row w-28 mr-10 bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  ✨ {name ? name : ""}
                </span>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
};

export default Navbar;

