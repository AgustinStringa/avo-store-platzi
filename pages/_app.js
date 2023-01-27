import Layout from "@containers/Layout/Layout"
import '@styles/Global.css'
import { AvoContext } from '@context/AvoContext'
import useAvoShop from "@hooks/useAvoShop"
export default function MyApp({ Component, pageProps }) {
    const { productList,
        cart,
        setProductList,
        setCart } = useAvoShop();
    return <Layout>
        <AvoContext.Provider value={{
            productList,
            cart,
            setProductList,
            setCart
        }}>
            <Component {...pageProps} />
        </AvoContext.Provider>
    </Layout>
}