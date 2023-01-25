import React from 'react'
import Link from 'next/link'
const Navbar = () => {

    return (
        <nav>
            <Link href='/about' >About</Link>
            <Link href='/' >Home</Link>
        </nav>
    )
}

export default Navbar