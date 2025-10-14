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

loadData();

// versi yang di atas lebih simple dan ringkas

// let myPromise = new Promise((myResolve, myReject) => {
//   let req = new XMLHttpRequest();
//   req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//   req.onload = () => {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("Unable to fetch data");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   (res) => {
//     myDisplayer(res);
//   },
//   (error) => {
//     myDisplayer(error);
//   }
// );

// function myDisplayer(value) {
//   console.log(`Printing Result:\n${value}`);
// }
