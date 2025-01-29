// import { useEffect } from "react"
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast'

// import { leadGenerate } from '../Redux/Slices/LeadSlice'

const FormPopup = ({onClose}) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//   })

//   function handleChange(e){
//     const { name, value } = e.target
//     setFormData({ 
//       ...formData,
//       [name]: value
//     })
//     console.log(formData)
//   }

//   async function FormSubmission(e) {
//     e.preventDefault()
    
//     if(!formData.fullName || !formData.email || !formData.phone){
//       toast.error('Please fill all the fields')
//       return;
//     }

//     const response = await dispatch(leadGenerate(formData))
//     if(response?.payload?.success){
//       toast.success('Form Submitted Successfully')
//       navigate('/')
//     }

//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//     })
//   }

  return (
    <div className="bg-black bg-opacity-60 scroll-none sm:p-0 md:p-6 shadow-lg z-50  animate-fade-in fixed  grid h-[100%] w-[100%] place-items-center">
          <form 
        //   onSubmit={FormSubmission} 
          className="bg-white p-5 md:p-10 rounded-lg space-y-4 w-[90vw] md:w-[40vw]  w-max[25vw, 400px] z-50 relative border-solid border-2 border-gray-200">
            <div className="flex justify-between items-center">
              <h2></h2>
              <img onClick={onClose} src="/Images/close.png" alt="close" className='mt-2 w-4 h-4 cursor-pointer rounded-full'/>
            </div>

            <div className="title flex flex-col justify-between ">
              <h2 className='text-2xl font-semibold text-gray-800 text-center' >
                {/* {currState} */}
                Fill the form & Get VIP Access to latest market updates
                </h2>
            {/* o */}
            

            </div>
            {/* First Name */}
            <div>
              <label
              
                htmlFor="fullName"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Full Name
              </label>
              <input
              required
                type="text"
                id="fullName"
                name='fullName'
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                // onChange={handleChange}
              />
            </div>

            {/* Last Name
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div> */}

            {/* Email */}
            <div>
              <label
                
                htmlFor="email"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Email
              </label>
              <input
              required
                type="email"
                id="email"
                name='email'
                placeholder="Your Email Address"
                // onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contact"
                className="block text-gray-600 text-xs font-medium mb-1"
              >
                Contact Number
              </label>
              <div className="flex items-center gap-2">
                <select 
                  id="countryCode"
                  className="px-4 py-3 border read-only border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  {/* <option value="+1">+1</option> */}
                  <option value="+91">+91</option>
                  {/* <option value="+44">+44</option> */}
                  {/* Add more country codes as needed */}
                </select>
                <input
                required
                  type="tel"
                  id="contact"
                  name='phone'
                  placeholder="Phone Number"
                //   onChange={handleChange}
                  className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            {/* Location
            <div>
              <label
                htmlFor="location"
                className="block text-gray-600 text-xs font-medium mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div> */}

            {/* Checkbox */}
            <div className="flex items-center">
              <input
              required
                type="checkbox"
                id="financingInfo"
                className="h-4 w-4 accent-[#F6973F] text-transparent border-gray-300 rounded focus:ring-2 focus:ring-secondary"
              />
              <label
                htmlFor="financingInfo"
                className="ml-2 text-gray-600 text-sm"
              >
                I want financing info
              </label>
            </div>

            {/* Submit Button */}
            <button
            // onClick={onClose}
              type="submit"
              className="w-full py-3 text-white bg-[#F6973F] rounded-lg shadow-lg hover:bg-secondary transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
  )
}

export default FormPopup