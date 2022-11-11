import React, {useContext} from 'react'
import './Testimony.css'
import { Link } from "react-router-dom";
import { TestimonyContext } from '../context/TestimonyContext';


const Testimony = () => {
   const {state} = useContext(TestimonyContext)
   
  return (
    <div className='testimony'>
       <div className='testimony-content'>
            {state.map((test)=>{
              return(
               <div className='card' key={test.id}>
               <h2>{test.name}</h2>
               <p>{test.branch}</p>
               <div className='white-card'>
                   <p>{test.message}</p>
                </div>
                <p className='date'> Fri Oct 07 2022</p>
                <div className='box-container'>
                        <div className='box'><Link to = '/form'>Share yours😊</Link></div>
                 </div>
            </div>
              )
            })}
       </div>
    </div>
  )
}

export default Testimony