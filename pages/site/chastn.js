import Head from 'next/head'
import { useState } from 'react'

export default function Chastn() {

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
            <img src="/chastn.PNG" alt="" className="chastn"/>
        </div>
    </main>
    </div>
  )
}
