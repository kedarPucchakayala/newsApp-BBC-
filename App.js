import React from 'react'
// import Signin from './components/Signin';

import {Routes,Route} from "react-router-dom";
import Signin from './components/Signin';
import Main from './components/Main';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <div className="">
    
     <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/details' element={<NewsDetails/>}/>
     
     </Routes>
    

    </div>
  );
}

export default App;
