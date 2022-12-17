import Link from 'next/link'
import Head from 'next/head';
import { useState } from 'react'
import { useEffect } from 'react';

export default function practice() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const questions = [
    {
        questionText: '2 + 2',
        answerOptions: [
            {answerText: '4', isCorrect: true},
            {answerText: '2', isCorrect: false},
            {answerText: '5', isCorrect: false},
            {answerText: '3', isCorrect: false}

        ]
    },
    {
        questionText: '2 + 3',
        answerOptions: [
            {answerText: '4', isCorrect: false},
            {answerText: '2', isCorrect: false},
            {answerText: '5', isCorrect: true},
            {answerText: '3', isCorrect: false}

        ]
    },
    {
        questionText: '2 + 4',
        answerOptions: [
            {answerText: '4', isCorrect: false},
            {answerText: '6', isCorrect: true},
            {answerText: '5', isCorrect: false},
            {answerText: '3', isCorrect: false}

        ]
    },
    {
        questionText: '2 + 5',
        answerOptions: [
            {answerText: '4', isCorrect: false},
            {answerText: '2', isCorrect: false},
            {answerText: '5', isCorrect: false},
            {answerText: '7', isCorrect: true}

        ]
    }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handleAnswerOptionClick = (isCorrect) => {
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

  const document = (
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
                        :   <div className="quizz">
                        <div className="question_section">
                            <div className="question_count">
                                <span>Вопрос {currentQuestion + 1}</span> /{questions.length}
                            </div>
                            <div className="question_text">{questions[currentQuestion].questionText}</div>
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
          </div>
          )

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

  return (document)
}