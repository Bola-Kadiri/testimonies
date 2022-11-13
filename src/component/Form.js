import React, {useContext, useState} from 'react'
import { TestimonyContext } from '../context/TestimonyContext'
import './Form.css'
import { useNavigate } from "react-router-dom";


const Form = () => {
  const navigate = useNavigate()
    const {addTestimony} =  useContext(TestimonyContext);
    const [name, setName] = useState('');
    const [ branch, setBranch] = useState('');
    const [message, setMessage] = useState('')
    const handleSubmit=(e)=>{
       e.preventDefault();
       addTestimony(name, branch, message)
       navigate('/')
       setName('');
       setBranch('');
       setMessage('')
    }
  return (
    <div className='form-input'>
       <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='text' placeholder='Fellowship Chapter' value={branch} onChange={(e)=>setBranch(e.target.value)}/>
          <textarea
         placeholder='Share Your Testimony' value={message} onChange={(e)=>setMessage(e.target.value)}/>
         <button>Submit</button>
       </form>
    </div>
  )
}

export default Form