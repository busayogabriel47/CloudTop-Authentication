import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup'
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Home from './Components/Home';

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
    </Routes>
        
    </>
  )
}

export default App
