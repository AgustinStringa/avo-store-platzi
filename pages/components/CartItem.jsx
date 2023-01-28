import React from 'react'
import Image from 'next/image'
const CartItem = () => {
    return (
        <div>
            {/* <Image /> */}
            <div className="cart-item-content">
                <h3 className='item-name'></h3>
                <p className="item-count">{"cantidad"}x{"precio"}</p>
                <p>Some more information goes here....</p>
            </div>
            <button>x</button>
        </div>
    )
}

export default CartItem