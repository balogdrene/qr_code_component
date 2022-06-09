import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QR code component</title>
        <meta
          name="description"
          content="A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet."
        />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
