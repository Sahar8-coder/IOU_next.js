import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Sposobi() {

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
                   <li className="header-menu-item"><Link href="/" className="header-menu-link"><img src="/logo.svg" alt="" className="logo"/><MathJax inline>{'\\(\\sf{ax^2 + bx + c = 0}\\)'}</MathJax></Link></li>
                </ul>
            </nav>
</header>
    <main className="main">
        <div className="content">
            <section className="types-header-sect">
                <h2 className="types-header">Способы решения квадратных уравнений</h2>
            </section>
            <section className="types">
                <Link className="type type_2 left_top" href='/site/mnos'>
                    <div className="type-name-div">
                        <h4 className="type-name">Разложение левой части уравнения на множители</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Вынесение множителя за скобки</p>
                    </div>
                </Link>
                <Link className="type type_3" href='/site/videl'>
                    <div className="type-name-div">
                        <h4 className="type-name">Метод выделения полного квадрата</h4>
                    </div>                    
                    <div className="type-text-div">
                        <p className="type-text">Помогут формулы сокращенного умножения, и не только...</p>
                    </div>
                </Link>
                <Link className="type type_4" href='/site/formulas'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений по формулам</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Старый добрый Дискриминант</p>
                    </div>
                </Link>
                <Link className="type type_1" href='/site/viet'>
                    <div className="type-name-div">
                        <h4 className="type-name">Теорема Виета</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Легкий и понятный способ, при наличии целых корней</p>
                    </div>
                </Link>
                <Link className="type type_2 right_top" href='/site/perebros'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений способом «переброски»</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Скрытая теорема Виета</p>
                    </div>
                </Link>
                <Link className="type type_4 left_down" href='/site/chastn'>
                    <div className="type-name-div">
                        <h4 className="type-name">Частные случаи</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Закономерность коэффициентов</p>
                    </div>
                </Link>
                <Link className="type type_1" href='/site/graph'>
                    <div className="type-name-div">
                        <h4 className="type-name">Графическое решение уравнения</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Визуальное представление уравнения</p>
                    </div>
                </Link>
                <Link className="type type_2" href='/site/cirkul'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений с помощью циркуля и линейки</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Окружности помогают решать уравнения</p>
                    </div>
                </Link>
                <Link className="type type_3" href='/site/nomo'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений с помощью номограммы</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Наглядный и незаслуженно забытый способ</p>
                    </div>
                </Link>
                <Link className="type type_4 right_down" href='/site/geom'>
                    <div className="type-name-div">
                        <h4 className="type-name">Геометрический способ решения уравнений</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Один из старейших способов решения</p>
                    </div>
                </Link>
            </section>
        </div>
      </main>
      </MathJaxContext>
      </div>
  )
}

