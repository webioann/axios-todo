import React from 'react';
import { FaPlusSquare } from 'react-icons/fa'
import './input.scss'

function Input({ inputValue,setInputValue,onSubmit }) {
    return (
        <form className='form' onSubmit={onSubmit}>
            <input
                type='text'
                id='input'
                autoFocus
                placeholder='new todo'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <FaPlusSquare  
                className='icon submit'
                type='submit'
                onClick={onSubmit}
            />
        </form>
    )
}

export default Input
