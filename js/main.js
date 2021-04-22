// Математические операторы

let x;
x = 5 + 15;
console.log(`Результат сложения: ${x}`);

x = 15 - 5;
console.log(`Результат вычитание: ${x}`);

x = 5 * 15;
console.log(`Результат умножения: ${x}`);

x = 15 / 5;
console.log(`Результат деления: ${x}`);

x = 15 % 5;
console.log(`Результат деления с остатком: ${x}`);

x = 15 ** 2;
console.log(`Результат возведения в степень: ${x}`);

// Специальные возможности операторов


// Применение оператора сложения к строкам

let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

// Если в выражении есть строка, то есть если хотя бы
//один операнд(переменная) будет строкой, то конечный
//результат будт тоже строкой

let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

// Порядок значений не имеет

let resultThree = 58 + " Фрилансер ";
console.log(resultThree);

// Казусы

let resultFour = 2 + "2";
console.log(resultFour);

// Операции до сложения со строкой
//выполняется как обычно

let resultFive = 58 - 20 + " Фрилансер ";
console.log(resultFive);


// Работа других операторов

let resultSix = "25" - 5;
console.log(resultSix);
console.log(typeof resultSix); 

//или

let resultSeven = 10 * "80";
console.log(resultSeven);
console.log(typeof resultSeven);

//Недопустимая операция

let resultEight = 10 * "Фрилансер";
console.log(resultEight);
console.log(typeof resultEight);

// Унарный оператор сложения +

//Со строками
let resultNine = +"25";
console.log(resultNine);
console.log(typeof resultNine);

//С числами
let resultTen = +10;
console.log(resultTen);
console.log(typeof resultTen);