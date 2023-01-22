import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Practice() {

const config = {
        "fast-preview": {
          disabled: true
        },
        tex2jax: {
          inlineMath: [
            ["\\(", "\\)"]
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
                <h2 className="types-header"><Link href='/site/practice'>
                <img src="/pencil.png" alt="" width={50}/>
            </Link>Биквадратные уравнения</h2>
            </section>
            <section className="types">
                <Link className="type-prac type_2 left_top" href='/site/practice/bi/practice_bi1'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 1</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice/bi/practice_bi2'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 2</h4>
                    </div>                    
                </Link>
                <Link className="type-prac type_4" href='/site/practice/bi/practice_bi3'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 3</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice/bi/practice_bi4'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 4</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2 right_top" href='/site/practice/bi/practice_bi5'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 5</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4" href='/site/practice/bi/practice_bi6'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 6</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice/bi/practice_bi7'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 7</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2" href='/site/practice/bi/practice_bi8'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 8</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice/bi/practice_bi9'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 9</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4" href='/site/practice/bi/practice_bi10'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 10</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2" href='/site/practice/bi/practice_bi11'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 11</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice/bi/practice_bi12'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 12</h4>
                    </div>                    
                </Link>
                <Link className="type-prac type_4" href='/site/practice/bi/practice_bi13'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 13</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice/bi/practice_bi14'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 14</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2" href='/site/practice/bi/practice_bi15'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 15</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4 left_down" href='/site/practice/bi/practice_bi16'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 16</h4>
                    </div>
                </Link>
                <Link className="type-prac type_1" href='/site/practice/bi/practice_bi17'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 17</h4>
                    </div>
                </Link>
                <Link className="type-prac type_2" href='/site/practice/bi/practice_bi18'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 18</h4>
                    </div>
                </Link>
                <Link className="type-prac type_3" href='/site/practice/bi/practice_bi19'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 19</h4>
                    </div>
                </Link>
                <Link className="type-prac type_4 right_down" href='/site/practice/bi/practice_bi20'>
                    <div className="type-prac-name-div">
                        <h4 className="type-prac-name">Вариант 20</h4>
                    </div>
                </Link>
            </section>
            </div>
          </main>
          </MathJaxContext>
          <footer className='footer'>©МОУ "Дубоссарская гимназия №1"</footer>
          </div>
  )
}