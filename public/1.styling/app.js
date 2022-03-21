const root = document.querySelector('#root');
const className = 'box';
const element = /*#__PURE__*/React.createElement("div", {
  className: className
}); // untuk nulis objek diawali dengan curly braces juga, pertama kita tulis curly braces untuk mengembed JS expression, kemudian kita mengembed object ini didalam curly braces
// Inline CSS di React
// <div style={{
//     width: 200, 
//     height: '200px',
//     backgroundColor: 'blue',
// }}></div>

ReactDOM.render(element, root);