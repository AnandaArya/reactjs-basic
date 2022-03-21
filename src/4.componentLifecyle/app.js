const root = document.querySelector('#root');

// Component Lifecyle
// memungkikan kita mengeksekusi sebuah function ketika component tersebut dirender

// pada saat nilai state berubah (dirender ulang) maka function ini akan di eksekusi juga akan
// jadi buka hanya saat di render pertama kali, tetapi juga ketika dirender ulang
function App() {

    const[clicked, setClick] = React.useState(false);
    const[count, setCount] = React.useState(0);

    // ketika komponent ini dirender maka function ini akan di eksekusi dengan bantuan React.useEffect
    // argument pertama function yang mau kita eksekusi, nah di argument kedua adalah state yang mau kita pantau perubahannya
    // React.useEffect(function() {
    //     console.log('judul');
    // },
    // // state yang mau kita pantau perubahannya
    // [count]);

     // di React sebenarnya ada dua komponent yaitu Functional Komponen dan Class Component, nah Class Component di dalam lifecylenya ada istilah seperti diatas
    // did mount, did update, nah di Functional Component kita pakai yang namanya useEffect kemudian kita tulis functionnya didalam useEffect tersebut
    // Kenapa kita tidak memakai Class Component? karena sudah mulai ditinggalkan, React Developer sekarang rata-rata menggunakan Functional Component (lebih simple)
    // Kebanyakan kode base lama yang menggunakan Class Component


    // Mount
    // ketika pertama kali komponen di render didalam DOM Tree di React itu disebut Mount
    // Component did mount
    // React.useEffect(function() {
    //     console.log('judul');
    // },
    // // kalau kita kasih nilai empty di argument kedua ini berarti function tersebut hanya akan di eksekusi pertama kali dirender
    // // ini sangat cocok ketika kita melakukan data Fetching, ketika kita mau ngambil data produk misalnya maka tidak mungkin kita update terus data produknya.
    // // atau data fetchingnya dilakukan secara berkala kecuali secara Realtime(ini jarang terjadi)
    // []);

    // Component di update
    // React.useEffect(function() {
    //     console.log('judul');
    // // kalau kita tidak kasih argument kedua maka dia akan memantau seluruh perubahan statenya, maka ketika ada perubahan state atau update si Function ini
    // // akan dieksekusi terus-menerus. 
    // });


    // didalam useEffect kita bisa juga memanggil atau init library, kenapa di dalam useEffect? karena kita bisa mendetect apakah komponent tersebut dirender.
    // Kalau diluar kita tidak apakah komponent tersebut dirender atau belum, kita hana bisa mengira-ngira
    // tapi kita pakai cara ini bukan hal yang tepat, karena ketika ada perubahan state, maka dia akan menginiliasi /memanggil ulang library
    // ada beberapa juga library yang boleh hanya di panggil satu kali cara mengatasinya kita menggunakan empty array di argument kedua

    // Kelebihan membuat UI di Javascript adalah kita melakukan Client side routing, ketika kita pindah halaman, halaman tersebut tidak direload artinya
    // ketika kita bikin Carousel di halaman ini dan pindah ke halaman lain dengan komponen berbeda dan balik lagi halaman awal, intansiasi dari libary ini berarti tetap ada
    // dia tidak dihapus / reload, berarti masih ada di memory. Makanya kita perlu melakukan Clean Up. biasanya di libary Frontend itu ada method untuk melakukan Clean up / destroy
    // nah kita bisa membuat function untuk menghapus / clean up libary tersebut. istilah ini disebut dengan UnMount (component unMount)
    // ketika kita menginit library di Component, ketika component tersebut mau dihapus kita harus Clean Up terlebih dahulu. dari inisialisasi sebelumnya. untuk menghindari memory leaks

    // Misal ketika kita button tersebut di klik kita memanggil libary baru untuk modal, nah ketika modal tersebut di hapus kita harus melakukan Clean up
    // didalam JS ketika kita melakukan event listener ke sebuah element (onClick), kemudian kita ingin hapus komponent tersebut maka kita harus hapus lagi si onClick, kalau tidak
    // maka dia akan tetap ada di dalam DOM Tree

    React.useEffect(function() {
        console.log('init library carousel');

        return function() {
            console.log('destroy init carousel');
        };
    },
    // state yang mau kita pantau perubahannya
    );


    return (
        <>
            <h1 id="judul">Hello ini judul</h1>
            <button
                onClick={function() {
                    setClick(true);
                }}
            >
                Click
            </button>
            <button
                onClick={function() {
                    setCount(count + 1);
                }}
            >
                Tambah
            </button>
            Nilai saar ini : {count}
        </>
    );
}

setTimeout(function() {
    ReactDOM.render(<App />, root);
}, 1000);

