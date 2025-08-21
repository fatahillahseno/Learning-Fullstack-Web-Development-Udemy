// variabel global adalah variabel yang dapat diakses di seluruh bagian kode, berada di luar fungsi atau blok.
// scope global adalah ruang lingkup di mana variabel global dapat diakses, yaitu di seluruh kode.

// variabel lokal adalah variabel yang hanya dapat diakses di dalam fungsi atau blok tempat ia dideklarasikan.
// scope lokal adalah ruang lingkup di mana variabel lokal dapat diakses, yaitu hanya di dalam fungsi atau blok tersebut.

// scope blok adalah ruang lingkup yang berlaku untuk variabel yang dideklarasikan di dalam blok seperti if, for, atau while (percabangan atau pengulangan).

// nested scope adalah konsep di mana fungsi atau blok dapat dideklarasikan di dalam fungsi atau blok lain, sehingga variabel yang dideklarasikan di dalamnya dapat diakses oleh fungsi atau blok luar, tetapi tidak sebaliknya.

var globalVar = "I am a global variable";
let globalLet = "I am a global let variable";

// global scope
console.log(`Global Scope Example:`);
function checkGlobalScope() {
  console.log(globalVar); // Akses variabel global
  console.log(globalLet); // Akses variabel global
}

checkGlobalScope(); //memanggil fungsi checkGlobalScope

console.log(`\n`);

// local scope
console.log(`Local Scope Example:`);

function localScopeExample() {
  var localVar = "I am a local variable to this function";
  let localLet = "I am a local let variable to this function";

  console.log(localVar);
  console.log(localLet);
}
localScopeExample(); //memanggil fungsi localScopeExample

// console.log(localVar);
// Akan menghasilkan error karena localVar tidak dapat diakses di luar fungsi
// console.log(localLet);
// Akan menghasilkan error karena localLet tidak dapat diakses di luar fungsi

console.log(`\n`);

// block scope
console.log(`Block Scope Example:`);

function blockScopeExample() {
  if (true) {
    var blockVar = "I am a block variable";
    let blockLet = "I am a block let variable";

    console.log(blockVar); // Akses variabel block scope
    console.log(blockLet); // Akses variabel block scope
  }

  console.log(`akses di luar scope variabel var: ${blockVar}`); // Akses variabel block scope, karena var dapat diakses di luar blok

  // console.log(blockLet);
  // Akan menghasilkan error karena blockLet tidak dapat diakss di luar blok percabangan atau pengulangan
}
blockScopeExample(); // Memanggil fungsi blockScopeExample

// console.log(blockVar);
// Akan menghasilkan error karena blockVar tidak dapat diakses di luar fungsi, karena variabel sudah menjadi variabel lokal yang ada di dalam fungsi

console.log(`\n`);

// nested scope
console.log(`Nested Scope Example:`);

function outerFunction() {
  var outerVar = "I am an outer variable";
  let outerLet = "I am an outer let variable";

  function innerFunction() {
    // fungsi innerFunction bisa mengakses variabel outerVar, outerLet dan innerVar, innerLet

    var innerVar = "I am an inner variable";
    let innerLet = "I am an inner let variable";

    console.log(outerVar); // Akses variabel dari fungsi luar
    console.log(outerLet); // Akses variabel dari fungsi luar
  }

  innerFunction(); // Memanggil fungsi dalam

  // namun fungsi outerFunction tidak bisa mengakses variabel innerVar, innerLet karena innerVar dan innerLet hanya dapat diakses di dalam fungsi innerFunction

  // Akses variabel dari fungsi dalam
  // console.log(innerVar); //output: error tidak terdefinisi
  // console.log(innerLet); //output: error tidak terdefinisi
  // Akan menghasilkan error karena innerVar dan innerLet tidak dapat diakses di luar fungsi dalam
}

outerFunction(); // Memanggil fungsi luar
