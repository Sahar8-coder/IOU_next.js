import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
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
    <div className={styles.container}>
      <Head>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Квадратные Уравнения</title>
</Head>
<body>
    <header class="header">
        <nav class="header-nav">
            <ul class="header-menu">
                <li class="header-menu-item menu-logo"><a href="index.js"><img src="../public/logo.svg" alt="#" class="logo"></img></a></li>
                <li class="header-menu-item"><a href="pages/theory.html" class="header-menu-link">\(ax^2 + bx + c = 0\)</a></li>
                <li class="header-menu-item"><a href="pages/practice.html" class="header-menu-link">Практика</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">
        <div class="content">
            <section class="types-header-sect">
                <h2 class="types-header">Способы решений квадратных уравнений</h2>
            </section>
            <section class="types">
                <button class="type" onclick="document.location='pages/mnos.html'">
                    <h4 class="type-name">Разложение левой части уравнения на множители</h4>
                    <p class="type-text">Довольно удобный способ, но помогает не всегда</p>
                </button>
                <button class="type" onclick="document.location='pages/videl.html'">
                    <h4 class="type-name">Метод выделения полного квадрата</h4>
                    <p class="type-text">Если изначально формулы не видно, использовать довольно непросто</p>
                </button>
                <button class="type" onclick="document.location='pages/formulas.html'">
                    <h4 class="type-name">Решение квадратных уравнений по формулам</h4>
                    <p class="type-text">Старый добрый Дискриминант</p>
                </button>
                <button class="type" onclick="document.location='pages/viet.html'">
                    <h4 class="type-name">Решение уравнений с использованием теоремы Виета</h4>
                    <p class="type-text">Прекрасный способ, однако работает не всегда</p>
                </button>
                <button class="type" onclick="document.location='pages/perebros.html'">
                    <h4 class="type-name">Решение уравнений способом «переброски»</h4>
                    <p class="type-text">В некоторых случаях может сильно помочь</p>
                </button>
                <button class="type" onclick="document.location='pages/chastn.html'">
                    <h4 class="type-name">Свойства коэффициентов квадратного уравнения (частные случаи)</h4>
                    <p class="type-text">Частные случаи это частные случаи, попадаются нечасто, но решаются моментально</p>
                </button>
                <button class="type" onclick="document.location='pages/graph.html'">
                    <h4 class="type-name">Графическое решение квадратного уравнения</h4>
                    <p class="type-text">Алгебра превращается в геометрию</p>
                </button>
                <button class="type" onclick="document.location='pages/cirkul.html'">
                    <h4 class="type-name">Решение квадратных уравнений с помощью циркуля и линейки</h4>
                    <p class="type-text">Окружности помогают решать уравнения</p>
                </button>
                <button class="type" onclick="document.location='pages/nomo.html'">
                    <h4 class="type-name">Решение квадратных уравнений с помощью номограммы</h4>
                    <p class="type-text">Старый и незаслуженно забытый способ</p>
                </button>
                <button class="type" onclick="document.location='pages/geom.html'">
                    <h4 class="type-name">Геометрический способ решения квадратных уравнений</h4>
                    <p class="type-text">Один из старейших способов решения</p>
                </button>
            </section>
        </div>
    </main>
</body>
      < form className={styles.main} >

        < formGroup className={styles.inputGroup} >
          < label htmlFor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
        </formGroup>

        < formGroup className={styles.inputGroup} >
          < label htmlFor='email'>Email</label>
          < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
        </formGroup>

        < formGroup className={styles.inputGroup} >
          < label htmlFor='message'>Message</label>
          < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
        </formGroup>

        < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </form >
    </div>
  )
}

