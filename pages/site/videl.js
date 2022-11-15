import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Videl() {

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
                <li className="header-menu-item menu-logo"><a href="/"><img src="/logo.svg" alt="#" className="logo"/></a></li>
                <li className="header-menu-item"><a href="/site/theory" className="header-menu-link">\(ax^2 + bx + c = 0\)</a></li>
                <li className="header-menu-item"><a href="/site/practice" className="header-menu-link">Практика</a></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content disc-content">
            <h2>Метод выделения полного квадрата</h2>
            <p className="disc-text">
                Определение
                Выделением полного квадрата из квадратного трёхчлена  \(ax^2 + bx + c\)
                называется процедура, в результате которой трёхчлен 
                приводится к виду \(a(x-x_0)^2 + y_0\), где \(x_0\) и \(y_0\)  некоторые 
                вещественные числа.
            </p>
            <p className="disc-text">
                Таким образом, при выделении полного квадрата необходимо понять, 
                чему равны \(x_0\) и \(y_0\), при которых выполняется равенство 
                $$ax^2 + bx + c = a(x-x_0)^2 + y_0$$
            </p>
            <p className="disc-text">
                Выделение полного квадрата основывается на формулах квадрата суммы и 
                квадрата разности:
                $$ a^2 + 2ab + b^2 = (a + b)^2 $$
                $$ a^2 - 2ab + b^2 = (a - b)^2 $$
            </p>
            <p className="disc-text">
                Самым сложным при выделении полного квадрата из квадратного трёхчлена  
                \(ax^2 + bx + c\)
                бывает понять, какое число нужно прибавить и отнять, 
                чтобы выделить квадрат суммы или квадрат разности. 
                Рассмотрим эту процедуру на примере.
            </p>
            <p className="disc-text">
                Пример 1. Выделим полный квадрат из квадратного трёхчлена \(x^2 - 6x + 8\) <br/>

                Решение. Заметим, что \(6x = 2 * 3 * x\) и в выражении \(x^2 - 6x\) не хватает 
                слагаемого \(3^2\), 
                чтобы записать квадрат разности: \(x^2 - 6x + 3^2 = (x - 3)^2\). 
                Тогда к исходному квадратному 
                трёхчлену добавим \(3^2 = 9\) и, чтобы получить равное выражение, отнимем 9, 
                после чего выделим квадрат разности \((x - 3)^2\) и суммируем оставшиеся 
                подобные слагаемые (в данном случае  числа):
                $$ x^2 - 6x + 8 = x^2 - 2 * x * 3 + 9 - 9 + 8 = (x - 3)^2 - 1 $$
                Таким образом, привели квадратный трёхчлен \(x^2 - 6x + 8\) 
                к виду \(a(x-x_0)^2 + y_0\), где \(a = 1\), \(x_0 = 3\) и \(y_0 = -1\).
                Выделение полного квадрата бывает полезным при решении квадратных уравнений.
            </p>
        </div>
    </main>
    </div>
  )
}
