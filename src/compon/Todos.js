import React from 'react';
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox } from 'react-icons/md'
import { CgTrash } from 'react-icons/cg'
import { useSelector,useDispatch } from 'react-redux'
import './todos.scss';

function Todos({ checkTodo,deleteTodo }) {

    const data = useSelector(state => state.redux.data)


    if( data.length > 0 ) {
        return (
            <ul className='list'>
                {data.map(todo => (
                    <li className='item'
                        key={todo.id}>
                        {todo.checked 
                            ? <MdOutlineCheckBox 
                                className='icon'
                                onClick={() => checkTodo(todo.id)}
                                /> 
                            : <MdOutlineCheckBoxOutlineBlank 
                                className='icon'
                                onClick={() => checkTodo(todo.id)}
                                />}
                        <h1 
                            className={!todo.checked ? 'todo' : 'todo-through'}>
                                {todo.title}
                        </h1>
                        <CgTrash 
                            className='icon'
                            onClick={() => deleteTodo(todo.id)}
                            />
                    </li>
                ))}
            </ul>
        )
    }
    else{
        return (
            <ul className='list'>
                <li className='item'>
                    <h1 className='todo'>
                        EMPTY TODOS
                    </h1>
                </li>
            </ul>
        )
    }
}
export default Todos;
