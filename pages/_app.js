import Layout from "@containers/Layout/Layout"
import '@styles/Global.css'
export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}