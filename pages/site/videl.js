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
            <h2>Метод выделения полного квадрата</h2>
            <p class="disc-text">
                Определение
                Выделением полного квадрата из квадратного трёхчлена  \(ax^2 + bx + c\)
                называется процедура, в результате которой трёхчлен 
                приводится к виду \(a(x-x_0)^2 + y_0\), где \(x^0\) и \(y^0\)  некоторые 
                вещественные числа.
            </p>
            <p class="disc-text">
                Таким образом, при выделении полного квадрата необходимо понять, 
                чему равны \(x^0\) и \(y^0\), при которых выполняется равенство 
                $$ax^2 + bx + c = a(x-x_0)^2 + y_0$$
            </p>
            <p class="disc-text">
                Выделение полного квадрата основывается на формулах квадрата суммы и 
                квадрата разности:
                $$ a^2 + 2ab + b^2 = (a + b)^2 $$
                $$ a^2 - 2ab + b^2 = (a - b)^2 $$
            </p>
            <p class="disc-text">
                Самым сложным при выделении полного квадрата из квадратного трёхчлена  
                \(ax^2 + bx + c\)
                бывает понять, какое число нужно прибавить и отнять, 
                чтобы выделить квадрат суммы или квадрат разности. 
                Рассмотрим эту процедуру на примере.
            </p>
            <p class="disc-text">
                Пример 1. Выделим полный квадрат из квадратного трёхчлена \(x^2 - 6x + 8\) <br>

                Решение. Заметим, что \(6x = 2 * 3 * x\) и в выражении \(x^2 - 6x\) не хватает 
                слагаемого \(3^2\), 
                чтобы записать квадрат разности: \(x^2 - 6x + 3^2 = (x - 3)^2\). 
                Тогда к исходному квадратному 
                трёхчлену добавим \(3^2 = 9\) и, чтобы получить равное выражение, отнимем 9, 
                после чего выделим квадрат разности \((x - 3)^2\) и суммируем оставшиеся 
                подобные слагаемые (в данном случае  числа):
                $$ x^2 - 6x + 8 = x^2 - 2 * x * 3 + 9 - 9 + 8 = (x - 3)^2 - 1 $$
                Таким образом, привели квадратный трёхчлен \(x^2 - 6x + 8\) 
                к виду \(a(x-x_0)^2 + y_0\), где \(a = 1\), \(x_0 = 3\) и \(y_0 = -1\).
                Выделение полного квадрата бывает полезным при решении квадратных уравнений.
            </p>
        </div>
    </main>
    <script src="../js/main.js"></script>
</body>
</html>