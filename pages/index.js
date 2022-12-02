import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

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
                <li className="header-menu-item"><Link href="/" className="header-menu-link">{'\\(\\sf{ax^2 + bx + c = 0}\\)'}</Link></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content-main">
            <section className="main-flex-1">
                <h2 className="types-header">Квадратные уравнения</h2>
                <p className="main-text types-text">
                    Решить квадратное уравнение - это значит найти
                все его корни или установить, что их нет.</p>
                <Link className="small-btn" href='/site/theory'>
                    <p className="menu-text small-btn-text">Читать больше</p>
                </Link>
            </section>
            <section className="main-flex-2">
                <Link className="left_top type_5 type-main main_bac_1" href='/site/mnos'>
                    <div className="type-main-name-div">
                        <h4 className="type-name">Теория</h4>
                    </div>
                    <div className="type-main-text-div">
                        <p className="type-text">Все, что необходимо знать перед решением квадратных уравнений</p>
                    </div>
                </Link>
                <Link className="right_top type_4 type-main main_bac_2" href='/site/videl'>
                    <div className="type-main-name-div">
                        <h4 className="type-name">Практика</h4>
                    </div>                    
                    <div className="type-main-text-div">
                        <p className="type-text">Тренировка полученых занний</p>
                    </div>
                </Link>
                <Link className="left_down type_1 type-main main_bac_3" href='/sposobi'>
                    <div className="type-main-name-div">
                        <h4 className="type-name">Решения</h4>
                    </div>
                    <div className="type-main-text-div">
                        <p className="type-text">Способы решения квадратных уровнений</p>
                    </div>
                </Link>
                <Link className="right_down type_3 type-main main_bac_4" href='/site/viet'>
                    <div className="type-main-name-div">
                        <h4 className="type-name">Помощь</h4>
                    </div>
                    <div className="type-main-text-div">
                        <p className="type-text">При возникновении трудностей</p>
                    </div>
                </Link>
            </section>
        </div>
      </main>
      </div>
  )
}