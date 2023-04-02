import { useState, useContext } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import { database } from './firebase';
import { ProdContext } from './prodContext';
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from 'react';

import NavBar from './components/navbar';
import Button from "./components/button";


function App() {
  const [count, setCount] = useState(0);
  const myProdContext = useContext(ProdContext)
  return (
    <div >
      <NavBar/>
      <div className=' flex justify-center space-x-5 h-80 ml-32 mr-20 '>
        <div className='flex flex-col '>
            <div className="bg-cover  bg-center bg-[url('/src/assets/images/boucle.png')] flex flex-1 h-[300px]">
              <h4 className="  text-white  m-auto font-serif uppercase">Boucle d'oreille</h4>
            </div>
            <Button path={"Boucle"} label={"Boucle d'oreille"}/>
        </div>
        <div className='flex flex-col'>
            <div className=" bg-cover bg-center bg-[url('/src/assets/images/collier.png')] flex flex-1 h-[300px]">
              <h4 className=" text-white m-auto font-serif uppercase">Collier</h4>
            </div>
            <Button path={"Collier"} label={"COLLIER SITA"}/>
        </div>
        <div className='flex flex-col'>
          <div className="bg-cover bg-center bg-[url('/src/assets/images/bague.png')] flex flex-1 h-[300px]">
            <h4 className="  text-white m-auto font-serif uppercase">Bague</h4>
          </div>
          <Button path={"Bague"} label={"BAGUE CHIARA"}/>
        </div> 
      </div> 
    </div>
    
  )
}

export default App;