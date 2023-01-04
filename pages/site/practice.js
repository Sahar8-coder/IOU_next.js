import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Practice() {

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
        questionText: 'Решите уравнение \\((9x − 3)^2 = (6x + 3)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 9)^2 = −36x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-9'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{9}{13}x^2 = 6 \\frac{3}{13}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 − 58x + 45 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 − 6 = (x + 6)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-3.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 7)^2 = (8x + 7)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-1.4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−4x + 4)^2 = −64x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{7}x^2 = 1\\frac{2}{7}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−32x^2 − 36x − 7 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 − 9 = (4x − 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.85'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((9x − 7)^2 = (x − 7)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.4'},
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
        questionText: 'Решите уравнение \\(\\frac{2}{3}x^2 = 10\\frac{2}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−20x^2 + 19x − 3 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 + 5 = (2x + 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x + 3)^2 = (9x + 4)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x + 1)^2 = 20x\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{3}x^2 = -16\\frac{2}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(6x^2 − 11x − 10 = 0\\). Если уравнение имеет более одного корня, в ответ запишите 6x2 − 11x − 10 = 0 из них.',
        isText: true,
        answerOptions: [
            {answerText: '2.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(64x^2 − 3 = (8x − 5)2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.35'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 1)^2 = (6x − 3)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x − 3)^2 = −48x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{9}x^2 = -\\frac{8}{9}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−5x^2 − 13x − 6 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 9 = (x − 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x − 7)^2 = (4x − 4)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 10)^2 = 80x\\).',
        isText: true,
        answerOptions: [
            {answerText: '5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{6}x^2 = -4\\frac{1}{6}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−2x^2 + 11x − 5 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 + 3 = (4x − 3)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x + 2)^2 = (x − 4)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x + 1)^2 = −4x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{7}x^2 = \\frac{4}{7}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−6x^2 − 17x − 10 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 − 3 = (5x − 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.56'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((3x − 7)^2 = (5x + 1)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−2x − 12)^2 = 96x\\).',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{14}x^2 = 5\\frac{11}{14}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-9'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 14x + 48 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(36x^2 + 7 = (6x + 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((8x + 6)^2 = (4x + 3)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−6x − 3)^2 = 72x\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{2}{3}x^2 = 2\\frac{2}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−2x^2 + 9x + 18 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 + 1 = (2x + 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x − 4)^2 = (x − 1)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.625'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 7)^2 = −28x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{3}x^2 = -1\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 − 3x − 18 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 + 6 = (5x + 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x − 3)^2 = (x + 6)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−4x + 6)^2 = −96x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{7}x^2 = -11\\frac{4}{7}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-9'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 + 8x − 3 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 + 8 = (4x − 4)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x + 7)^2 = (3x − 9)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x − 4)^2 = −80x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{7}{11}x^2 = 5\\frac{8}{11}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−24x^2 + 58x − 35 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(81x^2 + 9 = (9x − 3)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 9)^2 = (3x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x − 6)^2 = −120x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{7}x^2 = -5\\frac{1}{7}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−3x^2 − 19x − 20 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 − 8 = (x − 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((9x + 5)^2 = (7x + 9)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x + 5)^2 = 100x\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{13} = -1\\frac{12}{13}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−3x^2 − 31x − 56 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(64x^2 + 9 = (8x + 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((7x + 2)^2 = (3x + 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 3)^2 = −12x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{7}{15}x^2 = 1\\frac{13}{15}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(5x^2 − 31x + 30 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 + 5 = (2x + 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((8x − 2)^2 = (2x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x + 2)^2 = 32x\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{5}{13}x^2 = 5\\frac{2}{13}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−15x^2 + 23x − 4 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 − 4 = (2x + 4)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.25'},
        ]
    },
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
    },
    {
        questionText: 'Решите уравнение \\((7x + 7)^2 = (3x − 1)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 4)^2 = −16x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{13}x^2 = 2\\frac{10}{13}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−x^2 − 2x + 35 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 + 2 = (5x − 4)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.35'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x − 5)^2 = (x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x − 13)^2 = 52x\\).',
        isText: true,
        answerOptions: [
            {answerText: '13'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 21\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−36x^2 − 13x − 1 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 + 8 = (2x − 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((3x − 1)^2 = (7x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x + 5)^2 = −20x\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 12\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(2x^2 − 9x + 7 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 8 = (x + 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
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
    },
    {
        questionText: 'Решите уравнение \\((2x + 5)^2 = (4x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 1)^2 = −8x\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{3}x^2 = -2\\frac{2}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(45x^2 - 23x + 2 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 3 = (x − 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '2.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x − 9)^2 = (3x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x + 10)^2 = 40x\\).',
        isText: true,
        answerOptions: [
            {answerText: '10'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{3}x^2 = -8\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(20x^2 + 23x + 6 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 − 6 = (5x + 2)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((9x + 5)^2 = (x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−4x + 6)^2 = −96x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 16\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−3x^2 − 32x − 45 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-9'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(16x^2 − 7 = (4x + 1)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((6x + 3)2 = (4x − 8)2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−3x − 3)^2 = 36x\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{12}x^2 = 0.75\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(30x^2 + 29x + 4 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 − 1 = (2x + 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((3x − 6)^2 = (2x − 3)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x + 4)^2 = 64x\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{1}{3}x^2 = -27\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-9'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(6x^2 − 13x + 2 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 4 = (x − 4)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 8)^2 = (8x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x − 4)^2 = −64x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{7}x^2 = -4\\frac{4}{7}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(6x^2 + x − 1 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 + 2 = (5x − 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((6x + 8)^2 = (4x + 3)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x − 3)^2 = 12x\\).',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{7}x^2 = \\frac{4}{7}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−36x^2 − 25x − 4 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(64x^2 + 9 = (8x − 3)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((9x + 4)^2 = (x − 2)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 14)^2 = 112x\\).',
        isText: true,
        answerOptions: [
            {answerText: '7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{3}x^2 = -16\\frac{2}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(5x^2 + 6x + 1 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(49x^2 + 1 = (7x − 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x − 1)^2 = (4x − 8)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−2x + 7)^2 = −56x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-3.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{9}x^2 = -3\\frac{5}{9}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−x^2 − 7x + 8 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 − 3 = (2x − 3)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 2)^2 = (3x − 9)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((12x + 3)^2 = 144x\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.25'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{10}{13}x^2 = -6\\frac{12}{13}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−x^2 − 2x + 3 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(25x^2 + 3 = (5x + 6)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-0.55'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x + 6)^2 = (3x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-5.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−x − 15)^2 = 60x\\).',
        isText: true,
        answerOptions: [
            {answerText: '15'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 16\\frac{1}{3}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−2x^2 + 21x − 54 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '4.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 7 = (x − 5)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1.8'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((9x − 8)^2 = (x − 9)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.125'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((4x + 7)^2 = 112x\\).',
        isText: true,
        answerOptions: [
            {answerText: '1.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{3}x^2 = 3\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−45x^2 + 58x − 16 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0.4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(64x^2 − 7 = (8x − 1)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 1)^2 = (3x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((x − 7)^2 = −28x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-7'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(\\frac{1}{11}x^2 = 3\\frac{3}{11}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−3x^2 − 14x − 15 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(4x^2 + 7 = (2x + 7)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '-1.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 5)^2 = (4x − 5)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '0'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−2x − 12)^2 = 96x\\).',
        isText: true,
        answerOptions: [
            {answerText: '6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{3}x^2 = -6\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−3x^2 + 17x − 24 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '3'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(x^2 + 9 = (x − 9)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((5x − 6)^2 = (6x + 6)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-12'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((2x + 10)^2 = 80x\\).',
        isText: true,
        answerOptions: [
            {answerText: '5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{3}{13}x^2 = -3\\frac{9}{13}\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-4'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(15x^2 − 64x + 64 = 0\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '1.6'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(49x^2 − 6 = (7x − 6)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '0.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((6x + 9)^2 = (9x + 9)^2\\). Если уравнение имеет более одного корня, в ответ запишите меньший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-1.2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\((−2x + 15)^2 = −120x\\).',
        isText: true,
        answerOptions: [
            {answerText: '-7.5'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(-\\frac{2}{11}x^2 = -\\frac{8}{11}\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '2'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(−20x2 − 47x − 24 = 0\\). Если уравнение имеет более одного корня, в ответ запишите больший из них.',
        isText: true,
        answerOptions: [
            {answerText: '-0.75'},
        ]
    },
    {
        questionText: 'Решите уравнение \\(9x^2 − 9 = (3x − 6)^2\\).',
        isText: true,
        answerOptions: [
            {answerText: '1.25'},
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

  const document = (
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
                            {}
                        </div>
                        <div className="answer_section">
                                < span jsfor='message'>Ответ</span>
                                <br />
                                < textarea type='text' 
                                onChange={(event) => setInput(event.target.value)}
                                ></textarea>
                                <br />
                                < button type='submit'
                                onClick={(e)=>{textSubmit(input, questions[currentQuestion].answerOptions[0].answerText, e)}}
                                ></button>
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