import React from "react";

const Code = () => {
  return (
    <div className="rounded-md  flex flex-col gap-4 p-2">
      <div className="text-slate-300 text-xs bg-gray-800 max-w-[800px] max-h-[300px] p-6 overflow-scroll">
        <pre>
          <code>
            {`
 <div className="flex flex-col gap-4  max-h-full ">
      <div className="grid grid-cols-2 md:flex lg:flex-row gap-6">
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 hover:font-bold hover:bg-gray-700"
        >
          Basic
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded border-white text-white hover:font-bold"
        >
          Border
        </button>
        <div className="inline-flex items-center divide-x rounded bg-violet-600 text-gray-100 divide-gray-300 hover:font-bold">
          <button type="button" className="px-8 py-3">
            Caret
          </button>
          <button type="button" title="Toggle dropdown" className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>{" "}
        </div>
        <button
          type="button"
          className="relative px-8 py-3 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-gray-50 hover:font-bold hover:bg-gray-700"
        >
          With banner
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600">
            New
          </span>
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-900 hover:font-bold hover:text-gray-50 hover:bg-gray-700"
        >
          Rounded
        </button>
      </div>{" "}
      <div className="grid grid-cols-2 md:flex md:flex-row gap-6">
        <button
          type="button"
          className=" rounded bg-destructive px-8 py-3   font-semibold   text-white shadow-primary transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-primary-2 hover:text-gray-900 "
        >
          Alert
        </button>
        <button
          type="button"
          className=" rounded bg-green-500 px-8 py-3  font-semibold text-white shadow-primary transition duration-150 ease-in-out hover:bg-green-400 hover:shadow-primary-2 hover:text-gray-900 "
        >
          Success
        </button>
        <button
          type="button"
          className=" rounded bg-orange-500 px-8 py-3  font-semibold text-white shadow-primary transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-primary-2 hover:text-gray-900 "
        >
          Warning
        </button>
        <button
          type="button"
          className=" rounded bg-blue-400 px-8 py-3  font-semibold text-white shadow-primary transition duration-150 ease-in-out hover:bg-blue-300 hover:shadow-primary-2 hover:text-gray-900 "
        >
          Info
        </button>
        <button
          type="button"
          className=" rounded bg-yellow-400 px-8 py-3  font-semibold text-white shadow-primary transition duration-150 ease-in-out hover:bg-yellow-300 hover:shadow-primary-2 hover:text-gray-900 "
        >
          Danger
        </button>
        <button
  type="button"
  className="inline-block rounded border border-fuchsia-500 px-6 pb-2 pt-2.5 font-semibold leading-normal text-fuchsia-500 shadow-primary-3 transition duration-150 ease-in-out hover:bg-fuchsia-400 hover:shadow-primary-2 hover:text-gray-900 ">
  Lovely
</button>
      </div>
    </div>
      `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
