let privateVar = "Private Variable"; // hanya bisa digunakan di modul/file ini

export let publicVar = "Public Variable"; // bisa digunakan pada modul/file lain

function showPrivateVar() {
  // hanya bisa digunakan di modul/file ini
  console.log(privateVar);
}

export function showPublicVar() {
  console.log(privateVar); // variable private bisa digunakan pada export function
  console.log(publicVar); // variable public tentu bisa digunakan pada export function
}

export function showGlobalThis() {
  console.log(globalThis);
}
