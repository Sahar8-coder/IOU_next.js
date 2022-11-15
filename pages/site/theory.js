import Head from 'next/head'
import Link from 'next/link'

import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Theory() {

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
    <header className="header">
        <nav className="header-nav">
            <ul className="header-menu">
                <li className="header-menu-item menu-logo"><Link href="/"><img src="/logo.svg" alt="#" className="logo"/></Link></li>
                <li className="header-menu-item"><Link href="/site/theory" className="header-menu-link">\(ax^2 + bx + c = 0\)</Link></li>
                <li className="header-menu-item"><Link href="/site/practice" className="header-menu-link">Практика</Link></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content">
            <section className="theory">
                <h2 className="theory-h">Квадратные уравнения</h2>
                <p className="theory-p">
                    Квадратные уравнения.
         Квадратным уравнением называют уравнение вида <strong><i>ах²+bх+с=0</i></strong>, где коэффициенты <strong><i>а, b, с</i></strong> - любые действительные числа, причём, <strong><i>а≠0</i></strong>. Коэффициенты <strong><i>а, b, с,</i></strong> различают по названиям: <strong><i>а</i></strong> - первый или старший коэффициент; <strong><i>b</i></strong> - второй или коэффициент при х; <strong><i>с</i></strong> - свободный член, свободен от переменной х.

         Квадратное уравнение также называют уравнением второй степени, так как его левая часть есть многочлен второй степени. Квадратное уравнение называют <strong><i>приведенным</i></strong>, если старший коэффициент равен 1; квадратное уравнение называют <strong><i>неприведенным</i></strong>, если старший коэффициент отличен от 1.  <strong><i>х²+рх+q=0</i></strong> - стандартный вид приведенного квадратного уравнения

         Кроме приведенных и неприведенных квадратных уравнений различают также <strong><i>полные</i></strong> и <strong><i>неполные</i></strong> уравнения.

        <strong><i>Полное квадратное уравнение</i></strong> - это квадратное уравнение, в котором присутствуют все три слагаемых; иными словами, это уравнение, у которого коэффициенты <strong><i>b и с</i></strong> отличны от нуля.

        <strong><i>Неполное квадратное уравнение</i></strong> - это уравнение, в котором присутствуют не все три слагаемых; иными словами, это уравнение, у которого хотя бы один из коэффициентов <strong><i>b и с</i></strong> равен нулю.

        Обратите внимание: об <strong><i>ах²</i></strong> речи нет, этот член всегда присутствует в квадратном уравнении.

        Корнем квадратного уравнения <strong><i>ах²+вх+с=0</i></strong> называют всякое значение переменной х, при котором квадратный трехчлен <strong><i>ах²+bх+с</i></strong> обращается в нуль; такое значение переменной х называют также корнем квадратного трехчлена.

        Можно сказать и так: корень квадратного уравнения <strong><i>ах²+bх+с=0</i></strong> - это такое значение х, подстановка которого в уравнение обращает уравнение в верное числовое равенство. <strong><i>0=0.</i></strong>

        <strong><i>Решить квадратное уравнение - это значит найти все его корни или установить, что их нет.</i></strong>
                </p>
            </section>
        </div>
    </main>
    </div>
  )
}