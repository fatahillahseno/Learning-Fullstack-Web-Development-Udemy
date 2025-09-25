const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

function logEvent(event) {
  console.log(
    `${event.currentTarget.id}, ${event.type} handled at ${event.eventPhase}`
  );

  // penggunaan stopPropagation
  // gunakan currentTarget agar hanya event pada element tersebut yang dihentikan
  // bukan pada element child nya atau yang di klik
  if (event.currentTarget.id === "middle") {
    event.stopPropagation();
    console.log(`Event propagation stopped at ${event.currentTarget.id}`);
  }
}

// Capture phase
outer.addEventListener("click", logEvent, true);
middle.addEventListener("click", logEvent, true);
inner.addEventListener("click", logEvent, true);

// Bubbling phase
outer.addEventListener("click", logEvent, false);
middle.addEventListener("click", logEvent, false);
inner.addEventListener("click", logEvent, false);

// pada addEventListener terdapat 3 parameter
// 1. event yang di listen (contoh: click, mouseover, dll)
// 2. function yang akan dijalankan ketika event terjadi (contoh: logEvent)
// 3. options (bisa diisi true/false atau object) (defaultnya false, ketika false maka event akan berjalan pada fase bubbling, ketika true maka event akan berjalan pada fase capturing)

// terdapat method pada event yaitu stopPropagation
// method ini berfungsi untuk menghentikan
// event agar tidak mengelembung (bubbling)
// atau tidak menurun (capturing)
