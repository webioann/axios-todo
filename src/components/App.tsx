import React, { useState } from 'react'
import axios from 'axios';
import './app.scss'

function App() {

    const[img,setImg] = useState('')

    axios.get("https://fortnite-api.com/v1/map")
        .then(response => {
            console.log(response.data)
            setImg(response.data.status)
    })

    const postRequest = () => {

        // axios.post("https://jsonplaceholder.typicode.com/posts",{
        //     userId: 77,
        //     title: "TITLE for post",
        //     body: "BODY for post"
        // })
        // .then(response => console.log(response.data))
            
        axios({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            data: {
                userId: 778899,
                title: "TITLE for post 000",
                body: "BODY for post 000"
            }
        })
        .then(response => console.log(response.data))

    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <h1>AXIOS SANDBOX</h1>
                <button onClick={postRequest}>POST REQUEST</button>
                <div>{img}</div>
            </div>
        </div>
    )
}
export default App;