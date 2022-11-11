<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Квадратные Уравнения</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/normalize.css">
    <script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
    </script>
</head>
<body>
    <header class="header">
        <nav class="header-nav">
            <ul class="header-menu">
                <li class="header-menu-item menu-logo"><a href="../index.html"><img src="../img/logo.svg" alt="#" class="logo"></a></li>
                <li class="header-menu-item"><a href="../pages/theory.html" class="header-menu-link">\(ax^2 + bx + c = 0\)</a></li>
                <li class="header-menu-item"><a href="../pages/practice.html" class="header-menu-link">Практика</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">
        <div class="content disc-content">
            <h3 class="disc-text">Неполные квадратные уравнения</h3>
            <p class="disc-text">
                Бывает, что квадратное уравнение несколько отличается от того, 
                что дано в определении. Например:
            </p>
            <ul class="disc-menu">
                <li class="disc-item">x² + 9x = 0;</li>
                <li class="disc-item">x² - 16 = 0.</li>
            </ul>
            <p class="disc-text">
                Несложно заметить, что в этих уравнениях отсутствует одно из слагаемых. 
                Такие квадратные уравнения решаются даже легче, чем стандартные: 
                в них даже не потребуется считать дискриминант. Итак, введем новое понятие:
            </p>
            <p class="disc-text">
                Уравнение <strong><i> ax² + bx + c = 0 </i></strong>называется неполным квадратным уравнением, 
                если <strong><i>b = 0</i></strong> или <strong><i>c = 0,</i></strong> 
                т.е. коэффициент при переменной x или 
                свободный элемент равен нулю.
            </p>
            <p class="disc-text">
                Разумеется, возможен совсем тяжелый случай, когда оба этих коэффициента 
                равны нулю: <strong><i>b = c = 0.</i></strong> В этом случае уравнение принимает вид 
                <strong><i>ax2 = 0.</i></strong> 
                Очевидно, такое уравнение имеет единственный корень: <strong><i>x = 0.</i></strong>
            </p>
            <p class="disc-text">
                Рассмотрим остальные случаи. Пусть b = 0, тогда получим неполное 
                квадратное уравнение вида ax² + c = 0. Немного преобразуем его:
            </p>
            <img src="../img/formula6.png" alt="#" class="disc-formula formula1">
            <p class="disc-text center">Решение неполного квадратного уравнения</p>
            <p class="disc-text">
                Поскольку арифметический квадратный корень существует только из неотрицательного числа, 
                последнее равенство имеет смысл исключительно при
                <img src="../img/formula7.png" alt="#" class="disc-formula formula7">.
                Вывод:
            </p>
            <p class="disc-text">
                1.	Если в неполном квадратном уравнении вида ax² + c = 0 выполнено неравенство 
                <img src="../img/formula7.png" alt="#" class="disc-formula formula7">,
                корней будет два. Формула дана выше;<br>
                2.	Если же 
                <img src="../img/formula8.png" alt="#" class="disc-formula formula7">,
                корней нет.
            </p>
            <p class="disc-text">
                Как видите, дискриминант не потребовался — в неполных квадратных уравнениях 
                вообще нет сложных вычислений. На самом деле даже необязательно помнить 
                неравенство 
                <img src="../img/formula7.png" alt="#" class="disc-formula formula7">
                . Достаточно выразить величину x² и посмотреть, что стоит с другой стороны
                от знака равенства. Если там положительное число — корней будет два. 
                Если отрицательное — корней не будет вообще.
            </p>
            <p class="disc-text">
                Теперь разберемся с уравнениями вида <strong><i>ax² + bx = 0,</i></strong>  в которых свободный элемент 
                равен нулю. Тут все просто: корней всегда будет два. 
                Достаточно разложить многочлен на множители:
            </p>
            <img src="../img/formula9.png" alt="#" class="disc-formula formula1">
            <p class="disc-text center">Вынесение общего множителя за скобку</p>
            <p class="disc-text">
                Произведение равно нулю, когда хотя бы один из множителей равен нулю. 
                Отсюда находятся корни. В заключение разберем несколько таких уравнений:
            </p>
            <p class="disc-text">
                Задача. Решить квадратные уравнения: <br>
                <strong>x² - 7x = 0; </strong>   ⇒ x · (x - 7) = 0    ⇒ x1 = 0; x2 = -(-7)/1 = 7.<br>
                <strong>5x² + 30 = 0;</strong>    ⇒ 5x² = -30    ⇒ x2 = -6. Корней нет, т.к. квадрат не может быть равен отрицательному числу.<br>
                <strong>4x² - 9 = 0.</strong>     ⇒ 4x² = 9    ⇒ x2 = 9/4    ⇒ x1 = 3/2 = 1,5;    x2 = -1,5.<br>
            </p>
        </div>
    </main>
    <script src="../js/main.js"></script>
</body>
</html>