const root = document.querySelector('#root');

// Untuk memanipulasi DOM di react kita harus mengeksekusi kodenya saat komponen itu di render, kalau tidak hasilnya akan null
// kode manipulasi DOMnya ada didalam React.useEffect


function App() {

    const [login, setLogin] = React.useState(false);
    // ada cara alternatifnya dari React yaitu menggunakan use.Ref(refference), kita set null dulu sebagai default valuenya
    const judulRef = React.useRef(null);

    // cara 1
    // React.useEffect(function() { 
    //     const judul = document.getElementById('judul');
    //     setTimeout(function() {
    //         judul.textContent = 'Aplikasi';
    //     }, 1000);
    // },
    // // kita kasih nilai empty karena kita hanya ingin menipulasi sekali saja saat pertama kali komponenen dirender
    // []);

    // cara 2
    // jadi kita bisa menggunakan useRef sebagai alternatif lain dari querySelector
    // selain untuk DOM Manipulation, ref bisa juga digunakan untuk menset suatu variabel, value dll. 
    // perbedaan ref dengan use state kalau ref ketika valuenya berubah dia tidak melakukan render ulang, kali use state kali kita valuenya
    // maka dia akan merender ulang komponennnya

    // useState, useEffect, useRef ketiga hal ini sebenarnya termasuk kedalam React Hooks
    // apa itu hooks? sederhananya ini adalah cara React membawa fitur React sebelumnya seperti di Class Component, ke Functional Component
    // dulu kita bisa membuat Functional component lalu merender elementnya sebatas ini bisa, tapi kalau kita ingin membuat Statefull, atau yang ada statenya
    // kita harus tulis ulang dalam Class Component (menit 2:59:44), 
    // this.state = membuat state, kalau di func component kita pakai useState,
    // ComponentDidMont() ini untuk lifecylenya di execute ketika component itu di render pertama kali di func component kita mengggunakan useEffect dan nilai empty di argument kedua,
    // ComponentwillUnmount() kalau di useEffect itu return sebuah function baru setelahnya di eksekusi
    // render() = kalau di functional component kita cukup return elementnya
    React.useEffect(function() { 
        setTimeout(function() {
            judulRef.current.textContent = 'Aplikasi';
        }, 1000);
    }, 
    []);

    return (
        <>
            <h1 ref={judulRef}>Application</h1>
        </>
    );
}

setTimeout(function() {
    ReactDOM.render(<App />, root);
}, 1000);

