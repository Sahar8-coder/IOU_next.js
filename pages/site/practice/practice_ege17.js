import Link from 'next/link';
import Head from 'next/head';
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
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const questions = [
    {
        questionText: 'Решите уравнение \\((3x + 3)^2 = (2x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−5x − 1)^2 = 20x\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{3}{7}x^2 = -10\\frac{5}{7}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−28x^2 − 23x − 4 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 + 9 = (5x + 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
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
    }
  } 

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  const textSubmit = (text, correct, e) => {
    if (text == correct) {
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
                    <li className="header-menu-item"><Link href="/" className="header-menu-link">{'\\(\\sf{ax^2 + bx + c = 0}\\)'}</Link></li>
                </ul>
            </nav>
        </header>
        <main className="main">
            <div className="content_main">
                {
                    showScore
                        ?   <div className="section_score">
                                <div>Правильных ответов {score} из {questions.length}</div>
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
                                < span jsfor='message'>Ответ</span>
                                <br />
                                < textarea type='text' 
                                onChange={(event) => setInput(event.target.value)}
                                ></textarea>
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
                                <span>Вопрос {currentQuestion + 1}</span> /{questions.length}
                            </div>
                            <MathJax><div className="question_text" id="question_text">{questions[currentQuestion].questionText}</div></MathJax>
                        </div>
                        <div className="answer_section">
                            {questions[currentQuestion].answerOptions.map((item,key) => (
                            <button key={key}
                                onClick={() => handleAnswerOptionClick(item.isCorrect)}
                            >{item.answerText}</button>
                            )
                            )}
                        </div>
                            </div>
                }
            </div>
          </main>
          </MathJaxContext>
          </div>
  )
}