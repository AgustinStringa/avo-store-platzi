import React, { useState, useEffect } from 'react'

const useAvoShop = () => {
    const [productList, setProductList] = useState([]);
    const [cart, setCart] = useState({});


    return {
        productList,
        cart,
        setProductList,
        setCart
    }
}

export default useAvoShop