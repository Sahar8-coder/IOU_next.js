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
            [" \\(", " \\)"],
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
                   <li className="header-menu-item"><Link href="/" className="header-menu-link"><img src="/logo.svg" alt="" className="logo"/><MathJax inline>{' \\(\\sf{ax^2 + bx + c = 0} \\)'}</MathJax></Link></li>
                </ul>
            </nav>
</header>
    <main className="main">
        <div className="content disc-content">

            <h2>Решение квадратных уравнений с помощью циркуля и линейки</h2>
            <p className="disc-text">
                Предлагаем следующий способ нахождения корней квадратного уравнения <MathJax inline>{' \\(ах^2 + bх + с = 0 \\)'}</MathJax> с помощью циркуля и линейки.
            </p>
            <p className="disc-text">
                <img src="/circ3.png" alt="" width={200}/>
                Допустим, что искомая окружность пересекает ось
                абсцисс в точках <MathJax inline>{' \\(В(х_1; 0 ) \\)'}</MathJax> и <MathJax inline>{' \\(D (х_2; 0) \\)'}</MathJax>, где <MathJax inline>{' \\(х_1 \\)'}</MathJax> и <MathJax inline>{' \\(х_2 \\)'}</MathJax> – 
                корни уравнения   <MathJax inline>{' \\(ах^2  + bх + с = 0 \\)'}</MathJax>,  и  проходит  через  точки
                <MathJax inline>{' \\(A(0; 1) \\)'}</MathJax> и <MathJax inline>{' \\(C(0; \\frac{c}{a}) \\)'}</MathJax> на  оси  ординат.  
                Тогда по теореме о секущих имеем OB • OD = OA • OC,  
                откуда  <MathJax inline>{' \\(OC = \\frac{ОB * OD}{OA} = \\frac{x_1 * x_2}{1} = \\frac{c}{a} \\)'}</MathJax> Центр
                  окружности находится в точке пересечения перпендикуляров SF и SK, 
                восстановленных в серединах хорд AC и BD, поэтому
                <MathJax inline>{' \\(SK = \\frac{x_1 + x_2}{2} = \\frac{-\\frac{b}{a}}{2} = -\\frac{b}{2a}; \\)'}</MathJax>
                <MathJax inline>{' \\(SF = \\frac{y_1 + y_2}{2} = \\frac{1 + \\frac{c}{a}}{2} = \\frac{a + c}{2a}; \\)'}</MathJax><br/>
                Итак: <br/>
                {'1) построим точки '}<MathJax inline>{' \\(s(-\\frac{b}{2a};\\frac{a + c}{2a}) \\)'}</MathJax>
                {' (центр окружности) и A(0; 1);  '} <br/>
                2) проведем окружность с радиусом SA; <br/>
                3) абсциссы точек пересечения этой окружности 
                с осью Ох являются корнями исходного квадратного уравнения. <br/>
                При этом возможны три случая. <br/>
                1) Радиус окружности больше ординаты центра {'(AS>SK, или R>a + c/2a),  '}
                окружность пересекает ось Ох в двух точках {'(рис. а)'} {'  \\( В(х_1; 0) и D(х_2; 0) \\) '}, 
                где <MathJax inline>{' \\(х_1 \\)'}</MathJax> и <MathJax inline>{' \\(х_2 \\)'}</MathJax> – корни квадратного уравнения  <MathJax inline>\(ах^2  + bх + с = 0\)</MathJax>. <br/>
                2) Радиус окружности равен ординате центра {'(AS = SB, или R = a + c/2a)'}, 
                окружность касается оси Ох {'(рис. б)'} в точке <MathJax inline>{'\(В(х_1; 0)\)'}</MathJax>, где <MathJax inline>{'\(х_1\)'}</MathJax> - 
                корень квадратного уравнения. <br/>
                3) Радиус окружности меньше ординаты центра {'AS<;SB;R<(a+C)/2a   '}                             
                окружность не имеет общих точек с осью абсцисс {'(рис. в)'}, в 
                этом случае уравнение не имеет решения. <br/>
                окружность не имеет общих точек с осью абсцисс {'(рис. в)'}, 
                в этом случае уравнение не имеет решения. 
            </p>
                <img src="/circ1.png" alt=""/>
                <div className="circ-img">
                    <div className="circ-text">
                        <MathJax inline>{' \\(a) AS > SB,R > \\frac{a + C}{2a}. \\)'}</MathJax> <br/>
                        Два решения <MathJax inline>\(х_1\) </MathJax>и <MathJax inline>\(х_2\).</MathJax></div>
                    <div className="circ-text">
                        <MathJax inline>{' \\(б) AS = SB,R = \\frac{a + C}{2a}. \\)'}</MathJax> <br/>
                        Одно решение <MathJax inline>\(х_1.\)</MathJax></div>
                    <div className="circ-text">
                        <MathJax inline>{' \\(в) AS < SB,R < \\frac{a + C}{2a}. \\)'}</MathJax> <br/>
                        Нет решения.</div>    
                </div> <br/>
            <p className="disc-text">
                1)Решим уравнение <MathJax inline>{' \\(х^2 – 2х – 3 = 0  \\)'}</MathJax> <br />
                построим точки <MathJax inline>{' \\(S (-\\frac{b}{2a}; \\frac{a+c}{2a})  \\)'}</MathJax> — центр окружности и А(0;1); <br />
                <MathJax inline>{' \\( x = -\\frac{b}{2a} =  -\\frac{-2}{2} = 1 \\\\ y = \\frac{a+c}{2a} = \\frac{1-3}{2} = -1 \\)'}</MathJax> <br />
                проведем окружность с центром {'S(1;–1)'} и радиусом SA, где {'A(0;1)'};
                {' \\(х1= -1; х2=3 \\) '}<br />
                Ответ: -1; 3
                <img src="/image001.png" alt="" />
            </p>
            <p className="disc-text">
                2)Решим уравнение <MathJax inline>{' \\(х^2 – 5х + 4 = 0  \\)'}</MathJax> <br />
                построим точки <MathJax inline>{' \\(S (-\\frac{b}{2a}; \\frac{a+c}{2a})  \\)'}</MathJax> — центр окружности и А(0;1); <br />
                <MathJax inline>{' \\( x = -\\frac{b}{2a} =  -\\frac{5}{2} = 2,5 \\\\ y = \\frac{a+c}{2a} = \\frac{1+4}{2} = 2,5 \\)'}</MathJax> <br />
                проведем окружность с центром {'S(2,5;2,5)'} и радиусом SA, где {'A(0;1)'};
                {' \\(х1= 1; х2=4 \\) '}<br />
                Ответ: 1; 4
                <img src="/image002.png" alt="" />
            </p>
            <p className="disc-text">
                3)Решим уравнение <MathJax inline>{' \\(х^2 + 4х + 4 = 0  \\)'}</MathJax> <br />
                построим точки <MathJax inline>{' \\(S (-\\frac{b}{2a}; \\frac{a+c}{2a})  \\)'}</MathJax> — центр окружности и А(0;1); <br />
                <MathJax inline>{' \\( x = -\\frac{b}{2a} =  \\frac{-4}{2} = -2 \\\\ y = \\frac{a+c}{2a} = \\frac{1+4}{2} = 2,5 \\)'}</MathJax> <br />
                проведем окружность с центром {'S(-2;2,5)'} и радиусом SA, где {'A(0;1)'};
                {' \\(х= -2 \\) '}<br />
                Ответ: -2
                <img src="/image003.png" alt="" />
            </p>
            <p className="disc-text">
                4)Решим уравнение <MathJax inline>{' \\(х^2 – 2х – 3 = 0  \\)'}</MathJax> <br />
                построим точки <MathJax inline>{' \\(S (-\\frac{b}{2a}; \\frac{a+c}{2a})  \\)'}</MathJax> — центр окружности и А(0;1); <br />
                <MathJax inline>{' \\( x = -\\frac{b}{2a} =  \\frac{2}{2} = 1 \\\\ y = \\frac{a+c}{2a} = \\frac{1+3}{2} = 2 \\)'}</MathJax> <br />
                проведем окружность с центром {'S(1;2)'} и радиусом SA, где {'A(0;1)'}; <br />
                Ответ: уравнение не имеет решения.
                <img src="/image004.png" alt="" />
            </p>
            <p className="disc-text">
                5)Решим уравнение <MathJax inline>{' \\(х^2 – 2х – 3 = 0  \\)'}</MathJax> <br />
                построим точки <MathJax inline>{' \\(S (-\\frac{b}{2a}; \\frac{a+c}{2a})  \\)'}</MathJax> — центр окружности и А(0;1); <br />
                <MathJax inline>{' \\( x = -\\frac{b}{2a} =  \\frac{3}{4} = 1 \\\\ y = \\frac{a+c}{2a} = \\frac{2+1}{4} = \\frac{3}{4} \\)'}</MathJax> <br />
                проведем окружность с центром <MathJax inline>{' \\(S(\\frac{3}{4};\\frac{3}{4}) \\)'}</MathJax> и радиусом SA, где A(0;1);
                {' \\(х1 = 0,5; х2=1\\) '} <br />
                Ответ: 0,5; 1
                <img src="/image005.png" alt="" />
            </p>
        </div>
    </main>
    </MathJaxContext>
          <footer className='footer'>{'©МОУ "Дубоссарская гимназия №1"'}</footer>
          </div>
  )}