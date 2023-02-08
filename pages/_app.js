import Layout from "@containers/Layout/Layout"
import '@styles/Global.css'
import { AvoContext } from '@context/AvoContext'
import useAvoShop from "@hooks/useAvoShop"
export default function MyApp({ Component, pageProps }) {
    const { productList,
        cart,
        setProductList,
        setCart,
        calculateCountItems } = useAvoShop();
    return <AvoContext.Provider value={{
        productList,
        cart,
        setProductList,
        setCart,
        calculateCountItems
    }}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </AvoContext.Provider>

}