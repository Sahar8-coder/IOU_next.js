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
                <li class="header-menu-item"><a href="../pages/theory.html" class="header-menu-link">Теория</a></li>
                <li class="header-menu-item"><a href="../pages/example.html" class="header-menu-link">Примеры</a></li>
                <li class="header-menu-item"><a href="../pages/practice.html" class="header-menu-link">Практика</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">
        <div class="content disc-content">
            <h2>Решение квадратных уравнений с помощью номограммы</h2>
            <p class="disc-text">
                Это старый и в настоящее время забытый способ решения 
                квадратных уравнений, помещенный на с.83 сборника: 
                Брадис В.М. Четырехзначные математические таблицы. - 
                М., Просвещение, 1990.
                Таблица XXII. Номограмма для решения уравнения 
                z2 + pz + q = 0. Эта номограмма позволяет, 
                не решая квадратного уравнения, по его 
                коэффициентам определить корни уравнения.
                <img src="../img/nomo1.png" class="nomo1" alt="">
                Криволинейная шкала номограммы построена
                по формулам: \(OB = \frac{a}{1 + z}, AB = \frac{-z^2}{1 + z}\)
                Полагая ОС = р, ED = q, ОЕ = а (все в см), из
                подобия треугольников САН и CDF получим 
                пропорцию \(\frac{p - q}{p - AB} = \frac{a}{OB}\)
                откуда после подстановок и упрощений вытекает уравнение: \(z^2 + pz + q = 0\),
                причем буква z означает метку любой точки криволинейной шкалы.
            </p>
            <p class="disc-text">
                <img src="../img/nomo2.png" class="nomo2" alt="">
                Пример: \(3x^2+4x-7=0.\) <br>
                Разделим коэффициенты этого уравнения на 3. <br>
                \(x^2 + \frac{4}{3}x - \frac{7}{3} = 0,\) <br>
                \(x_1 = -\frac{7}{3}, x^2 = 1\)
            </p>
        </div>
    </main>
    <script src="../js/main.js"></script>
</body>
</html>