import React from "react";
import avatar from "../../images/avatar.png";

export default function Profile() {
  return (
    <div>
      <div className="py-6" bis_skin_checked="1">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
          bis_skin_checked="1"
        >
          <form className="space-y-8 shadow sm:overflow-hidden sm:rounded-md bg-white px-4 py-4 divide-gray-200">
            <div className="space-y-8 divide-gray-200" bis_skin_checked="1">
              <div bis_skin_checked="1">
                <div className="sm:flex sm:items-center" bis_skin_checked="1">
                  <div className="sm:flex-auto" bis_skin_checked="1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div
                    className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"
                    bis_skin_checked="1"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div
                  className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                  bis_skin_checked="1"
                >
                  <div className="sm:col-span-6" bis_skin_checked="1">
                    <label
                      for="photo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Photo
                    </label>
                    <div
                      className="mt-1 flex items-center"
                      bis_skin_checked="1"
                    >
                      <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <span>
                          <span>
                            <img alt="" aria-hidden="true" src={avatar} />
                          </span>
                          <img
                            alt="profile"
                            src={avatar}
                            decoding="async"
                            data-nimg="intrinsic"
                            className="h-full w-full text-gray-300"
                            srcset="/_next/image?url=https%3A%2F%2Fxsnfuqrdelvpgkzysxas.supabase.co%2Fstorage%2Fv1%2Fobject%2Fsign%2Favatars%2Fblank_profile.png%3Ftoken%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2JsYW5rX3Byb2ZpbGUucG5nIiwiaWF0IjoxNjY0NDI2ODQwLCJleHAiOjE5Nzk3ODY4NDB9.IzptB75wjoIeEk-7F07EMECn9FutDuIuokG2WxbFsdw&amp;w=128&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fxsnfuqrdelvpgkzysxas.supabase.co%2Fstorage%2Fv1%2Fobject%2Fsign%2Favatars%2Fblank_profile.png%3Ftoken%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2JsYW5rX3Byb2ZpbGUucG5nIiwiaWF0IjoxNjY0NDI2ODQwLCJleHAiOjE5Nzk3ODY4NDB9.IzptB75wjoIeEk-7F07EMECn9FutDuIuokG2WxbFsdw&amp;w=256&amp;q=75 2x"
                          />
                          <noscript></noscript>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" bis_skin_checked="1">
                <div
                  className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                  bis_skin_checked="1"
                >
                  <div className="sm:col-span-3" bis_skin_checked="1">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1" bis_skin_checked="1">
                      <input
                        type="text"
                        id="first-name"
                        name="first_name"
                        disabled=""
                        placeholder="Enter First Name"
                        autocomplete="given-name"
                        className="input input-bordered block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input input-bordered"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3" bis_skin_checked="1">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1" bis_skin_checked="1">
                      <input
                        type="text"
                        name="last_name"
                        disabled=""
                        placeholder="Enter Last Name"
                        id="last-name"
                        autocomplete="family-name"
                        className="input input-bordered block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3" bis_skin_checked="1">
                    <label
                      for="job-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <div className="mt-1" bis_skin_checked="1">
                      <input
                        id="title"
                        name="job_title"
                        disabled=""
                        type="text"
                        placeholder="Enter Your Job Title"
                        autocomplete="job-title"
                        className="input input-bordered block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6" bis_skin_checked="1">
                    <label
                      for="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LinkedIn Profile
                    </label>
                    <div
                      className="mt-1 flex rounded-md shadow-sm"
                      bis_skin_checked="1"
                    >
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                        https://
                      </span>
                      <input
                        type="text"
                        name="linkedIn_url"
                        id="username"
                        disabled=""
                        autocomplete="username"
                        placeholder="www.example.com"
                        className="input input-bordered block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6" bis_skin_checked="1">
                    <label
                      for="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <div className="mt-1" bis_skin_checked="1">
                      <textarea
                        type="text"
                        name="bio"
                        disabled=""
                        id="street-address"
                        placeholder="Enter Your Bio"
                        autocomplete="street-address"
                        className="textarea textarea-bordered textarea-lg w-full  block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief desciption for your profile. URL's are hyperlinked.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
