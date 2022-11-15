import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Nomo() {

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
                <li className="header-menu-item"><a href="/site/theory" className="header-menu-link">Теория</a></li>
                <li className="header-menu-item"><a href="/site/example" className="header-menu-link">Примеры</a></li>
                <li className="header-menu-item"><a href="/site/practice" className="header-menu-link">Практика</a></li>
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
                z2 + pz + q = 0. Эта номограмма позволяет, 
                не решая квадратного уравнения, по его 
                коэффициентам определить корни уравнения.
                <img src="/nomo1.png" className="nomo1" alt=""/>
                Криволинейная шкала номограммы построена
                по формулам: {'\\(OB = \\frac{a}{1 + z}, AB = \\frac{-z^2}{1 + z}\\)'}
                Полагая ОС = р, ED = q, ОЕ = а (все в см), из
                подобия треугольников САН и CDF получим 
                пропорцию {'\\(\\frac{p - q}{p - AB} = \\frac{a}{OB}\\)'}
                откуда после подстановок и упрощений вытекает уравнение: {'\\(z^2 + pz + q = 0\\)'},
                причем буква z означает метку любой точки криволинейной шкалы.
            </p>
            <p className="disc-text">
                <img src="/nomo2.png" className="nomo2" alt=""/>
                Пример: \(3x^2+4x-7=0.\) <br/>
                Разделим коэффициенты этого уравнения на 3. <br/>
                {'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0,\\)'} <br/>
                {'\\(x_1 = -\\frac{7}{3}, x^2 = 1\\)'}
            </p>
        </div>
    </main>
    </div>
  )
}
