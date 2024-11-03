import Image from 'next/image'
import React from 'react'

const Preview = () => {
  return (
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
  )
}

export default Preview