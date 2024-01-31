import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Geom() {

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
            <h2>Геометрический способ</h2>
            <p className="disc-text">
                В древности, когда геометрия была более развита, 
                чем алгебра, квадратные уравнения решали не 
                алгебраически, а геометрически. <br/>
                Пример: <MathJax inline>{' \\(3x^2+4x-7=0\\) '}</MathJax>, <br/>
                <MathJax inline>{' \\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0, x^2 + \\frac{4}{3}x = \\frac{7}{3}\\) '}</MathJax>
            </p>
            <p className="disc-text">
                Рассмотрим квадрат со стороной х, на его сторонах строятся 
                прямоугольники так, что другая сторона каждого из них равна  
                <MathJax inline>{' \\(\\frac{1}{3}\\) '}</MathJax>, следовательно, площадь каждого равна <MathJax inline>{' \\(\\frac{1}{3}x\\) '}</MathJax>. 
                Полученная фигура дополняется до нового квадрата ABCD, 
                достраивая в углах четыре равных квадрата, сторона каждого 
                из них <MathJax inline>{' \\(\\frac{1}{3}\\) '}</MathJax>, а площадь <MathJax inline>{' \\(\\frac{1}{9}\\) '}</MathJax>.
            </p>
            <table cellSpacing="0" widht="200" height="200">
                <tbody>
                <tr> 
                    <td width="50" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{9}$$ '}</MathJax></p></td>
                    <td width="100" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{3}x$$ '}</MathJax></p></td>
                    <td width="50" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{9}$$ '}</MathJax></p></td>
                </tr>
                <tr> 
                    <td width="50" height="150"><p className="geom_p"><MathJax>{' $$\\frac{1}{3}x$$ '}</MathJax></p></td>
                    <td width="100" height="150"><p className="geom_p"><MathJax>{' $$x^2$$ '}</MathJax></p></td>
                    <td width="50" height="150"><p className="geom_p"><MathJax>{' $$\\frac{1}{3}x$$ '}</MathJax></p></td>
                </tr>
                <tr> 
                    <td width="50" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{9}$$ '}</MathJax></p></td>
                    <td width="100" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{3}x$$ '}</MathJax></p></td>
                    <td width="50" height="75"><p className="geom_p"><MathJax>{' $$\\frac{1}{9}$$ '}</MathJax></p></td>
                </tr>
                </tbody>
            </table>
            <p className="disc-text">
                Площадь S квадрата ABCD можно представить как сумму площадей: 
                первоначального квадрата \(x^2\), четырех прямоугольников 
                <MathJax inline>{' \\((4 * \\frac{1}{3}x = \\frac{4}{3}x)\\) '}</MathJax> и четырех пристроенных квадратов
                <MathJax inline>{' \\((\\frac{1}{9} * 4 = \\frac{4}{9})\\) '}</MathJax>, т.е
                <MathJax inline>{' \\((S = x^2 + \\frac{4}{3}x + \\frac{4}{9})\\) '}</MathJax>. Заменяя 
                <MathJax inline>{' \\(x^2 + \\frac{4}{3}x числом \\frac{7}{3}\\) '}</MathJax>, получим, что
                <MathJax inline>{' \\(S = \\frac{7}{3} + \\frac{4}{9} = \\frac{25}{9}\\) '}</MathJax>, откуда следует, 
                что сторона квадрата ABCD, т.е. отрезок <MathJax inline>{' \\(AB = \\frac{5}{3}\\) '}</MathJax>.
                Для искомой стороны х первоначального квадрата получим:
                <MathJax inline>{' \\(x = \\frac{5}{3} - \\frac{1}{3} - \\frac{1}{3} = \\frac{3}{3} = 1\\) '}</MathJax> <br/>
                Но учитывая, что в древности не знали отрицательных чисел, второй корень 
                уравнения не находится. Я, используя теорему 
                Виета, могу вычислить второй корень <br/>
                <MathJax inline>{' \\(x_2 = -p - x_1 = -\\frac{4}{3} - 1 = -\\frac{7}{3}\\) '}</MathJax>
            </p>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'></footer>
          </div>
  )
}