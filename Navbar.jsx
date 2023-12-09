import React from 'react'
import blogo from '../images/blogo.jpg';
import { FaUser } from "react-icons/fa";
import search from "../images/search.jpg"
import { Link } from 'react-router-dom';
import {auth } from '../firebase/setup';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {

    const navigate = useNavigate()

    const logout = async()=>{
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.error(error);
        }

    }
  return (
    <div className='grid grid-cols-3 bg-black h-18 mt-0 text-white fixed'>
        <div className='flex align-items:center'>
            <img src={blogo} className='h-20 ml-20' />
           {auth.currentUser ? <button>
            <button onClick ={logout}className='text-white flex mt-8 hover:underline  blue-500'><FaUser className='mr-2'/><span className='font-semibold'> 
                Logout</span></button>
           </button>:<Link to="/signin"> <button className='text-white flex mt-8 hover:underline blue-500'><FaUser className='mr-2'/><span className='font-semibold'> 
                Sign in</span></button></Link>
           }
           
        </div>
        <div className='flex'>
          <button  onClick={()=>props.setMenu('All')}className='ml-1 font-semibold text-sm'>
                Home
          </button>
          <button onClick={()=>props.setMenu('Science')} className='ml-7 font-semibold'>
            News
            </button>
            <button onClick={()=>props.setMenu('Sport')} className='ml-7 font-semibold'>
              Sport
            </button>
            <button onClick={()=>props.setMenu('Earth')} className='ml-7 font-semibold'>
               Earth
            </button>
            <button onClick={()=>props.setMenu('Reel')} className='ml-7 font-semibold'>
                 Reel
            </button>
            <button onClick={()=>props.setMenu('Worklife')} className='ml-7 font-semibold'>
                Worklife
            </button>
            <button onClick={()=>props.setMenu('Travel')} className='ml-7 font-semibold'>
                Travel
            </button>
            <button onClick={()=>props.setMenu('Culture')} className='ml-7 font-semibold'>Culture</button>
        </div>
        <div className='flex p-4 ml-40'>
             <img src={search} className='h-6 mt-5 ' />
            <input onChange={(e)=>props.setSearch(e.target.value)} type='text' className='ml-1  mt-4 flex bg-black'placeholder='Search a BBC'/>
        
        </div>
     
    </div>
  )
}

export default Navbar
