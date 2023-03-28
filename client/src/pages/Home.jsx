import React, { useEffect, useState } from 'react';
import { Card, Loader } from '../components';
import { Link } from 'react-router-dom'



const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }
  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};




const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null); 
  

  // console.log(allPosts);
  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://imagewizard.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <section className="max-w-7xl mx-auto sm:p-0 p-4">
      <div className='flex sm:flex-row flex-col justify-between items-center text-center '>
        <div>
          <h1 className="font-dm text-[#fff] text-medium text-[36px]">Community Showcase</h1>
        </div>
        <Link to="/create-post" className="font-dm h-1/2 p-2 sm:w-[100px] w-[150px] flex justify-center 
        items-center font-medium ease-in-out duration-500 hover:bg-slate-800/50 text-white bg-slate-800 rounded-full">Create</Link>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            <RenderCards
              data={allPosts}
              title="No Posts "
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Home