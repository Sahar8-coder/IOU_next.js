import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Nomo() {

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
            <h2>Решение квадратных уравнений с помощью номограммы</h2>
            <p className="disc-text">
                Это старый и в настоящее время забытый способ решения 
                квадратных уравнений, помещенный на с.83 сборника: 
                Брадис В.М. Четырехзначные математические таблицы. - 
                М., Просвещение, 1990.
                Таблица XXII. Номограмма для решения уравнения 
                <MathJax inline>{' \\(z^2 + pz + q = 0\\) '}</MathJax>. Эта номограмма позволяет, 
                не решая квадратного уравнения, по его 
                коэффициентам определить корни уравнения.
                <img src="/nomo1.png" className="nomo1" alt=""/>
                Криволинейная шкала номограммы построена
                по формулам: <MathJax inline>{'\\(OB = \\frac{a}{1 + z}, AB = \\frac{-z^2}{1 + z}\\)'}</MathJax>
                Полагая ОС = р, ED = q, ОЕ = а (все в см), из
                подобия треугольников САН и CDF получим 
                пропорцию <MathJax inline>{'\\(\\frac{p - q}{p - AB} = \\frac{a}{OB}\\)'}</MathJax>
                откуда после подстановок и упрощений вытекает уравнение: <MathJax inline>{'\\(z^2 + pz + q = 0\\)'}</MathJax>,
                причем буква z означает метку любой точки криволинейной шкалы.
            </p>
            <p className="disc-text">
                <img src="/nomo2.png" className="nomo2" alt=""/>
                Пример: <MathJax inline>\(3x^2+4x-7=0.\)</MathJax> <br/>
                Разделим коэффициенты этого уравнения на 3. <br/>
                <MathJax inline>{'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0,\\)'}</MathJax> <br/>
                <MathJax inline>{'\\(x_1 = -\\frac{7}{3}, x^2 = 1\\)'}</MathJax>
            </p>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'>©МОУ "Дубоссарская гимназия №1"</footer>
          </div>
  )
}
