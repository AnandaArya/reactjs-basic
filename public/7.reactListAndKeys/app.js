const root = document.querySelector('#root'); // React list

function App() {
  const fruits = ['Apple', 'Orange', 'Grape', 'Lengkeng'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    // key disini berfungsi untuk mengidentifikasi element ini yang berubah (harus unique) kalau di real project kita bisa menggunakan product.id, artikel.id
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);