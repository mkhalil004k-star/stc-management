import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function MemberCreate() {

  let navigate = useNavigate()
  let [post, setPost] = useState("");
  let [name, setName] = useState("");
  let [phoneNo, setPhoneNo] = useState("");
  let [address, setAddress] = useState("");
  let [imageUrl, setImageUrl] = useState(null);


  async function handleSubmite() {

    let formData = new FormData();

    formData.append("name", name);
    formData.append("post", post);
    formData.append("phoneNo", phoneNo);
    formData.append("address", address);
    formData.append("image", imageUrl);

    let response = await axios.post( import.meta.env.VITE_beckend_base_URL+"/members/memberCreate", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    if (response.data.success == true) {
      navigate('/allMember')
    }
  }

  return (
    <div className='bg-blue-200 h-screen w-screen '>

      <h1 className='ml-130 text-3xl font-bold'>Welcom To Member Create </h1>
      <div >

        <div className='h-145 w-140 ml-90 mt-15 lg:col-span-7 bg-gray-200  md:p-7 rounded-2xl shadow-2xl border border-stone-200/80    '>
          <h3 className="text-2xl font-serif font-bold text-stone-900 ml-40 ">Member Create</h3>
          <div className='ml-12 flex flex-wrap gap-5'>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mt-5 mb-2 ">name</label>
              <input
                type="text"
                required
                placeholder='enter member name'
                value={name}
                onChange={(event) => setName(event.target.value)}

                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>
            <div>
              <label className="mt-5  block text-xs font-semibold text-stone-700 tracking-wider mb-2">Post</label>
              <input
                type="text"
                required
                placeholder='enter post'
                value={post}
                onChange={(event) => setPost(event.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className=" mt-5 block text-xs font-semibold text-stone-700  tracking-wider mb-2">PhoneNo</label>
              <input
                type="number"
                required
                placeholder='enter phoneNo'
                value={phoneNo}
                onChange={(event) => setPhoneNo(event.target.value)}
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
              <label className=" mt-5 block text-xs font-semibold text-stone-700  tracking-wider mb-2">Address</label>
              <input
                type="text"
                required
                placeholder='enter address'
                value={address}
                onChange={(event) => setAddress(event.target.value)}
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

export default MemberCreate;