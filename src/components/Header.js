import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoSearch } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import ytlogo from '../assets/yt_logo.png';
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../redux/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../redux/searchSlice";
const Header = ()=>{
    const [showSuggestion,setShowSuggestions] = useState(false);
    const [searchQuery,setSearchQuery] = useState('');
    const [searchSuggestion,setSearchSuggestions] = useState([]);
    const searchCache = useSelector(store=>store.search);
    const dispatch = useDispatch();
    const openSidebarMenu = ()=>{
        dispatch(openSidebar())
    }
    const gotSearchValue =(e)=>{
        setSearchQuery(e.target.value);
        setShowSuggestions(true); 
       
            
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSearchSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchApi()}
            },200);   
        return()=>{
            clearTimeout(timer); //generally by every searchquery useEffect will call and by that many timers will active. so by clearing that it will wait till clearing timer and after that it will start new timeout.
        }
       
    },[searchQuery]);
    const getSearchApi =async()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }));
        // setShowSuggestions(true); 
       }
    

    
    return(
        <header className="p-2 w-full  ">
            <nav className="flex items-center justify-between px-8">
                <div className="flex items-center gap-4" >
                    <RxHamburgerMenu className="text-xl cursor-pointer" onClick={()=>openSidebarMenu()} />
                    <img src={ytlogo} alt="" className="w-40 h-6 object-contain cursor-pointer" />
                </div>
                <div className="flex items-center" >
                    <input type="text" className="border-2 border-gray-400 border-r-0 rounded-l-lg p-1 w-80 h-10 outline-none" placeholder="Search" onChange={(e)=>gotSearchValue(e)}  value={searchQuery} onBlur={()=>setShowSuggestions(false)} />
                    {showSuggestion&& <button className="border-2 border-gray-400 h-10 py-1 border-l-0 border-r-0 px-2" onClick={()=>{setSearchQuery('');setShowSuggestions(false)}}><RxCross2 className="text-md"/></button>}
                    <button className="py-1 px-4 border-l-0 border-2 border-gray-400 rounded-r-full bg-gray-100 h-10 "><GoSearch className="text-md text-gray-500"/></button>
                </div>
                <div >
                    <img src="https://media.licdn.com/dms/image/D5635AQG8gXvU8bqn4Q/profile-framedphoto-shrink_400_400/0/1680792634362?e=1684828800&v=beta&t=YzwCAFplEPkagvT73emDw0rkfduXrzyyrxSHqE59scs" alt=""className="rounded-full w-10 h-fit object-contain cursor-pointer"  />
                </div>
            
            </nav>
            <div className="flex justify-center ">
                {showSuggestion&&<div className="w-60 h-fit min-h-20  fixed  bg-white ">
                    {searchSuggestion && searchSuggestion.length >0 ? searchSuggestion.map((item,index)=>{
                        return(<p key={index}className="flex items-center justify-start gap-2 p-l-4 hover:bg-gray-500 cursor-pointer"><GoSearch/>{item}</p>
                    )}): null}
                </div>}
            </div>

        </header>
    )
}
export default Header;
