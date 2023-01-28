import React from 'react'

const EmptyCart = () => {
    return (
        <>
            <style jsx>{`
            .alert-empty-cart {
                background-color: #fffaf3;
                color: #573a08;
                padding: 1rem;
                box-shadow: inset 0 0 0 1px #c9ba9b, 0 0 0 0 transparent;
                margin: 2rem 0;
                border-radius: .5rem;
            }
            .alert-empty-cart__title {
                font-weight: bold;
                font-size: 1.2rem;
            }
        `}</style>
            <div className='alert-empty-cart'>
                <p className='alert-empty-cart__title'>Your cart is empty</p>
                <p className='alert-empty-cart__text'>You will need to add some items to the cart before you can checkout.</p>
            </div>

        </>
    )
}

export default EmptyCart