import Image from "next/image";
import Business from "../../public/rb_2688.png"
import ReactILogo from "../../public/react.png"
import TailwindLogo from "../../public/tailwindWhite.png"

export default function Home() {
  return (
  <>
   <section className="rounded-lg md:-mt-40 max-w-[1000px]  bg-gray-800 text-zinc-100  dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center items-center lg:flex-row lg:justify-around">
		<div className="flex items-center justify-center  ">
			<Image src={Business} alt="" className="object-contain w-72 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-6xl">Welcome to 
				<span className="text-violet-600 mr-1">MaybeUI Your EZ Components</span>Library
			</h1>
			<p className="text-xl mt-6 mb-8  sm:mb-12">free easy to use Tailwind Css  components for React, Next Js Apps..
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="https://react.dev/" className=" flex justify-around align-middle px-8 py-3 text-lg font-semibold border rounded dark:bg-violet-600 dark:text-gray-50">React Js
        <Image src={ReactILogo} alt='' width={40}/>
        </a>
				<a rel="noopener noreferrer" href="https://tailwindcss.com/" className="flex justify-around align-middle px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Tailwind Css
        <Image src={TailwindLogo} alt='' width={40}/>
        </a>
			</div>
		</div>
	</div>
</section>
  </>
  );
}
