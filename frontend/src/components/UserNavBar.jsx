import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Nav() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { accountId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {/* Navbar Start */}
      <div
        className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-white"
        style={{ height: "80px" }}
      >
        <div className="container">
          <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
            <a className="navbar-brand" href="index.html">
              <img
                src="../../assets/img/new.png"
                alt="Logo"
                width="100"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler focus:outline-none block lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                <li className="nav-item">
                  <a
                    className="page-scroll active text-white font-bold"
                    href={`/home/${accountId}`}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href={`/service/${accountId}`}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href={`/about/${accountId}`}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href={`/about/${accountId}`}
                  >
                    Network
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href={`/offers/${accountId}`}
                  >
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href={`/contact/${accountId}`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex items-center justify-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon className="h-10 w-15 rounded-full text-blue-500" />

                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`/userprofile/${accountId}`}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Account Setting
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            {user && (
              <div>
                <span className="ml-3">{user.accountId}</span>
                <button
                  onClick={handleClick}
                  className="ml-3 text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white"
                >
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <button className="ml-3 text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white">
                  <Link to="login">login</Link>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}
