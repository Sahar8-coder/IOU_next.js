import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Home() {

    const config = {
        "fast-preview": {
          disabled: true
        },
        tex2jax: {
          inlineMath: [
            ["\\(", "\\)"],
            ["\(", "\)"]
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
          ]
        },
        messageStyle: "none"
  };
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const size = useWindowSize()
  const document = (
  <div>
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Квадратные Уравнения</title>
    </Head>
<header className="header">
            <nav className="header-nav">
                <ul className="header-menu">
                    <li className="header-menu-item"><Link href="/" className="header-menu-link"><img src="/logo.svg" alt="" className="logo"/><MathJax inline>{'\\(\\sf{ax^2 + bx + c = 0}\\)'}</MathJax></Link></li>
                </ul>
            </nav>
</header>
        <main className="main">
            <div className="content_main">
                <section className="main-flex-1">
                    <h2 className="main-header types-header">Квадратные уравнения</h2>
                    <p className="main-text types-text">
                        Решить квадратное уравнение - это значит найти
                    все его корни или доказать, что их нет.</p>
                    <Link className="small-btn" href='/site/theory'>
                        <p className="menu-text small-btn-text">Читать больше</p>
                    </Link>
                </section>
                <section className="main-flex-2">
                    <Link className="left_top type_5 type-main main_bac_1" href='/site/theory'>
                        <div className="type-main-name-div">
                            <h4 className="type-main-name">Теория</h4>
                        </div>
                        <div className="type-main-text-div">
                            <p className="type-text">Все, что необходимо знать перед решением квадратных уравнений</p>
                        </div>
                    </Link>
                    <Link className="right_top type_4 type-main main_bac_2" href='/site/practice'>
                        <div className="type-main-name-div">
                            <h4 className="type-main-name">Практикум</h4>
                        </div>                    
                        <div className="type-main-text-div">
                            <p className="type-text">Проверь себя!</p>
                        </div>
                    </Link>
                    <Link className="left_down type_1 type-main main_bac_3" href='/sposobi'>
                        <div className="type-main-name-div">
                            <h4 className="type-main-name">Методы</h4>
                        </div>
                        <div className="type-main-text-div">
                            <p className="type-text">Способы решения квадратных уровнений</p>
                        </div>
                    </Link>
                    <Link className="right_down type_3 type-main main_bac_4" href='/help'>
                        <div className="type-main-name-div">
                            <h4 className="type-main-name">Помощь</h4>
                        </div>
                        <div className="type-main-text-div">
                            <p className="type-text">При возникновении трудностей</p>
                        </div>
                    </Link>
                </section>
            </div>
          </main>    
          </MathJaxContext>
          <footer className='footer'>{'©МОУ "Дубоссарская гимназия №1"'}</footer>
          </div>)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('1')
            setEmail('2')
            setMessage('3')
        }
    })
  }

  return (document)
}
// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }