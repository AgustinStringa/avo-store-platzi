import React, { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { AvoContext } from '@context/AvoContext';
import LoaderPage from '@components/LoaderPage';
import { BsFillCartPlusFill, BsCheckLg } from 'react-icons/bs'
const ProductItem = () => {
    const { cart, setCart } = useContext(AvoContext);
    const [productData, setProductData] = useState({});
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSuccessAdd, setShowSuccessAdd] = useState(false);
    const params = useRouter();
    const countProductRef = useRef(null);
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


    const addToCart = () => {
        setAdding(true);
        const newElements = [];
        for (let i = 0; i < countProductRef.current.value; i++) {
            newElements.push(productData);
        }
        let newContent = [];
        if (cart[productData.id]) {
            newContent = [...cart[productData.id], ...newElements]
        } else {
            newContent = [...newElements]
        }
        setCart({
            ...cart,
            [productData.id]: newContent,
        });
        setTimeout(() => {
            setAdding(false);
            setShowSuccessAdd(true);
            setTimeout(() => {
                setShowSuccessAdd(false);
            }, 3000)
        }, 2000)
    }
    return (
        <section className='pld'>
            <style jsx>{`
                .pld {
                    margin: 2rem 0;
                }
                .product-detail {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                @media (min-width: 769) {
                    .product-detail {
                    flex-direction: column;
                }
                }
                .product-detail > div {
                    padding-left: 4rem;
                    align-self: baseline;
                    padding-top: 4rem;
                }
                .product-name {
                    font-weight: bold;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
                .product-price {
                    font-size: 1rem;
                    margin-bottom: .5rem;
                }
                .product-sku {
                    padding: .7rem .5rem;
                    font-size: .7rem;
                    background-color: #e8e8e8;
                    color: rgba(0,0,0,.6);
                    display: inline-block;
                    border-radius: .4rem;
                    line-height: 0.5;
                    margin-bottom: .5rem;
                }
                .form-cart {
                    display: flex;
                    justify-content: start;
                    width: auto;
                    height: 50px;
                }
                .form-cart input {
                    padding: .5rem .5rem .5rem .8rem;
                    border-top-left-radius: .5rem;
                    border-bottom-left-radius: .5rem;
                    border: 1px solid #c1c1c1;
                    transition: all .2s ease-in-out;
                }
                .form-cart input:active,
                .form-cart input:focus,
                .form-cart input:hover {
                    outline: none;
                    border: 1px solid var(--color-link);
                }
                .addto-cart-button {
                    transition: all .2s ease-in-out;
                    padding: .8rem 1rem;
                    color: #fff;
                    background-color: #21ba45;
                    outline: none;
                    border: 1px solid #c1c1c1;
                    border-top-right-radius: .5rem;
                    border-bottom-right-radius: .5rem;
                    font-weight: bold;
                    width: 150px;
                }
                .addto-cart-button:hover {
                    background-color: #16ab39;
                }
                .addto-cart-button:disabled {
                    background-color: #9be0ab;
                }
                .addto-cart-button span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }
                .success-alert {
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    margin: 1rem 0;
                    color: #21ba45;
                    gap: .5rem;
                    transition: all .3s ease-in-out;
                    animation: fadeOut 3s ease-in-out forwards;
                }
                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                    }
                }
                /**SPINNER LOADER */
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
                .spinner {
                    border: 4px solid rgba(0, 0, 0, .1);
                    /* border-color: white; */
                    border-left-color: transparent;
                    border-left-color: white;
                    width: 25px;
                    height: 25px;
                    animation: spin 1s linear infinite;
                    border-radius: 50%;
                    margin: 0 auto;
                }

                /**PRODUCT DESCRIPTION */
                .product-description-container h2 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin: 1rem 0;
                }
                .product-description-container__text {
                    margin: 1rem 0 2rem 0;
                }
                .divider {
                    border: none;
                    border-top: .5px solid #c1c1c1;
                }
                .table-attributes  {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 1rem 0;
                    border: 1px solid rgba(34,36,38,.15);
                }
                .table-attributes tr * {
                    padding: 1rem;
                }
                .table-attributes th {
                    background-color: #f9fafb;
                    text-align: left;
                }
                td {
                    border: 1px solid rgba(34,36,38,.15);
                }
            `}</style>
            {loading && <LoaderPage />}
            {Object.keys(productData).length > 0 && <>
                <div className='product-detail'>
                    <Image src={productData.image} width={333} height={333} />
                    <div>
                        <h1 className='product-name'>{productData.name}</h1>
                        <p className='product-price'>{productData.price}</p>
                        <p className='product-sku'>SKU: {productData.sku}</p>
                        <form className='form-cart'>
                            <input type="number" min={0} defaultValue={0} ref={countProductRef} />
                            <button type="button" className='addto-cart-button'
                                disabled={adding}
                                onClick={addToCart}>
                                {!adding ? <span> <BsFillCartPlusFill /> Add to cart</span> : <div className='spinner'></div>}
                            </button>
                        </form>
                        {showSuccessAdd && <p className='success-alert'> <BsCheckLg /> <span>Added To Cart</span></p>}
                    </div>

                </div>
                <div className='product-description-container'>
                    <h2>About this avocado</h2>
                    <p className='product-description-container__text'>{productData.attributes.description}</p>
                    <hr className='divider' />
                    <table className='table-attributes'>
                        <thead>
                            <tr>
                                <th colSpan={2}>Attributes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shape</td>
                                <td>{productData.attributes.shape}</td>
                            </tr>
                            <tr>
                                <td>Hardiness</td>
                                <td>{productData.attributes.hardiness}</td>
                            </tr>
                            <tr>
                                <td>Taste</td>
                                <td>{productData.attributes.taste}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </>}
        </section>
    )
}

export default ProductItem