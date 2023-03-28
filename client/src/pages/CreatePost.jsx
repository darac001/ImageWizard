import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import {  Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('https://imagewizard.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  }

  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true)
        // see server route dalleRoutes
        const response = await fetch('https://imagewizard.onrender.com/api/v1/dalle',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: form.prompt })
          })
        const data = await response.json();
        // console.log(data);
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
        
      } catch (error) {
        alert(error)
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };


  return (

    <section className="max-w-7xl mx-auto sm:p-0 p-4">
      <div>
        <h1 className="font-dm font-medium text-white text-[32px]">Create</h1>
        <p className="mt-2 font-dm text-slate-300 text-[14px] w-full ">I asked my computer to generate some images, but all it came up with were pixelated dreams.</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label
              htmlFor="name"
              className="block font-dm text-sm text-slate-300"
            >
              Your Name
            </label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="border bg-transparent placeholder:text-slate-500
             border-slate-800 text-white text-sm rounded-lg
              focus:ring-[#6469ff] focus:border-[#6469ff]
               outline-none block max-w-full w-4/5 p-3"
            placeholder="Ex., john/jane"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div className="flex items-center gap-2 mt-7">
            <label
              htmlFor="name"
              className="block font-dm text-sm text-slate-300"
            >
              Prompt
            </label>
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="font-dm text-xs bg-[#6469ff] py-1.5 px-3 rounded-full text-white"
            >
              Surprise me
            </button>
          </div>
          <input
            type="text"
            id="name"
            name="prompt"
            className="border bg-transparent placeholder:text-slate-500
             border-slate-800 text-white text-sm rounded-lg
              focus:ring-[#6469ff] focus:border-[#6469ff]
               outline-none block max-w-full w-4/5 p-3"
            placeholder="tyriel archangel, king shamn , avatar , swords , angel wings . 4k , unreal engine --wallpaper"
            value={form.prompt}
            onChange={handleChange}
            required
          />

          <div className="relative text-gray-900 mt-5 text-sm rounded-lg border border-slate-800 w-80 h-80 max-w-full max-h-full flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                
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
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" font-dm px-4 py-2 flex justify-center 
            items-center font-medium ease-in-out duration-500 hover:bg-slate-800/50 text-white bg-slate-800 rounded-full"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Share your creation on the homepage **</p>
          <button
            type="submit"
            className="font-dm px-4 py-2 flex justify-center 
            items-center font-medium ease-in-out duration-500 hover:bg-slate-800/50 text-white bg-slate-800 rounded-full"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>

  )
}

export default CreatePost



