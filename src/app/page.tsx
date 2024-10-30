import Image from "next/image";
import Business from "../../public/rb_2688.png"

export default function Home() {
  return (
  <>
   <section className="rounded-lg bg-gray-800 text-zinc-100  dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center w-full  p-6 ">
			<Image src={Business} alt="" className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-6xl">Welcome to 
				<span className="text-violet-600 mr-1">MaybeUI Your EZ Components</span>Library
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">for React Js App
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
			</div>
		</div>
	</div>
</section>
  </>
  );
}
