import Layout from "@containers/Layout/Layout"
export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}