import React from 'react'

const Code = () => {
  return (
    <div className="rounded-md  flex flex-col gap-4 p-2">
     
    <div className="text-slate-300 text-xs bg-gray-800 max-w-[800px] max-h-[300px] p-6 overflow-scroll">
      <pre>
        <code>
          {`
<section className="py-6 bg-gray-900 text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt='' className=" rounded-lg w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1597233709017-e4a73325d37b" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }}alt="" className=" rounded-lg w-full h-full   shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1600481176431-47ad2ab2745d" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1599589312087-9aaa2d6e37d3" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1549351236-caca0f174515" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1526080652727-5b77f74eacd2" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1526928648912-6b2ac1cc14d7" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1723408020169-9ed1e5eac4d3" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt="" className=" rounded-lg w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1729442666078-7521fc6bfa84" />
		<Image width={200} height={200}   style={{ objectFit: 'cover' }} alt ="" src="https://images.unsplash.com/photo-1729148387931-6d8ac1cf15aa" className=" rounded-lg w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
	</div>
</section>
      `}
        </code>
      </pre>
    </div>
  </div>
  )
}

export default Code