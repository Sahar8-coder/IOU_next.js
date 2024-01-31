import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Videl() {

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
  const [email_teach, setEmail_teach] = useState('')
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
            <h2>Метод выделения полного квадрата</h2>
            <p className="disc-text">
                Определение
                Выделением полного квадрата из квадратного трёхчлена  <MathJax inline>\(ax^2 + bx + c\)</MathJax>
                называется процедура, в результате которой трёхчлен 
                приводится к виду <MathJax inline>\(a(x-x_0)^2 + y_0\)</MathJax>, где <MathJax inline>\(x_0\)</MathJax> и <MathJax inline>\(y_0\)</MathJax>  некоторые 
                вещественные числа.
            </p>
            <p className="disc-text">
                Таким образом, при выделении полного квадрата необходимо понять, 
                чему равны <MathJax inline>\(x_0\)</MathJax> и <MathJax inline>\(y_0\)</MathJax>, при которых выполняется равенство 
                <MathJax>$$ax^2 + bx + c = a(x-x_0)^2 + y_0$$</MathJax>
            </p>
            <p className="disc-text">
                Выделение полного квадрата основывается на формулах квадрата суммы и 
                квадрата разности:
                <MathJax>$$ a^2 + 2ab + b^2 = (a + b)^2 $$</MathJax>
                <MathJax>$$ a^2 - 2ab + b^2 = (a - b)^2 $$</MathJax>
            </p>
            <p className="disc-text">
                Самым сложным при выделении полного квадрата из квадратного трёхчлена  
                <MathJax inline>\(ax^2 + bx + c\)</MathJax>
                бывает понять, какое число нужно прибавить и отнять, 
                чтобы выделить квадрат суммы или квадрат разности. 
                Рассмотрим эту процедуру на примере.
            </p>
            <p className="disc-text">
                Пример 1. Выделим полный квадрат из квадратного трёхчлена <MathJax inline>\(x^2 - 6x + 8\)</MathJax> <br/>

                Решение. Заметим, что <MathJax inline>\(6x = 2 * 3 * x\)</MathJax> и в выражении <MathJax inline>\(x^2 - 6x\)</MathJax> не хватает 
                слагаемого <MathJax inline>\(3^2\)</MathJax>, 
                чтобы записать квадрат разности: <MathJax inline>\(x^2 - 6x + 3^2 = (x - 3)^2\)</MathJax>. 
                Тогда к исходному квадратному 
                трёхчлену добавим <MathJax inline>\(3^2 = 9\)</MathJax> и, чтобы получить равное выражение, отнимем 9, 
                после чего выделим квадрат разности <MathJax inline>\((x - 3)^2\)</MathJax> и суммируем оставшиеся 
                подобные слагаемые (в данном случае  числа):
                <MathJax>$$ x^2 - 6x + 8 = x^2 - 2 * x * 3 + 9 - 9 + 8 = (x - 3)^2 - 1 $$</MathJax>
                Таким образом, привели квадратный трёхчлен <MathJax inline>\(x^2 - 6x + 8\)</MathJax> 
                к виду <MathJax inline>\(a(x-x_0)^2 + y_0\)</MathJax>, где <MathJax inline>\(a = 1\)</MathJax>, <MathJax inline>\(x_0 = 3\)</MathJax> и <MathJax inline>\(y_0 = -1\)</MathJax>.
                Выделение полного квадрата бывает полезным при решении квадратных уравнений.
            </p>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'></footer>
          </div>
  )
}
