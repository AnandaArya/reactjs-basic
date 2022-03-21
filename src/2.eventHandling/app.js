const root = document.querySelector('#root');

function clicked(message) {
    alert(message);
}

const className = 'box';
const element = 
    // <button 
    //     onClick={function() {
    //     clicked('Hello, Aku terklik')
    // }}>
    <button onClick={clicked.bind(this,'Hello, Aku terklik')}>
        Click me
    </button>;

ReactDOM.render(element, root);
