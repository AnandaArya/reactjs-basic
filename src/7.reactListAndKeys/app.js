const root = document.querySelector('#root');

// React list

function App() {
    const fruits = ['Apple', 'Orange', 'Grape', 'Lengkeng'];

    return (
        <ul>
            {/* mengapa tidak menggunakan forEach? karena forEach tidak bisa nge return element */}
            {fruits.map(function (fruit) {
                // key disini berfungsi untuk mengidentifikasi element ini yang berubah (harus unique) kalau di real project kita bisa menggunakan product.id, artikel.id
                return <li key={fruit}>{fruit}</li>;
            })}
        </ul>
    );
}

ReactDOM.render(<App />, root);

