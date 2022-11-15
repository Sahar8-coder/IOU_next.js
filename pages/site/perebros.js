import Head from 'next/head'
import Link from 'next/link'

import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Perebros() {

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
                <li className="header-menu-item menu-logo"><Link href="/"><img src="/logo.svg" alt="#" className="logo"/></Link></li>
                <li className="header-menu-item"><Link href="/site/theory" className="header-menu-link">\(ax^2 + bx + c = 0\)</Link></li>
                <li className="header-menu-item"><Link href="/site/practice" className="header-menu-link">Практика</Link></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className="content disc-content">
            <h2>Метод переброски</h2>
            <p className="disc-text">
                Решение квадратных уравнений способом «переброски» старшего коэффициента
                На сегодняшний день перед выпускниками школ стоит главная задача 
                – это успешная сдача итоговой аттестации. 
                Формулы, теоремы, доказательства и многое другое, 
                должен знать и помнить ученик. 
                Выучить это все не так-то просто, необходимо также уметь применять свои 
                знания. Мы выяснили, что в вариантах ЕГЭ содержится около 25% заданий, 
                решаемых с помощью квадратного уравнения или сводимых к нему. 
                А это значит, что эффективное и удобное использование метода 
                «переброски» поможет значительно сократить время при решении тестирования. 
                Но чаще всего ученик использует формулу дискриминанта для нахождения корней 
                квадратного уравнения. Но зачем идти трудным путем, когда есть легкое решение?! 
                Необходимо рассмотреть метод «переброски», который позволяет решать подавляющее 
                большинство полных квадратных уравнений устно, аналогично решению приведенных 
                квадратных уравнений с помощью теоремы обратной теореме Виета. Так называемый 
                метод «переброски» позволяет сводить решение неприведённых и непреобразуемых 
                к виду приведённых с целыми коэффициентами путём их деления на старший 
                коэффициент уравнений к решению приведённых с целыми коэффициентами. 
                Он заключается в следующем: <br/>
            </p>
            <p className="disc-text">
                1)умножаем обе части на старший коэффициент: <br/>
                    \(ax^2+bx+c=0;|⋅a\) <br/>
                    \((ax)^2+b(ax)+ac=0\) <br/>
                    2)вводим новую переменную y=ax: <br/>
                    \(y^2+by+ac=0\) <br/>
            </p>
            <p className="disc-text">
                Далее уравнение решают устно описанным выше способом, 
                затем возвращаются к исходной переменной и находят корни уравнений 
                \(y_1=ax_1; y_2=ax_2\)
            </p>
            <p className="disc-text">
                Применение метода «переброски» при решении квадратных уравнений 
                или уравнений сводящихся к ним. 
            </p>
            <p className="disc-text">
                Пример 1. Решить уравнение: \(3х^2 + 10x + 7 = 0\). 
                Решение. Выполним «переброску» старшего коэффициента и 
                решим уравнение с помощью теоремы обратной теореме Виета: 
                $$y^2 + 10y + 3 · 7 = 0;$$
                $$y^2 + 10y + 21 = 0.$$
            </p>
            <p className="disc-text">
                По теореме обратной теореме Виета:
                {'\\( \\begin{cases} y_1+y_2=-10 \\\\ y_1 у_2=21 \\end{cases} \\)'} ⇒ 
                {'\\( \\left[\\begin{gathered} y = -7\\\\ y = -3 \\end{gathered}\\right. \\)'}
            </p>
            <p className="disc-text">
                Теперь вернемся к переменной x. 
                Для этого разделим полученные результаты \(y_1,_2\)
                на старший коэффициент исходного уравнения, т.е. на 3. 
            </p>
            <p className="disc-text">
                Получим: {'\\( \\left[\\begin{gathered} x = -\\frac{7}{3} \\\\ x = -\\frac{3}{3} \\end{gathered}\\right. \\)'} ⇔
                {'\\( \\left[\\begin{gathered} x = -2\\frac{1}{3} \\\\ x = -1 \\end{gathered}\\right. \\)'}
            </p>
        </div>
    </main>
    </div>
  )
}