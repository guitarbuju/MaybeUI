import React from "react";

const Breadcrumb = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4 p-2">
      <div className="text-slate-300 text-xs bg-gray-800 max-w-5xl max-h-[300px] p-6 overflow-scroll">
        <pre>
          <code>
            {`
 <div className="flex flex-col items-center justify-center">
	<div className="flex -space-x-4">
		<img  alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
		<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" />
		<img  alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
		<img  alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" />
		<span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-gray-50 dark:text-gray-800 dark:border-gray-300">+3</span>
	</div>
</div>
      `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Breadcrumb;
