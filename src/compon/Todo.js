import React from 'react'
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox } from 'react-icons/md'
import { CgTrash } from 'react-icons/cg'
import { useSelector,useDispatch } from 'react-redux'
import useRequest from '../hooks/useRequest'
import { get_data } from '../Redux/reducer'
import './todos.scss';

const Todo = () => {

    const data = useSelector(state => state.redux.data)
    const url = useSelector(state => state.redux.url)
    const dispatch = useDispatch()


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
        <>
        {data.map(todo => (
            <li className='item' key={todo.id}>
                {todo.checked 
                    ? <MdOutlineCheckBox className='icon' onClick={() => checkTodo(todo.id)}/> 
                    : <MdOutlineCheckBoxOutlineBlank className='icon'onClick={() => checkTodo(todo.id)}/>
                }
                <h3 className={!todo.checked ? 'todo' : 'todo-through'}>
                    {todo.title}
                </h3>
                <CgTrash className='icon' onClick={() => deleteTodo(todo.id)}/>
            </li>
        ))}
        </>
    )
}
export default Todo;