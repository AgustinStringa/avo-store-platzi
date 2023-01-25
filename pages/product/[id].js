import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar/Navbar';
const ProductItem = () => {
    const [productData, setProductData] = useState({});
    const params = useRouter();
    const getProductById = async (id) => {
        const res = await fetch(`/api/avo/${id}`);
        const data = await res.json();
        setProductData(data);
    }

    useEffect(() => {
        if (params.query.id) {
            getProductById(params.query.id);
            return;
        }
    }, [params.query.id])
    return (
        <div>
            <Navbar />
            <h1>mostrando producto con id {params?.query?.id}</h1>
            <h2>{productData.name}</h2>
            <p>{productData.price}</p>
            <img src={productData.image} />
            <p>{productData.attributes?.description}</p>
        </div>
    )
}

export default ProductItem