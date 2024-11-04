import React from 'react'

const Preview = () => {
  return (
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
  )
}

export default Preview