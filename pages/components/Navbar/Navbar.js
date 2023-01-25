import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    const fetching = async () => {
        const res = await fetch('api/avo/')
        const data = await res.json();
        console.log(data);
    }
    fetching();
    return (
        <nav>
            <Link href='/about' >About</Link>
            <Link href='/' >Home</Link>
        </nav>
    )
}

export default Navbar