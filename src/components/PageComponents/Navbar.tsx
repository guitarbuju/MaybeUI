import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around  align-middle gap-2 text-slate-800 font-semibold mt-3'>
        <Link href="/" className='hover:underline hover:font-bold hover:text-white'>home</Link>
        <Link href="/sections/about" className='hover:underline hover:font-bold hover:text-white'>about</Link>
        <Link href="/sections/docs" className='hover:underline hover:font-bold hover:text-white'>documentation</Link>
    </div>
  )
}

export default Navbar