import React from "react";

function page() {
  return (
    <div className=" text-gray-50 p-4 w-3/4">
      <h1 className="text-2xl  mb-4 text-violet-400 font-bold underline">
        Docs:
      </h1>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-violet-400 underline font-semibold">Overview:</h1>
        <p>
          MAYBEUI is a straightforward application designed to provide
          ready-to-use, customizable UI components for developers working with
          Next.js, Tailwind CSS, ShadCN, and Mamba UI. Each component is wrapped
          in a ShadCN Tabs component, allowing users to easily toggle between a
          live preview of the component and the underlying code, which can be
          copied and adapted as needed.
        </p>
        <h1 className="text-xl text-violet-400 underline font-semibold">Features:</h1>
        <ul className="list-disc">
          <li>
            {" "}
            <p>
              Preview & Copy Code: Each UI component is displayed within a
              ShadCN Tabs component. The tabs let users switch seamlessly
              between the Preview tab to see the component in action, and the
              Code tab, where users can view, select, and copy the code to
              customize and integrate into their own projects.{" "}
            </p>
          </li>
          <li>
            <p>
              Responsive Sidebar Navigation: Desktop View: The app features a
              sidebar with a navbar that includes links to each component
              category, enabling easy access to various UI elements.
            </p>
          </li>
          <li>
            <p>
              Mobile & Small Screens: On mobile and smaller screens, the sidebar
              transforms into a top bar, ensuring a responsive and accessible
              navigation experience.
            </p>
          </li>
        </ul>
        <h1 className="text-xl text-violet-400 underline font-semibold">Tech Stacks:</h1>
        <ul className="list-disc">
          <li>
            {" "}
            <p>
              Next.js: The foundation of the app, providing server-side
              rendering, routing, and fast performance.{" "}
            </p>
          </li>
          <li>
            <p>
              Tailwind CSS: Used for rapid and efficient styling, giving the app
              a consistent and customizable look and feel.
            </p>
          </li>
          <li>
            <p>
              ShadCN: Implements the tabs for each component, providing a simple
              and user-friendly way to view and copy component code.
            </p>
          </li>
          <li>
            <p>
              Mamba UI: Supplies the base styles and structure for various
              components, ensuring they are easy to integrate and visually
              appealing.
            </p>
          </li>
        </ul>
        <h1 className="text-xl text-violet-400 underline font-semibold">Usage:</h1>
        <ol className="list-disc">
          <li>
            {" "}
            <p>
              Browsing Components: Navigate through the sidebar (or top bar on
              smaller screens) to access different UI components.
            </p>
          </li>
          <li>
            <p>
              Preview & Code Tabs: Click on any component to open its dedicated
              tab view, where you can toggle between the Preview and Code tabs.
            </p>
          </li>
          <li>
            <p>
              Copying Code: In the Code tab, simply select and copy the code
              snippet to use and customize within your own project.
            </p>
          </li>
        </ol>
        <h1 className="text-xl text-violet-400 underline font-semibold">Responsive Design:</h1>
        <ol className="list-disc">
          <li>
            {" "}
            <p>
              The app's sidebar navigation automatically adapts to the screen
              size, making it accessible on both desktop and mobile devices.
            </p>
          </li>
          <li>
            <p>On desktops, the sidebar displays on the left of the screen.</p>
          </li>
          <li>
            <p>
              On mobile devices or narrow screens, the sidebar converts into a
              top bar, maintaining navigation functionality and keeping the UI
              compact.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default page;
