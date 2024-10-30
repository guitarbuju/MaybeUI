import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around  align-middle gap-2 text-slate-800 font-semibold mt-3'>
        <Link href="/">home</Link>
        <Link href="#">about</Link>
        <Link href="#">components</Link>
        <Link href="#">documentation</Link>
    </div>
  )
}

export default Navbar