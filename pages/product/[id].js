import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useRouter();
    const getProductById = async (id) => {
        setLoading(true);
        const res = await fetch(`/api/avo/${id}`);
        const data = await res.json();
        setProductData(data);
        setLoading(false);
    }

    useEffect(() => {
        if (params.query.id) {
            getProductById(params.query.id);
            return;
        }
    }, [params.query.id])
    return (
        <div>
            <h1>mostrando producto con id {params?.query?.id}</h1>
            {loading && <p>LOADING</p>}
            {Object.keys(productData).length > 0 && <>
                <h2>{productData.name}</h2>
                <p>{productData.price}</p>
                <img src={productData.image} />
                <p>{productData.attributes?.description}</p>
            </>}
        </div>
    )
}

export default ProductItem