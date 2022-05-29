import React from 'react';
import Todos from './Todos';
import Input from './Input';
import useRequest from '../hooks/useRequest'
import './app.scss'
import { useSelector,useDispatch } from 'react-redux'
import { get_data } from '../Redux/reduxSlice';
import { useJsonServer } from '../hooks/useJsonServer'

function App() {

    const { error,loading } = useJsonServer()
    const dispatch = useDispatch()
    const data = useSelector(state => state.redux.data)
    const url = useSelector(state => state.redux.url)

    const checkTodo = (id) => {
        let updatedTodos = data.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo);
        dispatch(get_data(updatedTodos)) //==============>
        const checkedTodo = updatedTodos.filter(todo => todo.id === id)
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ checked: checkedTodo[0].checked }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        const newURL = `${url}/${id}`
        const raw = useRequest(newURL,options)
    }
    
    const deleteTodo = (id) => {
        let updatedTodos = data.filter(todo => todo.id !== id );
        dispatch(get_data(updatedTodos)) //==============>
        const options = { method: 'DELETE' }
        const newURL = `${url}/${id}`
        const raw = useRequest(newURL,options)
    }
    
    return (
        <div className='container'>
            <Input/>
            <Todos 
                data={data}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
            <h1>{url}</h1>
        </div>
    )
}
export default App;
