import React, { useState, useEffect } from 'react'

const useAvoShop = () => {
    const [productList, setProductList] = useState([]);
    const [cart, setCart] = useState({});

    const calculateCountItems = () => {
        let count = 0;
        Object.entries(cart)?.forEach((element) => {
            count += element[1].length;
        });
        return count;
    };
    return {
        productList,
        cart,
        setProductList,
        setCart,
        calculateCountItems
    }
}

export default useAvoShop