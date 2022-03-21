    const root = document.querySelector('#root');

    const className = 'box';
    
    const element = <div className={className}></div>;
        // untuk nulis objek diawali dengan curly braces juga, pertama kita tulis curly braces untuk mengembed JS expression, kemudian kita mengembed object ini didalam curly braces
        // Inline CSS di React
        // <div style={{
        //     width: 200, 
        //     height: '200px',
        //     backgroundColor: 'blue',
        // }}></div>
    
    ReactDOM.render(element, root);


