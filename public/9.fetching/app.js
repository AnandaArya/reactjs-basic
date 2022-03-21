const root = document.querySelector('#root'); // Data Fetching
// function App() {    
//     // Fetch mengembalikan promise
//     // Adalah sebuah Object yang mereprensentasikan keberhasilan atau kegagalan sebuah event
//     // yang Asychronous di masa yang akan datang
//     // janji    (terpenuhi / ingkar)
//     // states   (fullfilled / rejected / pending)
//     // callback (resolve / reject / finally)
//     // aksi     (then / catch)
//     React.useEffect(function() {
//         const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
//             .then(function(response) {
//                 return response.json();
//             }).then(function(response) {
//                 console.log(response);
//             });
//         console.log(getData);
//     }, 
//     []/* empty array agar di eksekusi ketika elemen pertama kali dirender*/);
//     return <h1>Data Fetch</h1>
// }
// Data Fetching Async Await
// Asynchronous Function
// "Sebuah async function dapat memiliki keyword await didalamnya untuk memberhentikan
// sementara eksekusi fungsinya sambil menunggu promise-nya selesai. -MDN"
// Keyword Await hanya bisa berjalan ketika functionnya kita kasih Async didalamnya

function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();
      console.log(response);
    }

    getData();
  }, []
  /* empty array agar di eksekusi ketika elemen pertama kali dirender*/
  );
  return /*#__PURE__*/React.createElement("h1", null, "Data Fetch");
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);