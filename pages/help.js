import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Help() {

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
        <div className="content">
            <section className="types-header-sect">
                <h2 className="types-header">Помощь</h2>
            </section>
            <section className="types">
                <Link className="type type_4 left" href='/answers'>
                    <div className="help-name-div">
                        <h4 className="help-name">Ответы на задачи</h4>
                    </div>
                </Link>
                <Link className="type type_1 right" href='/teach'>
                    <div className="help-name-div">
                        <h4 className="help-name">Контакты Учителя</h4>
                    </div>                    
                </Link>
            </section>
        </div>
      </main>
      </MathJaxContext>
          <footer className='footer'>{'©МОУ "Дубоссарская гимназия №1"'}</footer>
          </div>
  )
}

