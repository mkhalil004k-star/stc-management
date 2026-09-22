import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function AllMember() {


  let Navigate = useNavigate();
  let [member, setMember] = useState([])

  async function get() {
    try {
      let response = await axios.get( import.meta.env.VITE_beckend_base_URL+"/members/allMember")
      let members = response.data?.data
      setMember(Array.isArray(members) ? members : [])
    } catch (error) {
      console.error("Failed to load members", error)
      setMember([])
    }

  }
  useEffect(() => {
    get()
  }, [])


  return (
    <div className=' bg-gradient-to-r from-neutral-800 to-neutral-800 '>
      <div className="  min-h-screen w-screen p-6 ">
        <h1 className="text-3xl font-bold text-center text-gray-200 mb-8">
          Welcome To All Members
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 flex md:grid-cols-3 lg:grid-cols-4 gap-6 flex-wrap ml-70  ">
          {member.map((eachData, index) => {
            return (
              <div
                key={eachData._id || index}
                className=" bg-gradient-to-r from-neutral-900 rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >

                <div className="h-48 w-full bg-gray-200 overflow-hidden">
                  <img
                    src={eachData.imageUrl}
                    alt="Project image"
                    className="w-full h-full object-cover"
                  />
                </div>


                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-blue-600 truncate">
                    {eachData.name}
                  </h2>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      ${eachData.phoneNo}
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ${eachData.address}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={function () {
                        Navigate(`/updateMember/${eachData._id}`);
                      }}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={async function () {
                        let response = await axios.post(
                          import.meta.env.VITE_beckend_base_URL+"/members/deleteMember",
                          { id: eachData._id }
                        )
                        console.log(response);
                        if (response.data.success == true) {
                          get()
                        }
                      }}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default AllMember;