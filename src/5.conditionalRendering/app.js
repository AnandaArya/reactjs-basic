const root = document.querySelector('#root');

// Conditional Rendering
// Membuat suatu kondisi ketika kondisi itu terpenuhi maka render suatu Component, jika tidak maka render Component yang lain
// contoh yang paling umum adalah halaman login, jika berhasil login maka dia akan memunculkan halaman berikutnya seperti profile, dashboard, dll


function App() {

    // // Ketika kita membuat state didalam suatu Component, ketika state tersebut berubah isi atau valuenya. maka component tersebut akan melakukan render ulang
    const [login, setLogin] = React.useState(false);

    // if(login) {
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
    return (
        <>
            {/* kodnisi didalam jsx tidak bisa menggunakan if statement biasa, harus menggunakan ternary*/}
            {/* <h1>{login? <b>Kamu sudah login</b>  : <i>Kamu belum login</i>}</h1> */}
            {/* bisa juga seperti ini, kalau kita tidak pakai else */}
            <h1>{login && <b>Kamu sudah login</b>}</h1>
            <button onClick={function() {
                setLogin(true);
            }}>
                Login
            </button>
        </>
    );
}

setTimeout(function() {
    ReactDOM.render(<App />, root);
}, 1000);

