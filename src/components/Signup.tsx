import React, { useState } from 'react'
type Props={
    form:boolean,
    setForm :React.Dispatch<React.SetStateAction<boolean>>
}
export default function Signup({form,setForm}:Props) {
    const [show,setShow] = useState('password')
    const [visibility,setVisibility] = useState('show')
    const handlePasswordVisibility = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        show === 'password' ? setShow('text'): setShow('password')
        visibility === "show" ? setVisibility("hide"): setVisibility("show")
    }
  return (
    <>
      <form className=' px-14  bg-neutral-900 rounded-2xl w-3/4 h-4/5  flex flex-col justify-center'>
              <h1 className=' text-4xl overflow-hidden font-semibold my-3'>Create account</h1>
              <p className='py-3'>Have an account!?, try  <span className='text-red-500 underline'><button onClick={()=>{setForm(true)}} className='text-lg underline'>Logging in</button></span></p>
              <div className='flex justify-center items-start flex-col'>
               <div >
               <label htmlFor="email" className=' text-white tracking-wide text-lg ' >Name:</label>
               </div>
                <div className='w-8/12'>
                <input className='border disabled border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400 text-black' disabled={true} placeholder='Your Name' type="text" />
                </div>
              </div>
              <div className='flex justify-center items-start flex-col'>
               <div >
               <label htmlFor="email" className=' text-white tracking-wide text-lg ' >Email:</label>
               </div>
                <div className='w-8/12'>
                <input disabled={true} className='border disabled: border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400 text-black' placeholder='Your Email Address' type="email" />
                </div>
              </div>


              <div className='flex justify-center items-start flex-col mt-3'>
               <div>
               <label htmlFor="password" className=' text-white tracking-wide text-lg ' >Password:</label>
               </div>
                <div className='w-3/4 flex items-center'>
                <input disabled={true} className='border border-slate-400 w-full p-3 my-3 rounded text-black outline-slate-400 tracking-wide' placeholder='Enter Password' type={show} />
                <button className="border border-slate-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label relative right-14" onClick={handlePasswordVisibility} >{visibility}</button>
                </div>
              </div>

        
              <div className='flex flex-row-reverse w-full my-3 px-3'>
                <button className='bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded' disabled={true}>Register</button>
              </div>

        </form>   
    </>
  )
}
