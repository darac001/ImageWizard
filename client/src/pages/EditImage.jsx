import React, { useState } from 'react'
import { preview } from '../assets';
import { Loader } from '../components';
import FileSaver from 'file-saver';
import { MdOpenInNew } from "react-icons/md";


const EditImage = () => {
    const [file, setFile] = useState()
    const [form, setForm] = useState({
        photo: '',
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [generatingImgComplete, setGeneratingImageComplete] = useState(false)

    async function downloadImage(photo) {
        FileSaver.saveAs(photo);
    }

    const handleImage = (e) => {
        setFile(e.target.files[0])
        // console.log(e.target.files);
    }

    const send = async () => {
        // console.log("hi");
        const data = new FormData()
        data.append("file", file)
        setLoading(true);
        setGeneratingImg(true)
        setGeneratingImageComplete(false)
        try {
            const response = await fetch('https://imagewizard.onrender.com/api/v1/upload',
                {
                    method: 'POST',
                    body: data
                })
            const result = await response.json();
            // console.log(result);

            setForm({ ...form, photo: `${result.photo}` });
            alert('Success');
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
            setGeneratingImg(false)
            setGeneratingImageComplete(true)
        }
  
        // axios.post("https://httpbin.org/anything", data)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
     
    }


    return (
        <section className="max-w-7xl mx-auto sm:p-0 p-4">
            <div>
                <h1 className="font-dm font-medium text-white text-[32px]">Edit</h1>
                <p className="mt-2 font-dm text-slate-300 text-[14px] w-full ">Upload your own image to edit.</p>

            </div>

            <form action="#" className="mt-16 max-w-3xl">
                <div className="flex flex-col gap-1">  

                    <div className="mb-3 w-96">
                        {/* <label
                            htmlFor="file"
                            className="mb-2 inline-block font-dm text-sm text-slate-300"
                        >Upload Image</label
                        > */}
                        <input
                            className="relative m-0 block max-w-full
                            rounded border border-solid border-slate-800 
                            bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                             text-slate-500 transition duration-300 ease-in-out 
                             file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                             file:rounded-none file:border-0 file:border-solid 
                             file:border-inherit file:bg-neutral-100 file:px-3 
                             file:py-[0.32rem] file:text-[#080B16] 
                             file:transition file:duration-150 
                             file:ease-in-out file:[margin-inline-end:0.75rem] 
                             file:[border-inline-end-width:1px]
                              hover:file:bg-neutral-200 focus:border-primary
                               focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                               focus:shadow-primary focus:outline-none
                                dark:border-neutral-600 dark:text-neutral-200
                                 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                            type="file"
                            accept='.jpg'
                            onChange={handleImage}
                            required
                            id="File" />
                        <p className="mt-1 text-[12px] text-slate-300" id="file_input_help">JPG, JPEG or PNG.</p>
                    </div>
                </div>
            </form>



            <div className="relative text-gray-900 mt-5 mb-5 text-sm rounded-lg border border-slate-800 w-80 h-80 max-w-full max-h-full flex justify-center items-center">
                {form.photo ? (
                    <img
                        src={form.photo}
                    />
                ) : (
                    <img
                        src={preview}
                        alt="preview"
                        className=" bg-slate-500 w-7/12 object-contain opacity-90 "
                    />
                )}
                {generatingImg && (
                    <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                        <Loader />
                    </div>
                )}
            </div>
            <div className='flex justify-between w-80'>

                {file && (<button
                    className="font-dm px-4 py-2 flex 
                justify-center items-center font-medium ease-in-out duration-500
                 hover:bg-slate-800/50 text-white bg-slate-800 rounded-full"
                    onClick={send} >{generatingImg ? 'Generating...' : 'Generate'}</button>)}

                {generatingImgComplete && (<button type="button" onClick={() => downloadImage(form.photo)} className="outline-none bg-transparent border-none">
                    {/* <img src={download} alt="download" className="w-8 h-8 object-contain invert" /> */}
                    <MdOpenInNew className='mr-2 font-dm text-slate-300 text-[28px] w-full' />

                </button>)}
            </div>
        </section>
    )
}

export default EditImage