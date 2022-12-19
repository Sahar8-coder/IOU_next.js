import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Sposobi() {

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
        <div className="content">
            <section className="types-header-sect">
                <h2 className="types-header">Способы решения квадратных уравнений</h2>
            </section>
            <section className="types">
                <Link className="type type_2 left_top" href='/site/mnos'>
                    <div className="type-name-div">
                        <h4 className="type-name">Разложение левой части уравнения на множители</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Довольно удобный способ, но помогает не всегда</p>
                    </div>
                </Link>
                <Link className="type type_3" href='/site/videl'>
                    <div className="type-name-div">
                        <h4 className="type-name">Метод выделения полного квадрата</h4>
                    </div>                    
                    <div className="type-text-div">
                        <p className="type-text">Если изначально формулы не видно, использовать довольно непросто</p>
                    </div>
                </Link>
                <Link className="type type_4" href='/site/formulas'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений по формулам</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Старый добрый Дискриминант</p>
                    </div>
                </Link>
                <Link className="type type_1" href='/site/viet'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений с использованием теоремы Виета</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Прекрасный способ, однако работает не всегда</p>
                    </div>
                </Link>
                <Link className="type type_2 right_top" href='/site/perebros'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений способом «переброски»</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">В некоторых случаях может сильно помочь</p>
                    </div>
                </Link>
                <Link className="type type_4 left_down" href='/site/chastn'>
                    <div className="type-name-div">
                        <h4 className="type-name">Частные случаи</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Частные случаи это частные случаи, попадаются нечасто, но решаются моментально</p>
                    </div>
                </Link>
                <Link className="type type_1" href='/site/graph'>
                    <div className="type-name-div">
                        <h4 className="type-name">Графическое решение уравнения</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Алгебра превращается в геометрию</p>
                    </div>
                </Link>
                <Link className="type type_2" href='/site/cirkul'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений с помощью циркуля и линейки</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Окружности помогают решать уравнения</p>
                    </div>
                </Link>
                <Link className="type type_3" href='/site/nomo'>
                    <div className="type-name-div">
                        <h4 className="type-name">Решение уравнений с помощью номограммы</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Старый и незаслуженно забытый способ</p>
                    </div>
                </Link>
                <Link className="type type_4 right_down" href='/site/geom'>
                    <div className="type-name-div">
                        <h4 className="type-name">Геометрический способ решения уравнений</h4>
                    </div>
                    <div className="type-text-div">
                        <p className="type-text">Один из старейших способов решения</p>
                    </div>
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

