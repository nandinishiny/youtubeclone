import React from "react";
const ChatMsg =(props)=>{
   const {image,name,text,index} = props
    return(
        <div className='flex items-start gap-3 mb-2'>
            <img src={image} alt="" className='rounded-full w-6 h-6 object-cover'/>
            <p>{name}</p>
            <p className='text-sm whitespace-normal overflow-wrap break-words flex-shrink-0 w-3/5 px-4 '>{text}</p>
            <p>{index}</p>
           
        </div>
    )
}
export default ChatMsg;