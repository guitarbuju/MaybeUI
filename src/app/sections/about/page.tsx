import React from "react";

const Page = () => {
  return (
    <div className="md:-mt-32 flex flex-col gap-4">
      <div className="p-6 py-12 bg-violet-600 text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              EASY TO USE
              <br className="sm:hidden" />
            <span className="text-violet-400 pl-2 text-8xl">NOW!!</span> 
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>No questions asked:</span>
              <span className="font-bold text-lg">MAYBEUI</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              HOME
            </a>
          </div>
        </div>
      </div>
      <div className=" text-gray-50 p-4 w-3/4">
        <h1 className="text-2xl  mb-4 text-violet-600 font-bold underline">About MAYBEUI:</h1>
        <div className="flex flex-col gap-4">
          <p>
            Welcome to MAYBEUI, the ultimate free resource for beautifully
            designed, copy-paste UI components built for React and styled with
            Tailwind CSS. MAYBEUI is here to help you streamline your
            development process with a range of pre-made components that are
            easy to use, integrate, and customize—no signup, no questions asked.
          </p>
          <p>
            Our library offers a wide selection of components to suit any
            project need, from buttons, forms, and login pages to headers,
            footers, avatars, cards, breadcrumbs, and much more. Whether you’re
            creating a simple website or a complex web app, MAYBEUI has you
            covered with clean, responsive, and accessible designs.
          </p>
          <p>
            Built with a focus on simplicity and speed, MAYBEUI components can
            be added to your project with a simple copy and paste. Each
            component leverages the power of React and Tailwind CSS, allowing
            you to further customize styles and functionality to match your
            unique brand and vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
