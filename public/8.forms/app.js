const root = document.querySelector('#root'); // React Forms
// useRef (Uncontrolled Component)
// Cara ini disebut dengan uncontrolled component, karena ini benar-benar mengandalkan VanillaJS, useRef cuma untuk mereferensikan elemennya saja
// kita bisa ganti juga dengan queryselector biasa, sebagai alternatifnya kita gunakan useRef ini
// function App() {
//     const namaRef = React.useRef(null);
//     function submitted(event) {
//         // ini untuk mencegah halaman reload /  navigate ke suatu halaman lain
//         event.preventDefault();
//         const nama = namaRef.current.value;
//         console.log('Nama ' + nama);
//     }
//     return (
//         <form onSubmit={submitted}>
//             <div>
//                 <label>Nama :</label>
//                 <input type="text" name="nama" ref={namaRef}/>
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
//     );
// }
// useState (Controlled Components)
// jadi kita membuat state, kemudian kita set Statenya berdasarkan input valuenya lalu kita store valuenya, dan akses lewat state
// Kenapa disebut Controller Components karena dia bergantung ke state

function App() {
  // const [nama, setNama] = React.useState('');
  const [nama, setNama] = React.useState('Arya');

  function submitted(event) {
    // ini untuk mencegah halaman reload /  navigate ke suatu halaman lain
    event.preventDefault();
    console.log('Nama :' + nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submitted
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (event) {
      // target ini isinya adalah element node dari inputan
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);