// ! Task-1: Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// function ededAnalizi(eded) {
//     let reqemler = Array.from(String(eded), Number);

//     const cem = reqemler.reduce((acc, curr) => acc + curr, 0);
//     const hasil = reqemler.reduce((acc, curr) => acc * curr, 1);
//     const orta = cem / reqemler.length;

//     return {
//         cem: cem,
//         hasil: hasil,
//         orta: orta
//     };
// }

// let eded = parseInt(prompt("Bir 3 rəqəmli ədəd daxil edin:"));
// let analiz = ededAnalizi(eded);

// console.log("Ədədin rəqəmlərinin cəmi: " + analiz.cem);
// console.log("Ədədin rəqəmlərinin hasilı: " + analiz.hasil);
// console.log("Ədədin ortası: " + analiz.orta);

// ! Task-2: Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// function butunBolenler(eded) {
//     let bolenler = [];

//     for (let i = 1; i <= eded / 2; i++) {
//         if (eded % i === 0) {
//             bolenler.push(i);
//         }
//     }
//     bolenler.push(eded);

//     return bolenler;
// }

// let eded = parseInt(prompt("Bir ədəd daxil edin:"));
// let bolenler = butunBolenler(eded);

// console.log(`Ədədin bölənləri: ${bolenler.join(', ')}`);


// ! Task-3: Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// function bolenSayi(eded) {
//     let bolenlerinSayi = 0;

//     for (let i = 1; i <= eded / 2; i++) {
//         if (eded % i === 0) {
//             bolenlerinSayi++;
//         }
//     }
//     bolenlerinSayi++;

//     return bolenlerinSayi;
// }

// let eded = parseInt(prompt("Bir ədəd daxil edin:"));
// let bolenlerinSayi = bolenSayi(eded);

// console.log(`Ədədin bölənlərinin sayı: ${bolenlerinSayi}`);

// ! Task-4: for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//     let hasil = i * i;
//     console.log(`${i} x ${i} = ${hasil}`);
// }


// ! Task-5: for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//     let hasilKub = Math.pow(i, 3);
//     console.log(`${i}    ${i*i}     ${hasilKub}`);
// }


// ! Task-6: 0 - 100 arası yalnız sadə ədədləri console'da çap edin

// console.log("Sadə ədədlər 0-dan 100-ə qədər:");

// for (let i = 0; i <= 100; i++) {
//     if (i === 0 || i === 1) {
//         continue;
//     }
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }


// ! Task-7: 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let cutCemi = 0;
// let tekCemi = 0;

// for (let i = 0; i <= 100; i += 2) {
//     cutCemi += i;
// }

// for (let i = 1; i <= 100; i += 2) {
//     tekCemi += i;
// }

// console.log("Cüt ədədlərin cəmi:", cutCemi);
// console.log("Tək ədədlərin cəmi:", tekCemi);

// ! Task-8: studentlərin ortalama score'nu yeni bir arrayda yığın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];

// function ortalamaHesabla(scores) {
//       const total = scores.reduce((acc, curr) => acc + curr, 0);
//       return total / scores.length;
// }

// const ortalamaScores = students.map(student => ({
//       name: student.name,
//       averageScore: ortalamaHesabla(student.scores)
// }));
  
// console.log(ortalamaScores);


// ! Task-9: webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
// ];

// const uzunElementler = webTechs.filter(tech => tech.length > 4);

// console.log(uzunElementler);


// ! Task-10: product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
// ];

// const qiymetlerCemi = products.reduce((total, product) => total + product.price, 0);
// const qiymetlerOrta = qiymetlerCemi / products.length;

// console.log("Məhsulların qiymətlərinin cəmi:", qiymetlerCemi);
// console.log("Məhsulların qiymətlərinin ortalaması:", qiymetlerOrta);


// ! Task-11: countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// let baslayanABitenler = countries.filter(country => country.startsWith("A") && country.endsWith("a"));

// console.log("A ilə başlayıb a ilə bitən ölkələr:", baslayanABitenler);


// ! Task-12: Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function bolenSayi(eded) {
//     let bolenlerinSayi = 0;

//     for (let i = 1; i <= eded / 2; i++) {
//         if (eded % i === 0) {
//             bolenlerinSayi++;
//         }
//     }
//     bolenlerinSayi++;

//     return bolenlerinSayi;
// }

// let eded = parseInt(prompt("Bir ədəd daxil edin:"));
// let bolenlerinSayi = bolenSayi(eded);

// console.log(`Ədədin bölənlərinin sayı: ${bolenlerinSayi}`);


// ! Task-13: daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function bosluqSayi(cumle) {
//     return cumle.split(" ").length - 1;
// }

// let cumle = prompt("Bir cumle daxil edin:");

// console.log("Cümlədəki boşluqların sayı:", bosluqSayi(cumle));


// ! Task-14: printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)

// function printFullName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }

// printFullName(prompt("adinizi daxil edin"), prompt("soyadinizi daxil edin"));


// ! Task-15: daxil edilən ədədin kvadratını return edən funksiya yazın

// function kvadrat(n) {
//     return n * n;
// }

// let eded = parseInt(prompt("Bir ədəd daxil edin:"));
// let kvadratEded = kvadrat(eded);
// console.log("Ədədin kvadratı:", kvadratEded);


// ! Task-16: 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function subtruct(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(subtruct(2, 3));
// console.log(divide(2, 3));


// ! Task-17: Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin

// function calculator(a, b, operation) {
//     if (operation == "+") {
//         return a + b;
//     } else if (operation == "-") {
//         return a - b;
//     } else if (operation == "%") {
//         return a % b;
//     } else if (operation == "*") {
//         return a * b;
//     } else if (operation == "/") {
//         return a / b;
//     } else {
//         return "Düzgün operator daxil edin";
//     }   
// }
// console.log(calculator(2, 3, "+"));
// console.log(calculator(2, 3, "-"));
// console.log(calculator(2, 3, "%"));
// console.log(calculator(2, 3, "*"));
// console.log(calculator(2, 3, "/"));


// ! Task-18: arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//     return array[0] + array[array.length - 1];
// }

// console.log(getSum([1, 2, 3, 4, 5]));


// ! Task-19: arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// const getSum = (array) => {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));


// ! Task-20: arrayin daxilindəki max elementi return edən funksiya yazın

// const getMax = (array) => {
//     let max = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

// console.log(getMax([1, 2, 3, 4, 5]));


// ! Task-21: filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
// ];
// const filterEmployees = (array) => {
//     const filteredEmployees = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].salary > 60000) {
//             filteredEmployees.push(array[i]);
//         }
//     }
//     return filteredEmployees;
// }

// console.log(filterEmployees(employees));


// ! Task-22: verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// function findElement(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findElement([1, 2, 3, 4, 5], 6));


// ! Task-23: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// function bosluqSayi(sampleNews) {
//     return sampleNews.split(" ").length - 1;
// }

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// console.log("Cümlədəki boşluqların sayı:", bosluqSayi(sampleNews));


// ! Task-24: Daxil edilən iki arrayi birləşdirən funksiya yazın

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// function arrayBirlesdir(array1, array2) {
//     const array3 = [];

//     for (let i = 0; i < array1.length; i++) {
//         array3.push(array1[i]);
//     }
//     for (let i = 0; i < array2.length; i++) {
//         array3.push(array2[i]);
//     }
//     return array3;
// }

// console.log(arrayBirlesdir(array1, array2));


// ! Task-25: Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.

// function yazdirma(a, b) {
//     let array = [];
//     for (let i = 0; i < b; i++) {
//         array.push(a);
//     }
//     return array;
    
// }
// console.log(yazdirma(1, 5));


// ! Task-26: Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 
// ! 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// function arrayHereketEtdirme(array, hazirkiMovqeyi, hansiMovqeyegetmelidir) {
//     let array2 = [];
//     for (let i = 0; i < array.length; i++) {
//         if (i == hansiMovqeyegetmelidir) {
//             array2.push(array[hazirkiMovqeyi]);
//         } else {
//             array2.push(array[i]);
//         }
//     }
//     return array2;
// }
// console.log(arrayHereketEtdirme([1, 2, 3, 4, 5], 2, 3));


// ! Task-27: Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.

// function range(first, last) {
//     let array = [];
//     for (let i = first; i <= last; i++) {
//         array.push(i);
//     }
//     return array;
// }
// console.log(range(1, 10));