import Head from 'next/head'
import Link from 'next/link'

import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Mnos() {

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
        <div className="content disc-content">
            <h3 className="disc-text">Неполные квадратные уравнения</h3>
            <p className="disc-text">
                Бывает, что квадратное уравнение несколько отличается от того, 
                что дано в определении. Например:
            </p>
            <ul className="disc-menu">
                <li className="disc-item">x² + 9x = 0;</li>
                <li className="disc-item">x² - 16 = 0.</li>
            </ul>
            <p className="disc-text">
                Несложно заметить, что в этих уравнениях отсутствует одно из слагаемых. 
                Такие квадратные уравнения решаются даже легче, чем стандартные: 
                в них даже не потребуется считать дискриминант. Итак, введем новое понятие:
            </p>
            <p className="disc-text">
                Уравнение <strong><i> ax² + bx + c = 0 </i></strong>называется неполным квадратным уравнением, 
                если <strong><i>b = 0</i></strong> или <strong><i>c = 0,</i></strong> 
                т.е. коэффициент при переменной x или 
                свободный элемент равен нулю.
            </p>
            <p className="disc-text">
                Разумеется, возможен совсем тяжелый случай, когда оба этих коэффициента 
                равны нулю: <strong><i>b = c = 0.</i></strong> В этом случае уравнение принимает вид 
                <strong><i>ax2 = 0.</i></strong> 
                Очевидно, такое уравнение имеет единственный корень: <strong><i>x = 0.</i></strong>
            </p>
            <p className="disc-text">
                Рассмотрим остальные случаи. Пусть b = 0, тогда получим неполное 
                квадратное уравнение вида ax² + c = 0. Немного преобразуем его:
            </p>
            {'$$ax^2 + c = 0 \\implies x^2 = -\\frac{c}{a} \\implies x = \\pm \\sqrt{-\\frac{c}{a}}$$'}
            <p className="disc-text center">Решение неполного квадратного уравнения</p>
            <p className="disc-text">
                Поскольку арифметический квадратный корень существует только из неотрицательного числа, 
                последнее равенство имеет смысл исключительно при
                {' \\(-\\frac{c}{a} \\geq 0\\) '}.
                Вывод:
            </p>
            <p className="disc-text">
                1.	Если в неполном квадратном уравнении вида ax² + c = 0 выполнено неравенство 
                {' \\(-\\frac{c}{a} \\geq 0\\) '},
                корней будет два. Формула дана выше;<br/>
                2.	Если же 
                {' \\(-\\frac{c}{a} < 0\\) '},
                корней нет.
            </p>
            <p className="disc-text">
                Как видите, дискриминант не потребовался — в неполных квадратных уравнениях 
                вообще нет сложных вычислений. На самом деле даже необязательно помнить 
                неравенство 
                {' \\(-\\frac{c}{a} \\geq 0\\) '}
                . Достаточно выразить величину x² и посмотреть, что стоит с другой стороны
                от знака равенства. Если там положительное число — корней будет два. 
                Если отрицательное — корней не будет вообще.
            </p>
            <p className="disc-text">
                Теперь разберемся с уравнениями вида <strong><i>ax² + bx = 0,</i></strong>  в которых свободный элемент 
                равен нулю. Тут все просто: корней всегда будет два. 
                Достаточно разложить многочлен на множители:
            </p>
            {'$$ax^2 + bx = 0 \\implies x(ax + b) = 0 \\implies x_1 = 0; x_2 = -\\frac{b}{a}$$'}
            <p className="disc-text center">Вынесение общего множителя за скобку</p>
            <p className="disc-text">
                Произведение равно нулю, когда хотя бы один из множителей равен нулю. 
                Отсюда находятся корни. В заключение разберем несколько таких уравнений:
            </p>
            <p className="disc-text">
                Задача. Решить квадратные уравнения: <br/>
                <strong>x² - 7x = 0; </strong>   ⇒ x · (x - 7) = 0    ⇒ x1 = 0; x2 = -(-7)/1 = 7.<br/>
                <strong>5x² + 30 = 0;</strong>    ⇒ 5x² = -30    ⇒ x2 = -6. Корней нет, т.к. квадрат не может быть равен отрицательному числу.<br/>
                <strong>4x² - 9 = 0.</strong>     ⇒ 4x² = 9    ⇒ x2 = 9/4    ⇒ x1 = 3/2 = 1,5;    x2 = -1,5.<br/>
            </p>
        </div>
    </main>
    </div>
  )
}