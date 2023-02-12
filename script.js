
// 1

let numbers = [1, 5, 4, 10, 0, 3];
for (let item of numbers) {
    if (item != 10) {
        console.log(item);
    } else {
        break;
    }
}

// 2

let numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4)); 

// 3

let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(arr);

// 4
function getRandom() {
  c = Math.floor(Math.random() * 10);
  return c;
}

let arr1 = [];
for (let i = 0; i < 6; i++) {
  const randomElement = getRandom();
  arr1.push(randomElement);
}
console.log(arr1);
let arr5 = [];
for (let i = 0; i < arr1.length; i++) {
  if(arr1[i] % 2 === 0) {
      arr5.push(arr1[i]);
  }
}
console.log(arr5);


// 5?

let arr2 =[];
for(let i=0,n=1;i<4;i++,n++){
  arr2[i]=[];
  for(let j=i;j<n;j++)
  {
    arr2[i][j]=n;
  }
}
console.log(arr2);

// 6
let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

// 7

let arr3 = [9, 8, 7, 'a', 6, 5];
arr3.sort();
arr3.pop();
console.log(arr3);

// 8
let arr4 = [9, 8, 7, 6, 5];
number = prompt("Введите число от 1 до 10");
number = Number(number);
let search = arr4.includes(number);

if (search == true) {
console.log("Число содержится в массиве");
} else {
console.log("Число отсутствует в массиве");
}

// 9

let alphabet = 'abcdef';
alphabet = alphabet.split('');
alphabet.reverse();
console.log(alphabet);

//10
function getRandom1() {
  a = Math.floor(Math.random() * 10);
  return a;
}

let arr6 = [];
for (let i = 0; i < 6; i++) {
  const randomElement = getRandom1();
  arr6.push(randomElement);
}
console.log(arr6);
let sum = 0;
for (let i = 0; i < arr6.length; i++) {
  sum += arr6[i];
}

console.log("Среднее арифметическое " + (sum/arr6.length));
  


//11 решено
let arr7 = [[1, 2, 3,],[4, 5, 6]];

let x = arr7[0];
let y = arr7[1];
let resalt = x.concat(y);
console.log(resalt);





//12
function getRandom2() {
  d = Math.floor(Math.random() * 10);
  return d;
}

let arr8 = [];
for (let i = 0; i < 6; i++) {
  const randomElement = getRandom2();
  arr8.push(randomElement);
}
console.log(arr8);
let summ = 0;
for (let i = 0; i < arr8.length; i++) {
  if (i < arr8.length -1) {
    summ = arr8[i]+arr8[i+1];
    console.log("Сумма текущего и следующего элементов массива: " + summ);
  } 
 
}






  


