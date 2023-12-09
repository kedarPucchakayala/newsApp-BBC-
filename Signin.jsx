import React from 'react';
import front from '../images/front.jpg';
import blogo from '../images/blogo.jpg';
import { signInWithPopup } from 'firebase/auth';

import {auth,googleProvider } from '../firebase/setup'


const Signin = () => {

const googleSignin = async() =>{
  try {
    await signInWithPopup(auth,googleProvider)
  } catch (error) {
    console.error(error)
  }
  
}
console.log(auth);

  return (
    <div className='grid grid-cols-2 bg-black h-screen'>
        <div>
         <img src={blogo} className='h-32 bg-black ml-60 text-center mt-30 h-70' />
         <h1 className='text-white text-3xl font-semibold ml-56 mt-2'>Sign in with your email or <br/> <span className='ml-24'>username</span></h1>
         <button onClick={googleSignin} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded h-14 ml-60  mt-7 w-96">
             Sign in
         </button>
         <h1 className='text-blue-500 ml-60 mt-2 underline'>Need help signing in</h1>
        </div>
        <div>
             <img src={front} className='h-screen' />
        </div>
   
      
    </div>
  )
}

export default Signin
