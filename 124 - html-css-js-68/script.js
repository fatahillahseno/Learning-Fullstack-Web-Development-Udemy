// format Promise
// Promise((resolve, reject) => {} );

// format Promise pada industri saat ini
// Promise((res, rej) => {} )

// buat promise object
let myPromise = new Promise((myResolve, myReject) => {
  // fetching data
  let req = new XMLHttpRequest();
  // open method
  // format : open(method, url)
  req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  // onload method
  req.onload = () => {
    if (req.status == 200) {
      //status 200 itu berarti successfull request
      myResolve(req.response);
    } else {
      myReject("Unable to fetch data");
    }
  };
  req.send();
});

// cara untuk mendengar promise yang dibuat
// then method
// bisa dimasukkan sebuah function ke dalam parameternya
// kapanpun promise sudah berhasil dilaksanakan (promise is resolved)
// maka eksekusi code di bawah ini dengan then method
// format: then( fulfilledFunction(), rejectedFunction())
myPromise.then(
  (res) => {
    myDisplayer(res);
  },
  (error) => {
    myDisplayer(error);
  }
);

function myDisplayer(value) {
  console.log(`Printing Result:\n${value}`);
}
