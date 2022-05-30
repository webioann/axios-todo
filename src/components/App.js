import React from 'react'
import Input from './Input'
import TodosList from './TodosList'
import Todo from './Todo'
import TodoEmpty from './TodoEmpty'
import { useSelector } from 'react-redux'
import { useJsonServer } from '../hooks/useJsonServer'
import './app.scss'

function App() {

    const { error,loading } = useJsonServer()
    const data = useSelector(state => state.redux.data)
    
    return (
        <div className='container'>
            <Input/>
            <TodosList>
                {data.length > 0 ? <Todo/> : <TodoEmpty/>}
            </TodosList>
        </div>
    )
}
export default App;
