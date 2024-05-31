import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useSelector } from "react-redux";
function Footer() {
  const status = useSelector((state) => state.auth.status);
  return (
    <section className="relative overflow-hidden py-5 bg-gray-500  align-bottom  w-full">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-2 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by Yogesh
                  Prajapati.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full flex">
              <ul className="flex m-4">
                <li className="mb-2 m-4">
                  <Link
                    className=" text-base font-medium  text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {status ? (
                  <li className="mb-2 m-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/all-posts"
                    >
                      Post
                    </Link>
                  </li>
                ) : null}

                {status ? (
                  <li className="mb-2 m-4 text-nowrap">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/add-post"
                    >
                      Add Post
                    </Link>
                  </li>
                ) : null}

                {!status ? (
                  <li className="mb-2 m-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                ) : null}
                {!status ? (
                  <li className="mb-2 m-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
{
  /* <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div> */
}