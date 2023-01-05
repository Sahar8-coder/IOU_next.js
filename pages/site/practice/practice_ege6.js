import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function PracticeEge6() {

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
        questionText: 'Решите уравнение \\((x − 9)^2 = (3x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−2x − 5)^2 = 40x\\).',
        isText: true,
        answerOptions: [
            {answerText: '2.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{3}x^2=-16\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        isText: true,
        answerOptions: [
            {answerText: '7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−10x^2 + 7x − 1 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(9x^2 − 8 = (3x + 8)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((6x + 9)^2 = (2x − 7)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        isText: true,
        answerOptions: [
            {answerText: '-0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x + 9)^2 = 144x\\).',
        isText: true,
        answerOptions: [
            {answerText: '2.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{7} = -5\\frac{1}{7}\\). Если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−2x^2 − 11x − 5 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(9x^2 − 8 = (3x − 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((6x − 8)^2 = (2x − 4)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x − 1)^2 = 4x\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{3}x^2 = -24\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(7x^2 + 12x + 5 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 − 1 = (5x − 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x − 3)^2 = (3x + 1)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 8)^2 = −64x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 1\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−2x^2 − 11x − 9 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-4.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 − 6 = (x − 3)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '2.5'},
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