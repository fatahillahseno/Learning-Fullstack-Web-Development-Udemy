async function loadData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Elegantly Handle Error");
    console.log(error);
  }
}

loadData();

/* 
old version

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        //jika response.ok tidak ada
        throw new Error("Network response was not okay");
      }
      // jika response.ok ada
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.group(error);
    });
}


*/
