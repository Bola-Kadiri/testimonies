import './App.css';
import Testimony from './component/Testimony';
import TestimonyContextProvider from './context/TestimonyContext';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Form from './component/Form';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <TestimonyContextProvider>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Testimony/> } />
         <Route path="/form" element={<Form/>} />
         </Routes>
     </TestimonyContextProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
