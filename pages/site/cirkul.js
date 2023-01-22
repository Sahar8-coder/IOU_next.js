import Head from 'next/head'
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState } from 'react'

export default function Circul() {

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
        <div className="content disc-content">

            <h2>Решение квадратных уравнений с помощью циркуля и линейки</h2>
            <p className="disc-text">
                Предлагаем следующий способ нахождения корней квадратного уравнения <MathJax inline>{'\\(ах^2 + bх + с = 0\\)'}</MathJax> с помощью циркуля и линейки.
                Допустим, что искомая окружность пересекает ось
                абсцисс в точках <MathJax inline>{'\\(В(х_1; 0 )\\)'}</MathJax> и <MathJax inline>{'\\(D (х_2; 0)\\)'}</MathJax>, где <MathJax inline>{'\\(х_1\\)'}</MathJax> и <MathJax inline>{'\\(х_2\\)'}</MathJax> – 
                корни уравнения   <MathJax inline>{'\\(ах^2  + bх + с = 0\\)'}</MathJax>,  и  проходит  через  точки
                <MathJax inline>{'\\(A(0; 1)\\)'}</MathJax> и <MathJax inline>{'\\(C(0; \\frac{c}{a})\\)'}</MathJax> на  оси  ординат.  
                Тогда по теореме о секущих имеем OB • OD = OA • OC,  
                откуда  <MathJax inline>{'\\(OC = \\frac{ОB * OD}{OA} = \\frac{x_1 * x_2}{1} = \\frac{c}{a}\\)'}</MathJax> Центр
                  окружности находится в точке пересечения перпендикуляров SF и SK, 
                восстановленных в серединах хорд AC и BD, поэтому
                <MathJax inline>{'\\(SK = \\frac{x_1 + x_2}{2} = \\frac{-\\frac{b}{a}}{2} = -\\frac{b}{2a};\\)'}</MathJax>
                <MathJax inline>{'\\(SF = \\frac{y_1 + y_2}{2} = \\frac{1 + \\frac{c}{a}}{2} = \\frac{a + c}{2a};\\)'}</MathJax><br/>
                Итак: <br/>
                {'1) построим точки '}<MathJax inline>{'\\(s(-\\frac{b}{2a};\\frac{a + c}{2a})\\)'}</MathJax>
                {' (центр окружности) и A(0; 1);  '} <br/>
                2) проведем окружность с радиусом SA; <br/>
                3) абсциссы точек пересечения этой окружности 
                с осью Ох являются корнями исходного квадратного уравнения. <br/>
                При этом возможны три случая. <br/>
                1) Радиус окружности больше ординаты центра {'(AS>SK, или R>a + c/2a),  '}
                окружность пересекает ось Ох в двух точках (рис. а) В(х1; 0) и D(х2; 0), 
                где <MathJax inline>{'\\(х_1\\)'}</MathJax> и <MathJax inline>{'\\(х_2\\)'}</MathJax> – корни квадратного уравнения  \(ах^2  + bх + с = 0\). <br/>
                2) Радиус окружности равен ординате центра (AS = SB, или R = a + c/2a), 
                окружность касается оси Ох (рис. б) в точке <MathJax inline>{'\(В(х_1; 0)\)'}</MathJax>, где <MathJax inline>{'\(х_1\)'}</MathJax> - 
                корень квадратного уравнения. <br/>
                3) Радиус окружности меньше ординаты центра {'AS<;SB;R<(a+C)/2a   '}                             
                окружность не имеет общих точек с осью абсцисс (рис. в), в 
                этом случае уравнение не имеет решения. <br/>
                окружность не имеет общих точек с осью абсцисс (рис. в), 
                в этом случае уравнение не имеет решения. 
            </p>
                <img src="/circ1.png" alt=""/>
                <div className="circ-img">
                    <div className="circ-text">
                        <MathJax inline>{'\\(a) AS > SB,R > \\frac{a + C}{2a}.\\)'}</MathJax> <br/>
                        Два решения <MathJax inline>\(х_1\) </MathJax>и <MathJax inline>\(х_2\).</MathJax></div>
                    <div className="circ-text">
                        <MathJax inline>{'\\(б) AS = SB,R = \\frac{a + C}{2a}.\\)'}</MathJax> <br/>
                        Одно решение <MathJax inline>\(х_1.\)</MathJax></div>
                    <div className="circ-text">
                        <MathJax inline>{'\\(в) AS < SB,R < \\frac{a + C}{2a}.\\)'}</MathJax> <br/>
                        Нет решения.</div>    
                </div> <br/>
            <p className="disc-text">
                Пример: <MathJax inline>\(3x^2+4x-7=0.\)</MathJax>
                Определим координаты точки центра окружности по формулам: 
                <MathJax>
                $$
                    {'\\begin{cases} x = -\\frac{b}{2a} = -\\frac{4}{2 * 3} = -\\frac{2}{3} \\\\ y = \\frac{a + c}{2a} = \\frac{3 - 7}{2 * 3} = -\\frac{2}{3} \\end{cases}'}
                $$
                </MathJax>
                Проведем окружность радиуса SA, где А (0; 1). <br/>
                <MathJax inline>{'\\(x_1 = -\\frac{7}{3}, x_2 = 1\\)'}</MathJax>
            </p>
            <img src="/circ2.png" alt=""/>

        </div>
    </main>
    </MathJaxContext>
    </div>
  )}