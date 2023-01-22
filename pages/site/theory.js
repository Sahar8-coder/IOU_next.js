import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Theory() {

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
            <section className="theory">
                <h2 className="theory-h">Теория</h2>
                <div className="theory-important-div">
                    <img className="theory-important-img" src="/theory-imp.svg"/>
                    <p className="theory-important theory-p">Квадратным уравнением называют уравнение вида ах²+bх+с=0, где коэффициенты а, b, с - любые действительные числа, причём, а≠0.</p>
                </div>
                <div className="big-formula">
                ах²+bх+с=0
                </div>
                <p className="theory-p">
                    Коэффициенты а, b, с, различают по названиям:<br/>
                    а - первый или старший коэффициент;<br/>
                    b - второй или коэффициент при х;<br/>
                    с - свободный член, свободен от переменной х.
                </p>
            <h3 className="theory-name">Виды квадратных уравнений</h3>
                <p className="theory-p">
                    <span className="blue-text">Приведенное квадратное уравнение</span> - уровнение, где старший коэффициент равен 1.<br/>
                    <span className="blue-text">Неприведенное квадратное уравнение</span> - старший коэффициент отличен от 1 
                </p>
                <div className="theory-important-div">
                    <img className="theory-important-img" src="/theory-imp.svg"/>
                    <p className="theory-important theory-p">х²+рх+q=0 - стандартный вид приведенного квадратного уравнения</p>
                </div>
                <p className="theory-p">
                    Кроме приведенных и неприведенных квадратных уравнений различают также:<br/>
                    <span className="blue-text">Полные квадратные уравнения;</span> <br/>
                    <span className="blue-text">Неполные квадратные уравнения.</span>
                </p>
                <p className="theory-p">
                    <strong><i>Полное квадратное уравнение</i></strong> - это квадратное уравнение, в котором присутствуют все три слагаемых; иными словами, это уравнение, у которого коэффициенты <strong><i>b и с</i></strong> отличны от нуля. <br/>
                    <strong><i>Неполное квадратное уравнение</i></strong> - это уравнение, в котором присутствуют не все три слагаемых; иными словами, это уравнение, у которого хотя бы один из коэффициентов <strong><i>b и с</i></strong> равен нулю.
                </p>
                    <p className="theory-p">
                        Об <span className="blue-text"><strong><i>ах²</i></strong></span> речи нет, этот член всегда присутствует в квадратном уравнении.
                    </p>
                <p className="theory-p">
                    Корнем квадратного уравнения <strong><i>ах²+вх+с=0</i></strong> называют всякое значение переменной х, при котором квадратный трехчлен <strong><i>ах²+bх+с</i></strong> обращается в нуль; такое значение переменной х называют также корнем квадратного трехчлена.
                    Можно сказать и так: корень квадратного уравнения <strong><i>ах²+bх+с=0</i></strong> - это такое значение х, подстановка которого в уравнение обращает уравнение в верное числовое равенство. <strong><i>0=0.</i></strong>
                </p>
                <div className="theory-important-div">
                    <img className="theory-important-img" src="/theory-imp.svg"/>
                    <p className="theory-important theory-p"><strong><i>Решить квадратное уравнение - это значит найти все его корни или установить, что их нет.</i></strong></p>
                </div>
            </section>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'>©МОУ "Дубоссарская гимназия №1"</footer>
          </div>
  )
}