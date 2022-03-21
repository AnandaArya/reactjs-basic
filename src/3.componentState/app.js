const root = document.querySelector('#root');

// React State
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

    return(
        <>
            <button
                onClick={function() {
                    setCount(count - 1);
                }}
            >-</button>
            <span>{count}</span>
            <button
                onClick={function() {
                    setCount(count + 1);
                }}
            >+</button>
        </>
    )
}

ReactDOM.render(<App />, root);
