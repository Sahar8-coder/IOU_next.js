import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function PracticeEge1() {
    
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
  const [email_teach, setEmail_teach] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const questions = [
    {
        questionText: 'Решите уравнение и выберите верный ответ \\(x^2 - x\\sqrt{19} - 38 = 0\\).',
        isText: false,
        answerOptions: [
            {answerText: '\\(3\\sqrt{26}; -\\sqrt{26}\\)', isCorrect: false},
            {answerText: '\\(2\\sqrt{19}; -\\sqrt{19}\\)', isCorrect: true},
            {answerText: '\\(3\\sqrt{19}; -\\sqrt{19}\\)', isCorrect: false},
            {answerText: '\\(2\\sqrt{26}; -\\sqrt{26}\\)', isCorrect: false}
        ]
    },
    {
        questionText: 'Решите уравнение и выберите верный ответ \\(4x^2 − 16x + 11 = 0\\).',
        isText: false,
        answerOptions: [
            {answerText: '\\(\\frac{4 - \\sqrt5}{3}; \\frac{4 + \\sqrt5}{3}\\)', isCorrect: false},
            {answerText: '\\(\\frac{6 - \\sqrt5}{2}; \\frac{6 + \\sqrt5}{2}\\)', isCorrect: false},
            {answerText: '\\(\\frac{9 - \\sqrt5}{3}; \\frac{9 + \\sqrt5}{3}\\)', isCorrect: false},
            {answerText: '\\(\\frac{4 - \\sqrt5}{2}; \\frac{4 + \\sqrt5}{2}\\)', isCorrect: true}
        ]
    },
    {
        questionText: 'Решите уравнение и выберите верный ответ \\((11x − 13)(−14x + 10) = 0\\).',
        isText: false,
        answerOptions: [
            {answerText: '\\(\\frac{13}{11}; \\frac{4}{9}\\)', isCorrect: false},
            {answerText: '\\(\\frac{11}{13}; \\frac{5}{7}\\)', isCorrect: false},
            {answerText: '\\(\\frac{13}{11}; \\frac{5}{7}\\)', isCorrect: true},
            {answerText: '\\(\\frac{11}{13}; \\frac{5}{9}\\)', isCorrect: false}
        ]
    },
    {
        questionText: 'Решите уравнение и выберите верный ответ \\(-\\frac{5}{4}x^2 + \\frac{1}{4} + \\frac{1}{8}x = 0\\).',
        isText: false,
        answerOptions: [
            {answerText: '\\(-\\frac{2}{5}; \\frac{1}{2}\\)', isCorrect: true},
            {answerText: '\\(-\\frac{3}{5}; \\frac{1}{4}\\)', isCorrect: false},
            {answerText: '\\(-\\frac{4}{5}; \\frac{1}{3}\\)', isCorrect: false},
            {answerText: '\\(-\\frac{3}{5}; \\frac{1}{4}\\)', isCorrect: false}
        ]
    },
    {
        questionText: 'Решите уравнение и выберите верный ответ \\(x^2 − 14x − 62 = 0\\).',
        isText: false,
        answerOptions: [
            {answerText: '\\(5 - \\sqrt{121}; 5 + \\sqrt{121}\\)', isCorrect: false},
            {answerText: '\\(7 - \\sqrt{111}; 7 + \\sqrt{111}\\)', isCorrect: true},
            {answerText: '\\(7 - \\sqrt{121}; 7 + \\sqrt{121}\\)', isCorrect: false},
            {answerText: '\\(5 - \\sqrt{111}; 5 + \\sqrt{111}\\)', isCorrect: false}
        ]
    }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [showScore, setShowScore] = useState(false)
  function handleAnswerOptionClick (isCorrect) {
    if (isCorrect) {
        setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
    }
    else {
        setShowScore(true)
        setMessage(score + 1)
    }
  } 

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }
  var textfor = ''
  const textSubmit = (text, correct, e) => {
textfor = text.replace(/ /g,'').replace(/\,/g, '.')
    textfor = textfor.split(' ').join('')
    if (textfor == correct) {
        handleAnswerOptionClick(true)
    }
    else {
            handleAnswerOptionClick(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message,
        email_teach
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
            setEmail_teach('4')
        }
    })
  } 
  () => {
    var test_input = document.querySelector('#answer_input')
    var test_btn = document.querySelector('#test_next')
    test_input.addEventListener("keyup", function(event) {
        // Число 13 в "Enter" и клавиши на клавиатуре
        if (event.keyCode === 13) {
        // При необходимости отмените действие по умолчанию
        event.preventDefault();
        // Вызов элемента button одним щелчком мыши
        test_btn.click();
        }
        });
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
            <div className="content_main_test">   true
            <h2 className="types-header"><Link href='/site/practice'>
                <img src="/pencil.png" alt="" width={50}/>
            </Link>Квадратные уравнения, имеющие корни — радикалы 5</h2>
                <div className="test">
                {
                    showScore
                        ?   <div className="section_score">
                                <div>Правильных ответов {score} из {questions.length}</div>
                                {}
                                < form className="form" >
                                    < label jsfor='name'>Фамилия, имя, класс</label>
                                    < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className="name label" />
                                    <br />
                                    < label jsfor='email'>Email</label>
                                    < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className="email label" />
                                    <br />
                                    < label jsfor='email_teach'>Email учителя</label>
                                    < input type='email' onChange={(e)=>{setEmail_teach(e.target.value)}} name='email_teach' className="email_teach label" />
                                    <br />
                                    < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
                                </form >
                                <button className='refresh_ btn'
                                    onClick={refresh}
                                >Попробовать еще раз</button>
                            </div>
                        :
                        questions[currentQuestion].isText
                        ?
                        <div className="quizz">
                        <div className="question_section">
                            <div className="question_count">
                                <span>Если ответов несколько, вводить через ;</span> <br />
                                <span>Вопрос {currentQuestion + 1}</span> /{questions.length}
                            </div>
                            <div className="question_text" jsfor="question_text">
                                <MathJax
                                    hideUntilTypeset={"first"}
                                    inline
                                    dynamic
                                >{questions[currentQuestion].questionText}</MathJax>
                            </div>
                        </div>
                        <div className="answer_section">
                                < span jsfor='message' className='answer_span'>Ответ</span>
                                <br />             	
                                <input className='answer_input' type="text" name="text" onChange={(event) => setInput(event.target.value)}/>
                                <br />
                                < button type='submit' className='test_next'
                                onClick={(e)=>{textSubmit(input, questions[currentQuestion].answerOptions[0].answerText, e)}}
                                >Далее</button>
                        </div>
                            </div>
                        :
                        <div className="quizz">
                        <div className="question_section">
                            <div className="question_count">
                                <span>Если ответов несколько, вводить через ;</span> <br />
                                <span>Вопрос {currentQuestion + 1}</span> /{questions.length}
                            </div>
                            <MathJax hideUntilTypeset={"first"}
                                    inline
                                    dynamic><div className="question_text" id="question_text">{questions[currentQuestion].questionText}</div></MathJax>
                        </div>
                        <div className="answer_section">
                        <MathJax hideUntilTypeset={"first"}
                                    inline
                                    dynamic>
                            {questions[currentQuestion].answerOptions.map((item,key) => (
                            <button key={key} className='test_next'
                                onClick={() => handleAnswerOptionClick(item.isCorrect)}
                            >{item.answerText}</button>
                            )
                            )}
                            </MathJax>
                        </div>
                            </div>
                }
                </div>
            </div>
          </main>
          </MathJaxContext>
          <footer className='footer'></footer>
          </div>
  )
}