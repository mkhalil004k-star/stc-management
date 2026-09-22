
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function UpdateProjects() {

  let params = useParams()
  let Navigate = useNavigate();
  let [projects, setProjects] = useState([])

  let [formData, setFormData] = useState({

    name: "",
    customerName: "",
    imageUrl: "",
    noets: "",

  })

  console.log(formData)

  async function getOneProjects() {
    let response = await axios.post(
       import.meta.env.VITE_beckend_base_URL+"/projects/getOneProject",
      { id: params.projectId }
    );

    console.log(response.data)

    setFormData({
      name: response.data.data.name || "",
      customerName: response.data.data.customerName || "",
      noets: response.data.data.noets || "",
      imageUrl: response.data.data.imageUrl || "",
    })

  }

  useEffect(() => {
    getOneProjects()
  }, [])


  async function handleSbmit() {
    let response = await axios.post(
       import.meta.env.VITE_beckend_base_URL+"/projects/updateProject",
      { ...formData, id: params.projectId }
    )

    console.log(response.data.success)

    if (response.data.success == true) {

      Navigate('/allProjects')
    }

    setProjects(response.data)
  }



  return (
    <div className='bg-blue-200 h-screen w-screen '>

      <h1 className='ml-130 text-3xl font-bold'>Welcom To Update Projects </h1>
      <div >

        <div className='h-110 w-140 ml-90 mt-15 lg:col-span-7 bg-gray-200 p-10 md:p-7 rounded-2xl shadow-2xl border border-stone-200/80    '>
          <h3 className="text-2xl font-serif font-bold text-stone-900 ml-40 ">Update Projects</h3>
          <div className='ml-20 flex flex-wrap gap-5 py-10'>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mt-5 mb-2 ">Name</label>
              <input
                type="text"
                required
                placeholder='enter projects name'
                value={formData.name}
                onChange={function (event) {
                  setFormData({
                    ...formData,
                    name: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className=" mt-5 block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">CustomerName</label>
              <input
                type="text"
                required
                placeholder='enter customerName'
                value={formData.customerName}
                onChange={function (event) {
                  setFormData({
                    ...formData,
                    customerName: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>


            <div>
              <label className="mt-5  block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Image Url</label>
              <input
                type="text"
                required
                placeholder='http://example.com/image.jpg'
                value={formData.imageUrl}
                onChange={function (event) {
                  setFormData({
                    ...formData,
                    imageUrl: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className=" mt-5 block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Noets</label>
              <textarea
                type="text"
                required
                placeholder='enter discription'
                value={formData.noets}
                onChange={function (event) {
                  setFormData({
                    ...formData,
                    noets: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
            </div>

            <button
              onClick={handleSbmit}
              className="mt-5 w-full bg-stone-900 hover:bg-amber-600 text-white hover:text-black font-bold py-4 rounded-xl text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
            >
              Update Projectss
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default UpdateProjects