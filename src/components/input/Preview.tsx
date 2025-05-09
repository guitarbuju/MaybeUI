import React from "react";

const Preview = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
      <fieldset className="flex flex-col  w-full space-y-1  rounded-lg p-4 bg-gray-900">
        <label
          htmlFor="url"
          className="block text-sm font-semibold text-gray-50"
        >
          Website
        </label>
        <div className="flex">
          <span className="flex items-center px-3 pointer-events-none sm:text-sm bg-gray-500 text-gray-50 rounded-l-lg">
            https://
          </span>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="www.maybe.com"
            className="flex flex-1 border p-2 sm:text-sm rounded-r-lg focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
      <fieldset className="w-full space-y-1 bg-gray-900 p-4 rounded-lg">
        <label
          htmlFor="price"
          className="block text-sm text-gray-50 font-semibold"
        >
          Total price
        </label>
        <div className="flex ">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="99 999,99"
            className="flex flex-1 p-2 text-right border sm:text-sm rounded-l-lg focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
          <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-500">
            €
          </span>
        </div>
      </fieldset>
      <fieldset className="w-full space-y-1 ">
        <label
          htmlFor="files"
          className="block text-sm font-semibold text-gray-50 "
        >
          Attachments
        </label>
        <div className="flex">
          <input
            type="file"
            name="files"
            id="files"
            className="px-4 py-6  w-[95%] md:w-full border-2 border-dashed rounded-md dark:border-gray-300 text-gray-50 dark:bg-gray-100"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col items-center justify-center w-full space-y-1  rounded-lg p-4 bg-gray-900">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="flex items-center p-1 bg-gray-100 h-8 w-8 rounded-full focus:outline-none focus:ring hover:bg-gray-300"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Preview;
