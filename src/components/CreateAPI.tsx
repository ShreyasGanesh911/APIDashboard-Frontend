import React, { useState } from 'react'
const point = 'https://apidashboard-backend.onrender.com'
type Data = {
    success:Boolean,
    message:String
  }
  type Props = {
    setUpdate:React.Dispatch<React.SetStateAction<boolean>>,
    update:Boolean
  }
export default function CreateAPI({setUpdate,update}:Props) {
    
    const [tag,setTag] = useState('')
    const [message,setMessage] = useState('')
    const [wait,setWait] = useState(false)
    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        setWait(true)
        if(tag === '')  
            return setMessage("Please enter a name ")
        const response = await fetch(`${point}/user/createKey`, {
        method: "POST", 
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({tag})
      })
      const data:Data = await response.json()
      if(data.success){
        setMessage("New API key added")
        setTag('')
      }
      else if(data.message.includes("E11000")){
        setMessage("Duplicate key, use another name")
      }
      else 
        return setMessage("Internal server error")
      update ? setUpdate(false):setUpdate(true)
      setTimeout(()=>{
        setWait(false)
      },1000)
    }
  return (
    <>
     <div className='w-11/12 mt-6 bg-neutral-900 p-3 rounded  min-h-24 h-auto overflow-hidden '>
        <h1 className='text-yellow-500 text-lg pl-6'>Create new API key</h1>  
        <div className='w-5/6 displayFlex '>
            <input type="text" placeholder='Enter API name' className='p-2  rounded tracking-wide outline-slate-400 border border-slate-400 mx-5 ' value={tag} onChange={(e)=>setTag(e.target.value)} />
            <button className={`border border-black text-black  font-bold py-2 px-4 rounded bg-yellow-300 hover:bg-yellow-400 ${!wait ? "":"cursor-wait"}`}  onClick={handleClick}>Create</button>
        </div>
        <div className={`text-center w-3/4 py-2 h-10 text-green-600 ${message.length>0?'visible':"invisible"}`}>
            {message}
        </div>

     </div> 
    </>
  )
}
