import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Graph() {

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
        <div className="content disc-content">
            <h2>Графический метод</h2>
            <p className="disc-text">
                Используя знания о квадратичной и линейной функциях и их графиках, 
                можно решить квадратное уравнение так называемым функционально-графическим 
                методом. Причем, некоторые квадратные уравнения можно решить 
                различными способами, рассмотрим эти способы на примере одного 
                квадратного уравнения. 
            </p>
            <p className="disc-text">
                1 способ. <MathJax inline>{'\\(3x^2+4x-7=0,\\)'}</MathJax> <br/>
                <MathJax inline>{'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0 ⇔ x^2 = \\frac{7}{3} - \\frac{4}{3}x\\)'}</MathJax> <br/>
                Построим графики функции 
                <MathJax inline>{'\\(y = x^2\\)'}</MathJax> и  <MathJax inline>{'\\(y = \\frac{7}{3} - \\frac{4}{3}x\\)'}</MathJax>
                в одной системе координат. Абсциссы точек пересечения этих двух 
                графиков являются корнями данного уравнения. <br/>
                <MathJax inline>{'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}</MathJax>
            </p>
                <img src="/graph1.png" alt=""/>
            <p className="disc-text">
                2 способ.  <MathJax inline>{'\\(3x^2+4x-7=0,\\)'}</MathJax> <br/>
                <MathJax inline>{'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0; ⇔ x^2 - \\frac{7}{3} = -\\frac{4}{3}x\\)'}</MathJax> <br/>
                Построим графики функции 
                <MathJax inline>{'\\(y = x^2 - \\frac{7}{3}\\)'}</MathJax> и <MathJax inline>{'\\(y = -\\frac{4}{3}x \\)'}</MathJax>
                в одной системе координат. 	Абсциссы точек пересечения 
                этих двух графиков являются корнями данного уравнения. <br/>
                <MathJax inline>{'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}</MathJax>
            </p>
                <img src="/graph2.png" alt=""/>
            <p className="disc-text">
                3 способ. <MathJax inline>{'\\(3x^2+4x-7=0, | :х\\)'}</MathJax> <br/>
                <MathJax inline>{'\\(3x + 4 - \\frac{7}{x} = 0\\)'}</MathJax> <br/>
                Построим графики функции 
                <MathJax inline>{'\\(y = 3x + 4\\)'}</MathJax> и <MathJax inline>{'\\(y = \\frac{7}{x}\\)'}</MathJax>
                в одной системе координат. 	Абсциссы точек пересечения 
                этих двух графиков являются корнями данного уравнения. <br/>
                <MathJax inline>{'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}</MathJax>
            </p>
                <img src="/graph3.png" alt=""/>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'>{'©МОУ "Дубоссарская гимназия №1"'}</footer>
          </div>
  )
}
