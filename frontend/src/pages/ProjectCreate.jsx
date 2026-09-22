import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function ProjectCreate() {

  let navigate = useNavigate()
  let [customerName, setCustomerName] = useState("");
  let [name, setName] = useState("");
  let [imageUrl, setImageUrl] = useState(null);
  let [noets, setNoets] = useState("");



  async function handleSubmite() {

    let formData = new FormData();

    formData.append("name", name);
    formData.append("customerName", customerName);
    formData.append("image", imageUrl);
    formData.append("noets", noets);

    let response = await axios.post( import.meta.env.VITE_beckend_base_URL+"/projects/createProject", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    );

    if (response.data.success == true) {
      navigate('/AllProjects')
    }
  }

  return (
    <div className='bg-blue-200 h-screen w-screen '>

      <h1 className='ml-130 text-3xl font-bold'>Welcom To Projects Create </h1>
      <div >

        <div className='h-135 w-140 ml-90 mt-15 lg:col-span-7 bg-gray-200 p-10 md:p-7 rounded-2xl shadow-2xl border border-stone-200/80    '>
          <h3 className="text-2xl font-serif font-bold text-stone-900 ml-40 ">Projects Create</h3>
          <div className='ml-20 flex flex-wrap gap-5 py-10'>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mt-5 mb-2 ">name</label>
              <input
                type="text"
                required
                placeholder='enter projects name'
                value={name}
                onChange={(event) => setName(event.target.value)}

                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>
            <div>
              <label className="mt-5  block text-xs font-semibold text-stone-700 tracking-wider mb-2"> CustomerName</label>
              <input
                type="text"
                required
                placeholder='enter customerName'
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className="mt-5  block text-xs font-semibold text-stone-700  tracking-wider mb-2">Image Url</label>
              <input
                type="file"
                required
                placeholder='http://example.com/image.jpg'
                onChange={(event) => setImageUrl(event.target.files[0])}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className=" mt-5 block text-xs font-semibold text-stone-700  tracking-wider mb-2">Noets</label>
              <textarea
                type="text"
                required
                placeholder='enter noets'
                value={noets}
                onChange={(event) => setNoets(event.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
            </div>
            <button
              onClick={handleSubmite}
              className="mt-3 mr-15 w-300 bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-4 rounded-xl text-sm  transition-all duration-300 shadow-md cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCreate;