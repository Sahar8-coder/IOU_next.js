import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Circul() {

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
                <li className="header-menu-item menu-logo"><Link href="/"><Image src="/logo.svg" alt="#" className="logo"/></Link></li>
                <li className="header-menu-item"><Link href="/site/theory" className="header-menu-link">\(ax^2 + bx + c = 0\)</Link></li>
                <li className="header-menu-item"><Link href="/site/practice" className="header-menu-link">Практика</Link></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content disc-content">

            <h2>Решение квадратных уравнений с помощью циркуля и линейки</h2>
            <p className="disc-text">
                Предлагаем следующий способ нахождения корней квадратного уравнения {'\\(ах^2 + bх + с = 0\\)'} с помощью циркуля и линейки.
                Допустим, что искомая окружность пересекает ось
                абсцисс в точках {'\\(В(х_1; 0 )\\)'} и {'\\(D (х_2; 0)\\)'}, где {'\\(х_1\\)'} и {'\\(х_2\\)'} – 
                корни уравнения   {'\\(ах^2  + bх + с = 0\\)'},  и  проходит  через  точки
                {'\\(A(0; 1)\\)'} и {'\\(C(0; \\frac{c}{a})\\)'} на  оси  ординат.  
                Тогда по теореме о секущих имеем OB • OD = OA • OC,  
                откуда  {'\\(OC = \\frac{ОB * OD}{OA} = \\frac{x_1 * x_2}{1} = \\frac{c}{a}\\)'} Центр
                  окружности находится в точке пересечения перпендикуляров SF и SK, 
                восстановленных в серединах хорд AC и BD, поэтому
                {'\\(SK = \\frac{x_1 + x_2}{2} = \\frac{-\\frac{b}{a}}{2} = -\\frac{b}{2a};\\)'}
                {'\\(SF = \\frac{y_1 + y_2}{2} = \\frac{1 + \\frac{c}{a}}{2} = \\frac{a + c}{2a};\\)'}
                Итак: <br/>
                1) построим точки {'\\(s(-\\frac{b}{2a};\\frac{a + c}{2a})\\) '}
                (центр окружности) и A(0; 1); <br/>
                2) проведем окружность с радиусом SA; <br/>
                3) абсциссы точек пересечения этой окружности 
                с осью Ох являются корнями исходного квадратного уравнения. <br/>
                При этом возможны три случая. <br/>
                1) Радиус окружности больше ординаты центра {'(AS>SK, или R>a + c/2a),  '}
                окружность пересекает ось Ох в двух точках (рис. а) В(х1; 0) и D(х2; 0), 
                где {'\\(х_1\\)'} и {'\\(х_2\\)'} – корни квадратного уравнения  \(ах^2  + bх + с = 0\). <br/>
                2) Радиус окружности равен ординате центра (AS = SB, или R = a + c/2a), 
                окружность касается оси Ох (рис. б) в точке {'\(В(х_1; 0)\)'}, где {'\(х_1\)'} - 
                корень квадратного уравнения. <br/>
                3) Радиус окружности меньше ординаты центра {'AS<;SB;R<(a+C)/2a   '}                             
                окружность не имеет общих точек с осью абсцисс (рис. в), в 
                этом случае уравнение не имеет решения. <br/>
                окружность не имеет общих точек с осью абсцисс (рис. в), 
                в этом случае уравнение не имеет решения. 
            </p>
                <Image src="/circ1.png" alt=""/>
                <div className="circ-Image">
                    <div className="circ-text">
                        {'\\(a) AS > SB,R > \\frac{a + C}{2a}.\\)'} <br/>
                        Два решения \(х_1\) и \(х_2\).</div>
                    <div className="circ-text">
                        {'\\(б) AS = SB,R = \\frac{a + C}{2a}.\\)'} <br/>
                        Одно решение \(х_1.\)</div>
                    <div className="circ-text">
                        {'\\(в) AS < SB,R < \\frac{a + C}{2a}.\\)'} <br/>
                        Нет решения.</div>    
                </div> <br/>
            <p className="disc-text">
                Пример: \(3x^2+4x-7=0.\)
                Определим координаты точки центра окружности по формулам: 
                $$
                    {'\\begin{cases} x = -\\frac{b}{2a} = -\\frac{4}{2 * 3} = -\\frac{2}{3} \\\\ y = \\frac{a + c}{2a} = \\frac{3 - 7}{2 * 3} = -\\frac{2}{3} \\end{cases}'}
                $$ 
                Проведем окружность радиуса SA, где А (0; 1). <br/>
                {'\\(x_1 = -\\frac{7}{3}, x_2 = 1\\)'}
            </p>
            <Image src="/circ2.png" alt=""/>

        </div>
    </main>
    </div>
  )}