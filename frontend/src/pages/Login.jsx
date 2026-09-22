import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {

  let Navigate = useNavigate()
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  })



  async function handleSubmite() {
    let response = await axios.post( import.meta.env.VITE_beckend_base_URL+"/auth/login",formData,{withCredentials:true});
    console.log(response.data);
    if(response.data.success == true){
Navigate('/createProject')  }
  }

  return (
    <div className='  bg-gray-200 min-h-screen '>



      <div className='' >

        <div className='h-146 w-110 ml-112 bg-blue-200 px-10 rounded-2xl shadow-2xl border border-stone-200 '>
          <h3 className="text-2xl font-bold text-stone-900 ml-28 mt-5">Login Page</h3>
          <div className='ml-20 flex flex-wrap gap-5 '>
            <div>
              <label className="block text-x text-stone-700 mt-3 mb-2 ">Name</label>
              <input
                type="text"
                required
                placeholder='enter your name'
                onChange={function (event) {
                  setFormData({ ...formData, name: event.target.value })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-20 rounded-xl text-sm 
                 focus:ring-amber-500/50 transition-all"/>
            </div>
            <div>
              <label className="  block text-x font-semibold text-stone-700 mb-2">Email</label>
              <input
                type="email"
                required
                placeholder='enter your email'
                onChange={function (event) {
                  setFormData({
                    ...formData, email: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-20 rounded-xl text-sm 
                 focus:ring-amber-500/50 transition-all"/>
            </div>

            <div>
              <label className="mt-2 block text-x font-semibold text-stone-700 mb-2">Passward</label>
              <input
                type="password"
                required
                placeholder='enter your password'
                onChange={function (event) {
                  setFormData({
                    ...formData, password: event.target.value
                  })
                }}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-20 rounded-xl text-sm 
                focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
            </div>

            <div>
              <label className=" block text-x font-semibold text-stone-700 mb-2">Role</label>
              <select
                type="text"
                required
                onChange={function (event) {
                  setFormData({
                    ...formData, role: event.target.value
                  })
                }}
                className=" px-14 py-3 bg-stone-50 border border-stone-200 rounded-xl 
                text-sm  focus:ring-amber-500/50 focus:border-amber-500 
                transition-all">
                <option value={""}>Select Role</option>
                <option value={"admin"}>Admin</option>
                <option value={"user"}>User</option>
              </select>
            </div>

            <div>
            </div>
            <button
              onClick={handleSubmite}
              className="mt-2 px-20 bg-blue-600 hover:bg-blue-800 text-white  font-bold py-4 rounded-xl 
              transition-all duration-400  cursor-pointer"
            >
              Submit
            </button>
            <a className='ml-8 text-blue-600 hover:text-blue-600' href="/"> Registration Page</a>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;