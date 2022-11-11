import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Graph() {

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
<Head>
<meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Квадратные Уравнения</title>
</Head>
    <header class="header">
        <nav class="header-nav">
            <ul class="header-menu">
                <li class="header-menu-item menu-logo"><a href="/"><img src="/logo.svg" alt="#" class="logo"/></a></li>
                <li class="header-menu-item"><a href="/pages/theory" class="header-menu-link">\(ax^2 + bx + c = 0\)</a></li>
                <li class="header-menu-item"><a href="/pages/practice" class="header-menu-link">Практика</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">
        <div class="content disc-content">
            <h2>Графический метод</h2>
            <p class="disc-text">
                Используя знания о квадратичной и линейной функциях и их графиках, 
                можно решить квадратное уравнение так называемым функционально-графическим 
                методом. Причем, некоторые квадратные уравнения можно решить 
                различными способами, рассмотрим эти способы на примере одного 
                квадратного уравнения. 
            </p>
            <p class="disc-text">
                1 способ. {'\\(3x^2+4x-7=0,\\)'} <br/>
                {'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0 ⇔ x^2 = \\frac{7}{3} - \\frac{4}{3}x\\)'} <br/>
                Построим графики функции 
                {' \\(y = x^2\\)'} и  {'\\(y = \\frac{7}{3} - \\frac{4}{3}x\\) '}
                в одной системе координат. Абсциссы точек пересечения этих двух 
                графиков являются корнями данного уравнения. <br/>
                {'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}
            </p>
                <img src="/graph1.png" alt=""/>
            <p class="disc-text">
                2 способ.  {'\\(3x^2+4x-7=0,\\)'} <br/>
                {'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0; ⇔ x^2 - \\frac{7}{3} = -\\frac{4}{3}x\\)'} <br/>
                Построим графики функции 
                {' \\(y = x^2 - \\frac{7}{3}\\)'} и {'\\(y = -\\frac{4}{3}x \\) '} 
                в одной системе координат. 	Абсциссы точек пересечения 
                этих двух графиков являются корнями данного уравнения. <br/>
                {'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}
            </p>
                <img src="/graph2.png" alt=""/>
            <p class="disc-text">
                3 способ. {'\\(3x^2+4x-7=0, | :х\\)'} <br/>
                {'\\(3x + 4 - \\frac{7}{x} = 0\\)'} <br/>
                Построим графики функции 
                {' \\(y = 3x + 4\\)'} и {'\\(y = \\frac{7}{x}\\) '}
                в одной системе координат. 	Абсциссы точек пересечения 
                этих двух графиков являются корнями данного уравнения. <br/>
                {'\\(x_1 = -2\\frac{1}{3}, x_2 = 1\\)'}
            </p>
                <img src="/graph3.png" alt=""/>
        </div>
    </main>
    </div>
  )
}
