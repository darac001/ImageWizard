import React, { useState } from 'react'
import axios from 'axios';

const EditImage = () => {
    const [name, setName] = useState()
    const [file, setfile] = useState()


    const send = () => {
        const data = new FormData()
        data.append("name", name)
        data.append("file", file)

        // axios.post("https://httpbin.org/anything", data)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        axios.post("http://localhost:8080/upload", data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <form action="#">
            <label className='text-white' htmlFor="name">name</label>
            <input type="text" id='name' onChange={(e) => {
                const { value } = e.target
                setName(value)
            }} />
            <label className='text-white' htmlFor="file">file</label>
            <input type="file" id='file' accept='.jpg' onChange={(e) => {
                const file = e.target.files[0]
                setfile(file)
            }} />


            <button className='text-white' onClick={send}>send</button>
        </form>
    )
}

export default EditImage