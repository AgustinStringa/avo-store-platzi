import React from 'react'

const CartList = ({ children }) => {
    return (
        <>
            <style jsx>{`
            .list-cart-item {
                padding: 2rem 0;
            }
        `}</style>
            <div className='list-cart-item'>{children}</div>
        </>
    )
}

export default CartList