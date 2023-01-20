import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Practice() {

const config = {
        "fast-preview": {
          disabled: true
        },
        tex2jax: {
          inlineMath: [
            ["\\(", "\\)"]
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

  return (
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
                    <li className="header-menu-item"><Link href="/" className="header-menu-link"><MathJax inline>{'\\(\\sf{ax^2 + bx + c = 0}\\)'}</MathJax></Link></li>
                </ul>
            </nav>
</header>
        <main className="main">
            <div className="content">
            <section className="types-header-sect">
                <h2 className="types-header">Практика квадратных уравнений</h2>
            </section>
            <section className="types">
                <Link className="type-prac type_2 left_top" href='/site/practice_bi'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Биквадратные уравнения</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice_ege'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Простейшие задания из ЕГЭ</h4>
                    </div>                    
                </Link>
                <Link className="type-prac type_4" href='/site/practice_rad'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Квадратные уравнения имеющие корни с радикалами</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice_one'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Квадратные уравнения с одним корнем</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2 right_top" href='/site/practice_perebros'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Метод переброски</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4 left_down" href='/site/practice_notfull'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Неполные квадратные уравнения</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice_full'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Полные квадратные уравнения</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2" href='/site/practice_mnos'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Разложение на множители</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice_viet'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Теорема Виета</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4 right_down" href='/site/practice_chastn'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Частные случаи</h4>
                    </div>
                </Link>
            </section>
            </div>
          </main>
          </MathJaxContext>
          </div>
  )
}