let age = 20;

// if dua kondisi
// if (kondisi){} else {}
if (age >= 18) {
  // code akan dieksekusi apabila kondisi yang diberikan terpenuhi
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// if banyak kondisi
// if (kondisi1) {}
// else if (kondisi2) {}
// ... else if (kondisi n){}
// else {}
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// nested if
let isWeekend = true;
let isSunny = false;

if (isWeekend) {
  /* jika isWeekend true */
  if (isSunny) {
    /* jika isSunny bernilai true */
    console.log("Let's go for a picnic"); /* maka eksekusi code ini */
  } else {
    /* sebaliknya jika isSunny bernilai false */
    console.log("Watch a movie at home"); /* maka eksekusi nilai ini */
  }
} else {
  /* jika isWeekend false, berarti weekday */
  console.log("It's a weekday and time for work");
}

// type data undefined dan null dianggapn sebagai falsy value
// let x = undefined; dan let x = null;
// angka 0 juga dianggap falsy value -> let x = 0;
// empty string juga dianggap falsy value -> let x = "";
// yang artinya akan bernilai false dalam kondisi if
let x = null;
if (x) {
  /* memeriksa x truhty atau falsy */
  console.log("X does not exist");
} else {
  console.log(x);
}
