async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicod.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Elegantly Handle Error");
    console.log(error);
  }
}

loadData();
