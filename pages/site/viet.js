import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from '/styles/Home.module.css'
import { useState } from 'react'

export default function Graph() {

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
  const [email_teach, setEmail_teach] = useState('')
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
        <div className="content disc-content">
            <h2>Теорема Виета</h2>
            <p className="disc-text">
                В математике существуют специальные приемы, с которыми многие квадратные 
                уравнения решаются очень быстро и без всяких дискриминантов. 
                Более того, при надлежащей тренировке многие начинают решать квадратные 
                уравнения устно, буквально «с первого взгляда».
            </p>
            <p className="disc-text">
                К сожалению, в современном курсе школьной математики подобные 
                технологии почти не изучаются. А знать надо! 
                И сегодня мы рассмотрим один из таких приемов — теорему Виета. 
                Для начала введем новое определение.
            </p>
            <p className="disc-text">
                Квадратное уравнение вида <MathJax inline>\(x^2 + bx + c = 0\)</MathJax> называется приведенным. 
                Обратите внимание: коэффициент при <MathJax inline>\(x^2\)</MathJax> равен 1. 
                Никаких других ограничений на коэффициенты не накладывается.
            </p>
            <p className="disc-text">
                Примеры: <br/>
                    1.	<MathJax inline>\(x^2 + 7x + 12 = 0\)</MathJax> — приведенное квадратное уравнение; <br/>
                    2.	<MathJax inline>\(x^2 − 5x + 6 = 0\)</MathJax> — приведенное; <br/>
                    3.	<MathJax inline>\(2x^2 − 6x + 8 = 0\)</MathJax> — неприведенное, поскольку коэффициент при <MathJax inline>\(x^2\)</MathJax> равен 2.
            </p>
            <p className="disc-text">
                Разумеется, любое квадратное уравнение вида <MathJax inline>\(ax^2 + bx + c = 0\) </MathJax>
                можно сделать приведенным — достаточно разделить все коэффициенты на число a. 
                Мы всегда можем так поступить, поскольку из определения квадратного уравнения 
                следует, что a ≠ 0.
                Правда, далеко не всегда эти преобразования будут полезны для отыскания корней. 
                Чуть ниже мы убедимся, что делать это надо лишь тогда, 
                когда в итоговом приведенном квадратом уравнении все коэффициенты будут 
                целочисленными. А пока рассмотрим простейшие примеры:
            </p>
            <p className="disc-text">
                Задача. Преобразовать квадратное уравнение в приведенное: <br/>
                    1.	<MathJax inline>\(3x^2 − 12x + 18 = 0;\)</MathJax><br/>
                    2.	<MathJax inline>\(−4x^2 + 32x + 16 = 0;\)</MathJax><br/>
                    3.	<MathJax inline>\(1,5x^2 + 7,5x + 3 = 0;\)</MathJax><br/>
                    4.	<MathJax inline>\(2x^2 + 7x − 11 = 0.\)</MathJax><br/>
            </p>
            <p className="disc-text">
                Разделим каждое уравнение на коэффициент при переменной <MathJax inline>\(x^2.\)</MathJax> Получим: <br/>
                    1.	<MathJax inline>\(3x^2 − 12x + 18 = 0  ⇒ x^2 − 4x + 6 = 0\)</MathJax> — разделили все на 3;<br/>
                    2.	<MathJax inline>\(−4x^2 + 32x + 16 = 0  ⇒ x^2 − 8x − 4 = 0\)</MathJax> — разделили на −4;<br/>
                    3.	<MathJax inline>\(1,5x^2 + 7,5x + 3 = 0 ⇒ x^2 + 5x + 2 = 0\)</MathJax> — разделили на 1,5, все коэффициенты стали целочисленными;<br/>
                    4.	<MathJax inline>\(2x^2 + 7x − 11 = 0  ⇒ x^2 + 3,5x − 5,5 = 0\)</MathJax> — разделили на 2. При этом возникли дробные коэффициенты.<br/>
            </p>
            <p className="disc-text">
                Как видите, приведенные квадратные уравнения могут 
                иметь целые коэффициенты даже в том случае, когда исходное 
                уравнение содержало дроби.
                Теперь сформулируем основную теорему, для которой, 
                собственно, и вводилось понятие приведенного квадратного уравнения:
            </p>
            <p className="disc-text">
                Теорема Виета. Рассмотрим приведенное квадратное уравнение вида <MathJax inline>\(x^2 + bx + c = 0.\)</MathJax> Предположим, что это уравнение имеет действительные корни x1 и x^2. В этом случае верны следующие утверждения: <br/>
                    1.	<MathJax inline>\(x_1 + x_2 = −b.\)</MathJax> <br/>
                    Другими словами, сумма корней приведенного квадратного уравнения равна коэффициенту при переменной x, взятому с противоположным знаком; <br/>
                    2.	<MathJax inline>\(x_1 · x_2 = c.\)</MathJax> <br/>
                    Произведение корней квадратного уравнения равно свободному коэффициенту.
            </p>
            <p className="disc-text">
                Примеры. Для простоты будем рассматривать только приведенные 
                квадратные уравнения, не требующие дополнительных преобразований: <br/>
                    1.	<MathJax inline>\(x^2 − 9x + 20 = 0   ⇒ x_1 + x_2 = − (−9) = 9; x_1 · x^2 = 20;   корни: x_1 = 4; x_2 = 5;\)</MathJax> <br/>
                    2.	<MathJax inline>\(x^2 + 2x − 15 = 0   ⇒ x_1 + x_2 = −2; x_1 · x_2 = −15;   корни: x_1 = 3; x_2 = −5;\)</MathJax> <br/>
                    3.	<MathJax inline>\(x^2 + 5x + 4 = 0   ⇒ x_1 + x_2 = −5; x_1 · x_2 = 4;   корни: x_1 = −1; x_2 = −4.\)</MathJax> <br/>
                    Теорема Виета дает нам дополнительную информацию о 
                    корнях квадратного уравнения. На первый взгляд это может 
                    показаться сложным, но даже при минимальной тренировке вы научитесь 
                    «видеть» корни и буквально угадывать их за считанные секунды.
            </p>
            <p className="disc-text">
                Следствие 1. Если в приведенном квадратном уравнении вида <MathJax inline>\(x^2 + bx + c = 0 \)</MathJax>
                коэффициент 
                c {'>'} 0, то корни <MathJax inline>\(x_1 и x_2\)</MathJax> имеют одинаковый знак. И наоборот, 
                если коэффициент c {'<'} 0, корни <MathJax inline>\(x_1 и x_2 \)</MathJax>
                будут разных знаков. <br/>
                Следствие 2. Если в том же уравнении <MathJax inline>\(x_1 + x_2 = −b {'>'} 0 \)</MathJax>
                (т.е. сумма корней положительна), 
                то возможны 2 варианта: либо оба корня положительны, либо модуль 
                положительного корня 
                больше модуля отрицательного.
                И наоборот, если <MathJax inline>\(x_1 + x_2 = −b {'<'} 0\)</MathJax> (т.е. сумма корней отрицательна), 
                то опять же есть 2 варианта: либо все корни отрицательны, либо модуль 
                положительного корня меньше модуля отрицательного.

            </p>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'>{'©МОУ "Дубоссарская гимназия №1"'}</footer>
          </div>
  )
}

