const root = document.querySelector('#root'); // Conditional Rendering
// Membuat suatu kondisi ketika kondisi itu terpenuhi maka render suatu Component, jika tidak maka render Component yang lain
// contoh yang paling umum adalah halaman login, jika berhasil login maka dia akan memunculkan halaman berikutnya seperti profile, dashboard, dll

function App() {
  // // Ketika kita membuat state didalam suatu Component, ketika state tersebut berubah isi atau valuenya. maka component tersebut akan melakukan render ulang
  const [login, setLogin] = React.useState(false); // if(login) {
  //     return (
  //         <>
  //             <h1>Login Berhasil!</h1>
  //             <button onClick={function() {
  //                 setLogin(false);
  //             }}>
  //                 Logout
  //             </button>
  //         </>
  //     )
  // }
  // // kode dibawah ini tidak akan di baca lagi karena kondisi tersebut sudah terpenuhi

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, login && /*#__PURE__*/React.createElement("b", null, "Kamu sudah login")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

setTimeout(function () {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
}, 1000);