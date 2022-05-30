import React from 'react'
import { IChildrenType } from './types'
import './todos.scss'

const TodosList:React.FC<IChildrenType> = ({ children }) => {

    return (
        <ul className='list'>
            { children }
        </ul>
    )
}
export default TodosList;