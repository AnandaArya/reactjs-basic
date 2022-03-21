const root = document.querySelector('#root'); // React State
// Jadi ia adalah data yang didalam React Component, data ini terosilasi tidak bisa diakses oleh component lain 
// kemudian datanya juga bisa diubah, ketika diubah datanya akan melakukan render ulang

function App() {
  // isi dari useState index pertama adalah nilai / value yang pertama kali di iniliasi, dan index keduanya adalah function
  // jadi state adalah data yang adalah di React Component, jadi ketika state itu berubah datanya akan dirender ulang
  // Tanpa Destructuring;
  // const state = React.useState(0);
  // const count = state[0];
  // const setCount = state[1];
  // Menggunakan Destructuring Assignment
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);