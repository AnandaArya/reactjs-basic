const root = document.querySelector('#root');

// The final project (todo list app)
function App() {    
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState('');

    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();
        setMessage('');

        // Validasi
        if(!activity) {
            setMessage('Aktivitas harus diisi');
        } else if(edit.id) {

            const updatedTodo = {
                ...edit,
                // activity: activity
                // Karena sama namanya kita bisa langsung tulis seperti ini
                activity,
            };

            // Kita cari di posisi berapa index edit todosnya
            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id == edit.id;
            });

            // kita clone dulu state todosnya(arraynya)
            const updatedTodos = [...todos];

            // lalu kita set atau ubah array atau statenya kedalam state todos
            updatedTodos[editTodoIndex] = updatedTodo;
            setTodos(updatedTodos);

            // agar kembali ke mode tambah saat sudah melakukan edit (updated)
            cancelEditHandler();

        } else {
            // saat kita mengeset state dia akan mengganti data yang lama, makanya kita perlu ngemerge (mengambil data activity sebelumnya)
            // kita bisa menggunakan spread operator (...)
            setTodos([...todos, {
                id: generateId(),
                // activity: activity,
                // Karena sama namanya kita bisa langsung tulis seperti ini
                activity,
                done: false,
                
            }]);
            setActivity('');
        }

    }

    function removeTodoHandler(todoId) {
        let filteredTodos = todos.filter(function(todo) {
            return todo.id != todoId;
        });

        setTodos(filteredTodos);
        // cancelEditHandler();

        // sama aja kyak komentar diatas dibawah ini agar tidak membuang eksekusi
        if(edit.id) {
            // agar kembali ke mode tambah setelah melakukan hapus (deleted)
            cancelEditHandler();
        }
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }
    
    function cancelEditHandler() {
        // untuk cancel edit kita cukup set state edit, activitnya nya jadi kosong
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler(todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done? false : true,
        }

        const editTodoIndex = todos.findIndex(function(currentTodo) {
            return currentTodo.id == todo.id;
        });

        const updatedTodos = [...todos];

        updatedTodos[editTodoIndex] = updatedTodo;
        setTodos(updatedTodos);
    }


    // Controlled Component
    return (
        <>
            <h1>Simple Todo List</h1>
            {message && <div style={{color: 'red'}}>{message}</div>}
            <form onSubmit={saveTodoHandler}>
                <input
                    type="text" 
                    placeholder="Input Activity"
                    value={activity}
                    onChange={function(event) {
                        setActivity(event.target.value);
                    }}
                />
                <button type="submit">{edit.id ? 'ubah' : 'tambah'}</button>
                {/* ini syntaxnya kurang lebih sama sepert ternary */}
                {edit.id && <button onClick={cancelEditHandler}>batal edit</button>}
            </form>
            {todos.length > 0 ? (
                <ul>
                    {todos.map(function(todo){
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}/>
                                {todo.activity}
                                ({todo.done ? 'selesai' : 'belum selesai'})
                                <button onClick={editTodoHandler.bind(this, todo)}>edit</button>
                                <button onClick={removeTodoHandler.bind(this, todo.id)}>hapus</button>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p><i>Tidak ada todo</i></p> 
            )}
        </>
    )
}



ReactDOM.render(<App />, root);

