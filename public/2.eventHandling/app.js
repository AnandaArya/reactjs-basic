const root = document.querySelector('#root');

function clicked(message) {
  alert(message);
}

const className = 'box';
const element =
/*#__PURE__*/
// <button 
//     onClick={function() {
//     clicked('Hello, Aku terklik')
// }}>
React.createElement("button", {
  onClick: clicked.bind(this, 'Hello, Aku terklik')
}, "Click me");
ReactDOM.render(element, root);