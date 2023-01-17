import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar/Navbar';
const ProductItem = () => {
    const params = useRouter();
    return (
        <div>
            <Navbar />
            <h1>mostrando producto con id {params?.query?.id}</h1>
        </div>
    )
}

export default ProductItem