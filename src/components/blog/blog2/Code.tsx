import React from "react";

const Code = () => {
  return (
    <div className="rounded-md  flex flex-col gap-4 p-2">
      <div className="text-slate-300 text-xs bg-gray-800 max-w-[800px] max-h-[300px] p-6 overflow-scroll">
        <pre>
          <code>
            {`
  <div className=" flex flex-col w-2/4 max-w-2xl rounded-lg p-6 divide-y lg:w-full xl:flex-row xl:divide-y-0 xl:divide-x bg-gray-800 text-gray-50 divide-gray-300">
	<div className="p-3 space-y-1">
		<h3 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h3>
		<p className="text-sm dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus repellat incidunt odit eligendi mollitia quaerat autem nobis fugiat natus?</p>
	</div>
	<div className="flex items-center gap-3 p-3">
		<Image alt="" src={World} className="object-cover w-12 h-12 bg-white rounded-full shadow" />
		<div className="space-y-1">
			<span className="text-xs">April 03, 2021</span>
			<div className="flex flex-wrap gap-3">
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-600 text-gray-50">javascript</a>
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-600 text-gray-50">serverless</a>
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-600 text-gray-50">aws</a>
			</div>
		</div>
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
