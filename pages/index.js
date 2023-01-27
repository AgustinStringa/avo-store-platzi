import React, { useEffect, useState } from 'react'


export const Home = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        try {
            const res = await fetch('api/avo/')
            const { data } = await res.json();
            setProductList(data);
        } catch (error) {
            setProductList([]);
        }
    }
    useEffect(() => {
        getProducts();
    }, [])


    return (<>
        <style jsx>{`
        .container {
            background-color: hotpink;
            padding: 48px;
        }
        `}</style>
        <div className='container'>Home</div>
    </>
    )
}

export default Home