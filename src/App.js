import React from 'react';
import Slider from './components/slider';
import Header from './components/header';
import We_do from './components/we_do';

import { NavLink, Route, Routes } from 'react-router-dom';

import Download from './components/download';
import Programminggg from './components/nav/Programminggg';

import Contact from './components/nav/Contact';
import Footer from './components/Footer';
import EncryptPage from './components/tools/encrypt_txt_input';
import DecryptPage from './components/tools/decryption_txt';
function App() {
  return (
    <>

    <Routes>
      <Route path="/encrypt" element={<EncryptPage />} />
      <Route path="/decrypt" element={<DecryptPage />} />
      <Route path='/' element={ 
          <div className="hero_area">
              <Header />
              <Slider /> 
              <We_do />
              <Programminggg/>
              <Download/>
              <div style={{ marginTop: "50px" }}>
                <Footer/> 
               </div>
            </div>
       }></Route>

      <Route path='/programming' element={
         <div >
         <div style={{ backgroundColor: "black" }}>
           <Header  />
         </div>
         <Programminggg/>
         <div style={{ marginTop: "50px" }}>
            <Footer/> 
          </div>
         
       </div>
      }></Route>

      <Route path='/cryptotools' element={
        <div >
          <div style={{ backgroundColor: "black" }}>
            <Header  />
          </div>
          <We_do />
          <div style={{ marginTop: "50px" }}>
            <Footer/> 
          </div>
          
        </div>
        }></Route>
      
      <Route path='/downloads' element={
         <div >
          <div style={{ backgroundColor: "black" }}>
           <Header  />
          </div>
          <Download/>
          <div style={{ marginTop: "50px" }}>
            <Footer/> 
          </div>
       </div>
     }></Route>
     
      <Route path='/contact' element={
         <div >
         <div style={{ backgroundColor: "black" }}>
           <Header  />
         </div>
         <Contact/>
         <div style={{ marginTop: "50px" }}>
            <Footer/> 
          </div>
         
       </div>
      }></Route>
    </Routes>



    </>
  );
}


// Add other components for Programming, Downloads, Clients, Target, and Contact in a similar way

export default App;
