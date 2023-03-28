import React, { useState } from 'react'
import axios from 'axios';

const EditImage = () => {
    const [file, setFile] = useState()
    const [form, setForm] = useState({
        photo: '',
      });
    
    


    const handleImage = (e) => {
        setFile(e.target.files[0])
        // console.log(e.target.files);
    }

    const send = async () => {
        // console.log("hi");
        const data = new FormData()
        data.append("file", file)

        try {
            const response = await fetch('http://localhost:8080/api/v1/upload',
                {
                    method: 'POST',
                    body: data
                })
            const result = await response.json();
            console.log(result);
     
        setForm({ ...form, photo: `${result.photo}` });
            
           

        } catch (error) {
            alert(error)
        }

        // const response = await fetch('https://httpbin.org/post',
        // {
        //   method: 'POST',
        //   headers: {
        //     'content-type': file.type
        //   },
        //   body: file
        // })
        // .then((res) => res.json())
        // .then((data) => console.log(data))
        // .catch((err) => console.error(err));
        // .catch((err) => console.error(err));
        // axios.post("https://httpbin.org/anything", data)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        // await axios.post("http://localhost:8080/api/v1/edit", data)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }





    return (
        <div>

            <form action="#">
                <label className='text-white' htmlFor="file">file</label>
                <input type="file" id='file' accept='.jpg' onChange={handleImage} />
            </form>
            <button className='text-white' onClick={send} >send</button>
            
            <img src={form.photo} alt="noffuing" />

        </div>
    )
}

export default EditImage