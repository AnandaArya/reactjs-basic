const root = document.querySelector('#root');

// 03:31:13 Sync data fetching response with UI

// ketika kita menjalankan function pada saat componentnya render pertama kali atau saat componenntnya itu Mount ke DOM Tree
// di React istilahnya disebut dengan Side Effect

function App() {    
    // karena tipe datanya array maka kita gunakan empty array sebagai default valuenya
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function() {
        async function getData() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');

            const response = await request.json();

            // ketika prosesnya selesai dia juga setLoadingnya jadi false
            setNews(response);
            setLoading(false);
        }
        getData();
    }, 
    []/* empty array agar di eksekusi ketika elemen pertama kali dirender*/);
    return (
        <>
            <h1>Data Fetch</h1>
            {loading ? (
                <i>Loading data...</i>
            ) : (
            <ul>
                {news.map(function(item) {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
            )}
        </>
    );
}



ReactDOM.render(<App />, root);

