import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
export const TestimonyContext = createContext();


const TestimonyContextProvider = ({children})=>{

 const [state, setState] = useState([
    {name: 'Jimoh Bola', branch: 'Lagos', message: 'Thank God', id: uuidv4()}
 ])
     const addTestimony = (name, branch, message)=>{
           setState([...state, {name, branch, message, id: uuidv4()}])
     }
    return(
        <TestimonyContext.Provider value={{state, addTestimony}}>
           {children}
        </TestimonyContext.Provider>
    )
}

export default TestimonyContextProvider;