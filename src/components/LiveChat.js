import React, { useEffect,useRef, useState } from 'react'
import { commentData } from './CommentsContainer'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import ChatMsg from './ChatMsg';
import { nameGenerator,randomText } from '../utils/helper';


const LiveChat = () => {
    const chatMsgs = useSelector(store=>store.chat.messages);
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const [sendChat,setSendChat] = useState("");
    const scrollToBottom = () => {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight;
      };
    
    useEffect(()=>{
        scrollToBottom();
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:nameGenerator(),
                text:randomText(20)
            }))
            scrollToBottom();
        },2000);
        return ()=> clearTimeout(i);
    },[]);    
    const dispatchMessage = ()=>{
        dispatch(addMessage({
            name:"nandy❤",
            text:sendChat
        }));
        setSendChat('');
    }
    
  return (
    <>
    <div className='w-4/5 border border-black mx-6 rounded-lg flex flex-col-reverse' style={{height:"550px"}} >
        <div ref={containerRef} className='overflow-y-scroll'>
            {chatMsgs.map((item,index)=>{
                return(<ChatMsg {...item} key={index} index={index}/>)})
            }
        </div>
    </div>
     <form onSubmit={(e)=>e.preventDefault()} className='w-4/5 border border-gray-300 ml-6 mt-6 flex items-center gap-4 '>
        <input type="text" value={sendChat} onChange={(e)=>setSendChat(e.target.value)} autoFocus className='px-2 py-2 w-4/5 outline-none'/>
        <button
         onClick={(e)=>{
            e.preventDefault();
            dispatchMessage()}}
             className='border border-gray-200 p-2 rounded-md  bg-pink-500 text-white'
             type='submit'>send</button>
    </form>
 </>
  )
}

export default LiveChat