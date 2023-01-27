import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
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
    console.log(productData);
    useEffect(() => {
        if (params.query.id) {
            getProductById(params.query.id);
            return;
        }
    }, [params.query.id])
    return (
        <section>
            {loading && <p>LOADING</p>}
            {Object.keys(productData).length > 0 && <>

                <div>

                    <h1 className='product-name'>{productData.name}</h1>
                    <p className='product-price'>{productData.price}</p>
                    <p className='product-sku'>{productData.sku}</p>
                    <Image src={productData.image} width={333} height={333} />

                    <form>
                        <input type="number" min={0} defaultValue={0} />
                        <button type="button">Add to cart</button>
                    </form>
                </div>
                <div>
                    <p>About this avocado</p>
                    <p>{productData.attributes.description}</p>
                    <hr />
                    <table>
                        <tr>
                            <th>Attributes</th>
                        </tr>
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
                    </table>

                </div>
            </>}
        </section>
    )
}

export default ProductItem