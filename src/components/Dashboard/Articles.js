import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";

export default function Articles() {
  return (
    <div>
      <div class="py-6" bis_skin_checked="1">
        <div
          class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
          bis_skin_checked="1"
        >
          <div
            class=" border border-indigo-500 px-3 py-5 my-10 rounded-lg shadow-xl"
            bis_skin_checked="1"
          >
            <h3 class="text-3xl font-black mb-5 text-gray-700">
              Welcome to
              <span class="text-indigo-500 inline-block">
                Dynamic Business Portal
              </span>
            </h3>
            <div class="text-lg text-justify px-1" bis_skin_checked="1">
              <ul class=" mx-5 list-disc">
                <li>
                  You can submit your content and commentary via the Submit
                  Story link.
                </li>
                <li>
                  We have dozens of useful guides to help you run your business
                  in the Business Resources link.
                </li>
                <li>You can browse our media kit in the Advertising link.</li>
              </ul>
            </div>
          </div>
          <div class="" bis_skin_checked="1">
            <div
              class="sm:flex sm:items-center flex justify-center bg-indigo-100 text-center rounded-lg shadow-sm"
              bis_skin_checked="1"
            >
              <h1 class="text-xl font-semibold text-gray-900 font-sans p-3 text-center">
                Articles{" "}
              </h1>
              <div
                class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"
                bis_skin_checked="1"
              ></div>
            </div>
            <div class="mt-8 flex flex-col " bis_skin_checked="1">
              <div
                class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
                bis_skin_checked="1"
              >
                <div
                  class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
                  bis_skin_checked="1"
                >
                  <div
                    class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                    bis_skin_checked="1"
                  >
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            submitted by
                          </th>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            submitted for
                          </th>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Submission Category
                          </th>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            class="px-3 text-center py-3.5 text-sm font-semibold text-gray-900"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white">
                        <tr>
                          <td colspan="6" class=" h-60 w-full">
                            <h3 class="text-center text-2xl text-gray-500 font-semibold">
                              No data found :
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
