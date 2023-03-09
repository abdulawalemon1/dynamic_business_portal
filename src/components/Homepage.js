import React from "react";
import business_poster from "../images/business_poster.jpg";

export default function Homepage() {
  return (
    <div>
      <div className="pt-14 bg-indigo-700 lg:h-screen shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center flex flex-col justify-center">
            <h2 className="text-3xl text-center md:text-left font-black text-white sm:text-5xl md:mr-16">
              <span className="inline-block">Dynamic Business Portal</span>
            </h2>
            <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10 md:w-9/12 mt-8">
              <div className="space-y-6 flex flex-col ">
                <form className="flex flex-col space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="input input-bordered w-full"
                      autoComplete="off"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Send magic link
                    </button>
                  </div>
                </form>

                <span className="pt-1 text-center text-sm">
                  <a
                    href="#"
                    className="text-black text-secondary-9 hover:underline cursor-pointer"
                  >
                    Or sign in with a password.
                  </a>
                </span>
                <span className="pt-1 text-center text-sm">
                  <span className="text-black">Don't have an account</span>
                  <a className="text-black text-accent-9 font-bold hover:underline cursor-pointer">
                    Sign Up
                  </a>
                </span>
              </div>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div>
                    <a className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 cursor-pointer">
                      <span className="mx-3">Continue with Google</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-6 md:-ml-56 aspect-w-1 aspect-h-1 md:aspect-h-1">
          <span
          // style={{
          //   boxSizing: border - box,
          //   display: block,
          //   overflow: hidden,
          //   width: initial,
          //   height: initial,
          //   background: none,
          //   opacity: 1,
          //   border: 0,
          //   margin: 0,
          //   padding: 0,
          //   position: absolute,
          //   inset: 0,
          // }}
          >
            <img
              sizes="100vw"
              src={business_poster}
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              //   style={{
              //     position: absolute,
              //     inset: 0,
              //     padding: 0,
              //     border: none,
              //     margin: auto,
              //     display: block,
              //     width: 0,
              //     height: 0,
              //     minWidth: 100,
              //     maxWidth: 100,
              //     minHeight: 100,
              //     maxHeight: 100,
              //   }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
