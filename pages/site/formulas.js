import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Formulas() {

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
            <p className="disc-text">
                Прежде, чем изучать конкретные методы решения, заметим, что все 
                квадратные уравнения можно условно разделить на три класса:
            </p>
            <ul className="disc-menu">
                <li className="disc-item">Не имеют корней;</li>
                <li className="disc-item">Имеют ровно один корень;</li>
                <li className="disc-item">Имеют два различных корня.</li>
            </ul>
            <p className="disc-text">
                В этом состоит важное отличие квадратных уравнений от линейных, 
                где корень всегда существует и единственен. Как определить, 
                сколько корней имеет уравнение? Для этого существует замечательная вещь — 
                <strong><i>дискриминант.</i></strong>
            </p>
            <h2>Дискриминант</h2>
            <p className="disc-text">
                Пусть дано квадратное уравнение <strong><i>ax² + bx + c = 0.</i></strong>
                Тогда <strong><i>дискриминант</i></strong> — это просто число 
                <strong><i>D = b² - 4ac.</i></strong>
            </p>
            <p className="disc-text">
                Эту формулу надо знать наизусть. 
                Откуда она берется — сейчас неважно. 
                Важно другое: по знаку дискриминанта можно определить, 
                сколько корней имеет квадратное уравнение. А именно:
            </p>
            <ul className="disc-menu">
                <li className="disc-item">Если {'D < 0'}, корней нет;</li>
                <li className="disc-item">Если {'D = 0'}, есть ровно один корень;</li>
                <li className="disc-item">Если {'D > 0'}, корней будет два.</li>
            </ul>
            <p className="disc-text">
                Обратите внимание: дискриминант указывает на количество корней, 
                а вовсе не на их знаки, как почему-то многие считают. 
                Взгляните на примеры — и сами все поймете:
            </p>
            <p className="disc-text">
                Задача. Сколько корней имеют квадратные уравнения:<br/>
                <strong><i> х² - 8x + 12 = 0;</i></strong><br/> 
                <strong><i>5x² + 3x + 7 = 0;</i></strong><br/> 
                <strong><i>х² - 6x + 9 = 0.</i></strong>
            </p>
            <p className="disc-text">
                Выпишем коэффициенты для первого уравнения и найдем дискриминант:<br/> 
                <strong><i>a = 1, b = -8, c = 12;</i></strong><br/> 
                D = (-8)² - 4 · 1 · 12 = 64 - 48 = 16<br/> 
                Итак, дискриминант положительный, поэтому уравнение имеет два различных корня. 
                Аналогично разбираем второе уравнение:<br/> 
                <strong><i>a = 5; b = 3; c = 7;</i></strong><br/> 
                D = 3² - 4 · 5 · 7 = 9 - 140 = -131.<br/> 
                Дискриминант отрицательный, корней нет.
                Осталось последнее уравнение:<br/> 
                <strong><i>a = 1; b = -6; c = 9;</i></strong><br/> 
                D = (-6)² - 4 · 1 · 9 = 36 - 36 = 0.<br/> 
                Дискриминант равен нулю — корень будет один.
                Обратите внимание, что для каждого уравнения были выписаны коэффициенты. 
                Да, это долго, да, это нудно — зато вы не перепутаете коэффициенты и 
                не допустите глупых ошибок. Выбирайте сами: скорость или качество.
                Кстати, если «набить руку», через некоторое время уже не потребуется выписывать 
                все коэффициенты. Такие операции вы будете выполнять в голове. 
                Большинство людей начинают делать так где-то после 50-70 решенных уравнений — 
                в общем, не так и много.
            </p>
            <h3 className="disc-text">Корни квадратного уравнения</h3>
            <p className="disc-text">
                Теперь перейдем, собственно, к решению. 
                Если дискриминант <strong><i>{'D > 0'},</i></strong> корни можно найти по формулам:
            </p>
            {'$$x_1 = \\frac{-b + \\sqrt{D}}{2a}; \\qquad x_2 = \\frac{-b - \\sqrt{D}}{2a};$$'}
            <p className="disc-text center"><i>Основная формула корней квадратного уравнения</i></p>
        <p className="disc-text">
            Когда <strong><i>{'D = 0'},</i></strong> можно использовать любую из этих формул — 
            получится одно и то же число, которое и будет ответом. 
            Наконец, если <strong><i>{'D < 0'},</i></strong> корней нет — ничего считать не надо.
        </p>
        <p className="disc-text">
            Задача. Решить квадратные уравнения:<br/> 
            <strong><i>х² - 2x - 3 = 0;</i></strong><br/> 
            <strong><i>15 - 2x - x² = 0;</i></strong><br/> 
            <strong><i>х² + 12x + 36 = 0.</i></strong><br/> 
        </p>
        <p className="disc-text">
            Первое уравнение:<br/> 
            <strong><i>х² - 2x - 3 = 0 ⇒</i></strong> a = 1; b = -2; c = -3;<br/> 
            D = (-2)² - 4 · 1 · (-3) = 16.
        </p>
        <table className="formula1b">  
            <tbody>
            <tr>
                <td className="formula2b">
                    <p className="disc-text">{'D > 0'} ⇒ уравнение имеет два корня. Найдем их: </p>
                </td>
                <td className="formula2b">
                    {'$$ x_1 = \\frac{2 + \\sqrt{16}}{2 * 1} = 3;$$ $$x_2 = \\frac{2 - \\sqrt{16}}{2 * 1} = -1;$$'}
                </td>
            </tr>
            </tbody> 
        </table>
        <p className="disc-text">
            Второе уравнение:<br/> 
            <strong><i>15 - 2x – x² = 0 ⇒</i></strong> a = -1; b = -2; c = 15;<br/> 
            D = (-2)² - 4 · (-1) · 15 = 64.
        </p>
            <table className="formula1b">   
                <tbody> 
                <tr>
                    <td className="formula2b">
                        <p className="disc-text">{'D > 0'} ⇒ уравнение имеет два корня. Найдем их: </p>
                    </td>
                    <td className="formula2b">
                        {'$$ x_1 = \\frac{2 + \\sqrt{64}}{2 * (-1)} = -5;$$ $$x_2 = \\frac{2 - \\sqrt{64}}{2 * (-1)} = 3;$$'}
                    </td>
                </tr>
                </tbody> 
            </table>
        <p className="disc-text">
            Наконец, третье уравнение:<br/> 
            <strong><i>х² + 12x + 36 = 0 ⇒</i></strong> a = 1; b = 12; c = 36;<br/> 
            D = 12² - 4 · 1 · 36 = 0.
        </p>
        <table className="formula1b">   
            <tbody> 
            <tr>
                <td className="formula2b">
                    <p className="disc-text">D = 0 ⇒ уравнение имеет один корень. 
                        Можно использовать любую формулу. Например, первую: </p>
                </td>
                <td className="formula2b">
                    {'$$ x = \\frac{-12 + \\sqrt{0}}{2 * 1} = -6;$$'}
                </td>
            </tr>
            </tbody> 
        </table>
        <table className="formula1b">   
            <tbody> 
            <tr>
                <td className="formula2b">
                    <p className="disc-text">Или запомнить, когда <strong><i>D = 0</i></strong> ⇒ уравнение имеет корень: </p>
                </td>
                <td className="formula2b">
                    {'$$ x = \\frac{-b}{2a};$$'}
                </td>
            </tr>
            </tbody> 
        </table>
        <p className="disc-text">
            Как видно из примеров, все очень просто. 
            Если знать формулы и уметь считать, проблем не будет. 
            Чаще всего ошибки возникают при подстановке в формулу отрицательных коэффициентов. 
            Здесь опять же поможет прием, описанный выше: смотрите на формулу буквально, 
            расписывайте каждый шаг — и очень скоро избавитесь от ошибок.
        </p>
        </div>
    </main>
        </div>
)}