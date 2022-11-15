import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default async function Home() {

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
                <li className="header-menu-item menu-logo"><Link href="/"><img src='/logo.svg' alt="#" className="logo"/></Link></li>
                <li className="header-menu-item"><Link href="/site/theory" className="header-menu-link">\(ax^2 + bx + c = 0\)</Link></li>
                <li className="header-menu-item"><Link href="/site/practice" className="header-menu-link">Практика</Link></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content">
            <section className="types-header-sect">
                <h2 className="types-header">Способы решений квадратных уравнений</h2>
            </section>
            <section className="types">
                <Link className="type" href='/site/mnos'>
                    <h4 className="type-name">Разложение левой части уравнения на множители</h4>
                    <p className="type-text">Довольно удобный способ, но помогает не всегда</p>
                </Link>
                <Link className="type" href='/site/videl'>
                    <h4 className="type-name">Метод выделения полного квадрата</h4>
                    <p className="type-text">Если изначально формулы не видно, использовать довольно непросто</p>
                </Link>
                <Link className="type" href='/site/formulas'>
                    <h4 className="type-name">Решение квадратных уравнений по формулам</h4>
                    <p className="type-text">Старый добрый Дискриминант</p>
                </Link>
                <Link className="type" href='/site/viet'>
                    <h4 className="type-name">Решение уравнений с использованием теоремы Виета</h4>
                    <p className="type-text">Прекрасный способ, однако работает не всегда</p>
                </Link>
                <Link className="type" href='/site/perebros'>
                    <h4 className="type-name">Решение уравнений способом «переброски»</h4>
                    <p className="type-text">В некоторых случаях может сильно помочь</p>
                </Link>
                <Link className="type" href='/site/chastn'>
                    <h4 className="type-name">Свойства коэффициентов квадратного уравнения (частные случаи)</h4>
                    <p className="type-text">Частные случаи это частные случаи, попадаются нечасто, но решаются моментально</p>
                </Link>
                <Link className="type" href='/site/graph'>
                    <h4 className="type-name">Графическое решение квадратного уравнения</h4>
                    <p className="type-text">Алгебра превращается в геометрию</p>
                </Link>
                <Link className="type" href='/site/cirkul'>
                    <h4 className="type-name">Решение квадратных уравнений с помощью циркуля и линейки</h4>
                    <p className="type-text">Окружности помогают решать уравнения</p>
                </Link>
                <Link className="type" href='/site/nomo'>
                    <h4 className="type-name">Решение квадратных уравнений с помощью номограммы</h4>
                    <p className="type-text">Старый и незаслуженно забытый способ</p>
                </Link>
                <Link className="type" href='/site/geom'>
                    <h4 className="type-name">Геометрический способ решения квадратных уравнений</h4>
                    <p className="type-text">Один из старейших способов решения</p>
                </Link>
            </section>
        </div>
      < form className={styles.main} >
          < label jsfor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
          <br />
          < label jsfor='email'>Email</label>
          < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
          <br />
          < label jsfor='message'>Message</label>
          < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
          <br />
          < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </form >
      </main>
      </div>
  )
}

