import React,{ useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa'
import useRequest from '../hooks/useRequest'
import { useSelector,useDispatch } from 'react-redux'
import { get_data } from '../Redux/reducer';
import './input.scss'

function Input() {

    const dispatch = useDispatch()
    const[value,setValue] = useState('')
    const data = useSelector(state => state.redux.data)
    const url = useSelector(state => state.redux.url)

    const addNewTodo = (title) => {
        let id = data.length ? data[data.length - 1].id + 1 : 1;
        let newTodo = { id,checked: false,title}
        let updatedTodos = [...data,newTodo]
        dispatch(get_data(updatedTodos))
        const options = {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        useRequest(url,options)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        setValue('')
        addNewTodo(value) // == put title on data and json-server
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <input
                type='text'
                id='input'
                autoFocus
                placeholder='new todo'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <FaPlusSquare  
                className='icon submit'
                type='submit'
                onClick={onSubmit}
            />
        </form>
    )
}

export default Input;
