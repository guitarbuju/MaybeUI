import React from 'react'

const Code = () => {
  return (
    <div className="rounded-md  flex flex-col gap-4 p-2">
     
    <div className="text-slate-300 text-xs bg-gray-800 max-w-[800px] max-h-[300px] p-6 overflow-scroll">
      <pre>
        <code>
          {`
<section className="py-4 bg-gray-400 rounded-lg">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<Image width={200} height={200} className="object-cover w-full rounded-lg dark:bg-gray-500 aspect-square" alt='' src="https://images.unsplash.com/photo-1597233709017-e4a73325d37b" />
			<Image width={200} height={200} className="object-cover w-full rounded-lg dark:bg-gray-500 aspect-square" alt='' src="https://images.unsplash.com/photo-1599589312087-9aaa2d6e37d3" />
			<Image width={200} height={200} className="object-cover w-full rounded-lg dark:bg-gray-500 aspect-square" alt='' src="https://images.unsplash.com/photo-1526080652727-5b77f74eacd2" />
			<Image width={200} height={200} className="object-cover w-full rounded-lg dark:bg-gray-500 aspect-square" alt='' src="https://images.unsplash.com/photo-1723408020169-9ed1e5eac4d3" />
		</div>
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