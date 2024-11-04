import React from "react";

const Code = () => {
  return (
    <div className="rounded-md  flex flex-col gap-4 p-2">
      <div className="text-slate-300 text-xs bg-gray-800 max-w-[800px] max-h-[300px] p-6 overflow-scroll">
        <pre>
          <code>
            {`
 <div className="w-[320px] md:w-[600px] lg:w-[800px] xl:w-[1000px] flex flex-wrap mx-auto container justify-center  md:justify-between py-2 md-w-full  bg-violet-600 text-gray-900">
	<div className="container mx-auto w-full">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" />50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">MAYBE</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Shop Now</a>
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
