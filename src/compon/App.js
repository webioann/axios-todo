import React,{ useState,useEffect } from 'react';
import Todos from './Todos';
import Input from './Input';
import SearchTodo from './SearchTodo';
import useRequest from '../hooks/useRequest'
import './app.scss'

function App() {

    const [inputValue,setInputValue] = useState('');
    const [searchValue,setSearchValue] = useState('');
    const [data,setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5/';
    const URL = 'http://localhost:888/todos'

    useEffect(() => {
        try{
            fetch(URL)
            .then((response) => response.json())
            .then((results) => {
                setData(results)        
                setError(null)
                setLoading(false)
            })
        }
        catch(error){
            setError(true)
            console.error('ERROR',error.message) 
        }
        finally{
            setLoading(false)
        }
    },[])
    // ===== PATCH ========================
    const checkTodo = (id) => {
        let updatedTodos = data.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo);
        setData(updatedTodos)
        const checkedTodo = updatedTodos.filter(todo => todo.id === id)
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ checked: checkedTodo[0].checked }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        const newURL = `${URL}/${id}`
        const raw = useRequest(newURL,options)
    }
    // ===== DELETE ========================
    const deleteTodo = (id) => {
        let updatedTodos = data.filter(todo => todo.id !== id );
        setData(updatedTodos);
        const options = { method: 'DELETE' }
        const newURL = `${URL}/${id}`
        const raw = useRequest(newURL,options)
    }
    // ===== POST =====================
    const addNewTodo = (title) => {
        let id = data.length ? data[data.length - 1].id + 1 : 1;
        let newTodo = { id,checked: false,title}
        let updatedTodos = [...data,newTodo]
        setData(updatedTodos)

        const options = {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        const raw = useRequest(URL,options)
    }
    // ===== ===================
    const onSubmit = (event) => {
        event.preventDefault();
        if(!inputValue) return;
        setInputValue('');
        addNewTodo(inputValue)
    }

    return (
        <div className='container'>
            <Input
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSubmit={onSubmit}
            />
            <SearchTodo
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Todos 
                data={data}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}
export default App;
