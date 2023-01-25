import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';

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
        <Navbar />
        <div>Home</div>
    </>
    )
}

export default Home