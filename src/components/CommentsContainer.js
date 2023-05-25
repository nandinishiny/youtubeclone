import React, { useState } from 'react'
import {AiFillLike} from 'react-icons/ai'
import {AiFillDislike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {AiOutlineLike} from 'react-icons/ai'
import {BsEmojiLaughing} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const commentData =[
    {
        name:"Akshay Saini",
        text:"Hey superb vdieo dear",
        image:"https://yt3.googleusercontent.com/ytc/AGIKgqMryUQT7bF4-kBW7iVBSZwW0EHq08HFJmiT6Ney=s176-c-k-c0x00ffffff-no-rj",
        replies:[
            {
            name:"Akshay Saini",
            text:"Hey superb vdieo dear",
            image:"https://yt3.googleusercontent.com/ytc/AGIKgqMryUQT7bF4-kBW7iVBSZwW0EHq08HFJmiT6Ney=s176-c-k-c0x00ffffff-no-rj",
            replies:[
                {name:"Akshay Saini",
                text:"Hey superb vdieo dear",
                image:"https://yt3.googleusercontent.com/ytc/AGIKgqMryUQT7bF4-kBW7iVBSZwW0EHq08HFJmiT6Ney=s176-c-k-c0x00ffffff-no-rj",
                replies:[
                ]
                }
            ]
            }

        ],
        
    },{
        
        name:"Nandini divity",
        text:"Hey cool , editing is at top-notch",
        replies:[
            
        ],
        image:"https://yt3.googleusercontent.com/ytc/AGIKgqMryUQT7bF4-kBW7iVBSZwW0EHq08HFJmiT6Ney=s176-c-k-c0x00ffffff-no-rj"
    },
    {
        
        name:"Nandini Shiny",
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quo amet iusto, exercitationem quibusdam deleniti ad sunt voluptatem voluptate deserunt ipsum tempore voluptates veniam cumque nemo? Fugiat consectetur iste placeat.",
        replies:[
            
        ],
        image:"https://yt3.googleusercontent.com/ytc/AGIKgqMryUQT7bF4-kBW7iVBSZwW0EHq08HFJmiT6Ney=s176-c-k-c0x00ffffff-no-rj"
    }
]
const Comment = ({data})=>{
    const [likeInitial,setLikeInitial] = useState(false) ;
    const [dislikeInitial,setDisLikeInitial] = useState(false) ;
    const [inputOff,setInputOff] = useState(false) ;
    const changeLikeInitial = (like)=>{
        setLikeInitial(!like)   
    }
   
    const {name,text,replies,image}=data;
    return(
        <div className='flex flex-col bg-gray-200 my-4 m-l-4 ' >
            <div className='flex items-start gap-4'>
                <img src={image} alt="" className='rounded-full w-10 h-10 object-cover'/>
                <div>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm'>{text}</p>
                <div className='flex items-center gap-2 cursor-pointer'> 
                    {likeInitial?<AiFillLike onClick={()=>changeLikeInitial(likeInitial)}/>:<button onClick={()=>changeLikeInitial(likeInitial)}><AiOutlineLike/></button>}
                    {dislikeInitial?<AiFillDislike onClick={()=>setDisLikeInitial(!dislikeInitial)}/>
                    : <AiOutlineDislike onClick={()=>setDisLikeInitial(!dislikeInitial)}/>}
                    <button onClick={()=>setInputOff(true)}>Reply</button>
                    </div>
                    { inputOff&&<div>
                        <div className='flex gap-2'>
                            <img src={image} alt="" className='rounded-full w-6 h-6 object-cover'/>
                            <Link><span>@{name}</span></Link>
                            <input type="text" className='outline-none bg-transparent border-b-2 border-black 
                            ml-4 ' style={{width:"1000px",whiteSpace:"normal",
                            overflowWrap: "break-word"}} autoFocus/>
                        </div>
                        <div className='flex items-center gap-4'>
                            <BsEmojiLaughing className='cursor-pointer'/>
                            <button onClick={()=>setInputOff(false)}>Cancel</button>
                            <button>Reply</button>

                        </div>
                    </div>}
                </div>
            </div>   
        </div>
    )
}
const CommentList = ({comments})=>{
    return( comments.map((commentElement,index)=>{
        return(
        <div key={index}>
            <Comment data={commentElement} />
            <div className='ml-10'>
                <CommentList comments={commentElement.replies}/>
            </div>
        
        </div>)
    })
    )
   
}

const CommentsContainer = () => {
  return (
    <div className='p-5 m-2'>
        <h1 className='text-xl font-bold'>Comments</h1>
        <CommentList comments = {commentData}/>
            {/* {
                commentData.map((item,index)=>{
                   return(<Comment data ={item} key={index}/>) 

                })
            } */}
            
    </div>
  )
}

export default CommentsContainer