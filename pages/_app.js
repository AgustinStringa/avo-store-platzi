import Layout from "./Containers/Layout/Layout"
export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}