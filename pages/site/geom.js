import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Geom() {

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
            <h2>Геометрический способ</h2>
            <p className="disc-text">
                В древности, когда геометрия была более развита, 
                чем алгебра, квадратные уравнения решали не 
                алгебраически, а геометрически. <br/>
                Пример: {'\\(3x^2+4x-7=0\\)'}, <br/>
                {'\\(x^2 + \\frac{4}{3}x - \\frac{7}{3} = 0, x^2 + \\frac{4}{3}x = \\frac{7}{3}\\)'}
            </p>
            <p className="disc-text">
                Рассмотрим квадрат со стороной х, на его сторонах строятся 
                прямоугольники так, что другая сторона каждого из них равна  
                {'\\(\\frac{1}{3}\\)'}, следовательно, площадь каждого равна {'\\(\\frac{1}{3}x\\)'}. 
                Полученная фигура дополняется до нового квадрата ABCD, 
                достраивая в углах четыре равных квадрата, сторона каждого 
                из них {'\\(\\frac{1}{3}\\)'}, а площадь {'\\(\\frac{1}{9}\\)'}.
            </p>
            <table cellSpacing="0" widht="200" height="200">
                <tbody>
                <tr> 
                    <td width="50" height="75"><p className="geom_p">{'$$\\frac{1}{9}$$'}</p></td>
                    <td width="100" height="75"><p className="geom_p">{'$$\\frac{1}{3}x$$'}</p></td>
                    <td width="50" height="75"><p className="geom_p">{'$$\\frac{1}{9}$$'}</p></td>
                </tr>
                <tr> 
                    <td width="50" height="150"><p className="geom_p">{'$$\\frac{1}{3}x$$'}</p></td>
                    <td width="100" height="150"><p className="geom_p">{'$$x^2$$'}</p></td>
                    <td width="50" height="150"><p className="geom_p">{'$$\\frac{1}{3}x$$'}</p></td>
                </tr>
                <tr> 
                    <td width="50" height="75"><p className="geom_p">{'$$\\frac{1}{9}$$'}</p></td>
                    <td width="100" height="75"><p className="geom_p">{'$$\\frac{1}{3}x$$'}</p></td>
                    <td width="50" height="75"><p className="geom_p">{'$$\\frac{1}{9}$$'}</p></td>
                </tr>
                </tbody>
            </table>
            <p className="disc-text">
                Площадь S квадрата ABCD можно представить как сумму площадей: 
                первоначального квадрата \(x^2\), четырех прямоугольников 
                {'\\((4 * \\frac{1}{3}x = \\frac{4}{3}x)\\)'} и четырех пристроенных квадратов
                {'\\((\\frac{1}{9} * 4 = \\frac{4}{9})\\)'}, т.е
                {'\\((S = x^2 + \\frac{4}{3}x + \frac{4}{9})\)'}. Заменяя 
                {'\\(x^2 + \f\rac{4}{3}x\\) числом \\frac{7}{3}'}, получим, что
                {'\\(S = \\frac{7}{3} + \\frac{4}{9} = \\frac{25}{9}\\)'}, откуда следует, 
                что сторона квадрата ABCD, т.е. отрезок {'\\(AB = \\frac{5}{3}\\)'}.
                Для искомой стороны х первоначального квадрата получим:
                {'\\(x = \\frac{5}{3} - \\frac{1}{3} - \\frac{1}{3} = \\frac{3}{3} = 1\\)'} <br/>
                Но учитывая, что в древности не знали отрицательных чисел, второй корень 
                уравнения не находится. Я, используя теорему 
                Виета, могу вычислить второй корень <br/>
                {'\\(x_2 = -p - x_1 = -\\frac{4}{3} - 1 = -\\frac{7}{3}\\)'}
            </p>
        </div>
    </main>
    </div>
  )
}