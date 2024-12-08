import React, { useState } from "react";
import navbarConfig from "./navbarConfig.json"; // Import the JSON config

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        (navbarConfig.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-200"
      }
      style={{ backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity))" }}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (navbarConfig.transparent ? "text-white" : "text-gray-800") +
              " text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href={navbarConfig.logo.link}
          >
            {navbarConfig.logo.text}
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (navbarConfig.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex items-center lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-auto">
            {navbarConfig.menuItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <a
                  className={
                    (navbarConfig.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href={item.link}
                >
                  <i
                    className={
                      (navbarConfig.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      ` ${item.icon} text-lg leading-lg mr-2`
                    }
                  />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <button
                className={
                  "text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{
                  transition: "all .15s ease",
                  backgroundColor: "#1E293B",
                  color: "white",
                }}
                onClick={() => (window.location.href = navbarConfig.button.link)}
              >
                <i className={`${navbarConfig.button.icon} mr-2`}></i>
                {navbarConfig.button.text}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
