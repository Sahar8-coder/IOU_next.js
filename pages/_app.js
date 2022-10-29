//import '../styles/globals.css'
import Script from 'next/script'
import '../styles/style.css'
import '../styles/normalize.css'
    

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
  <Component {...pageProps} />
  </>)
}

export default MyApp
