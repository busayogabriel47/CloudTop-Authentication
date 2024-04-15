
import './App.css'
import Signup from './Components/Signup'
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {


  return (
    <>
    <ToastContainer/>
    <Routes>
          <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        
    </Routes>
        
    </>
  )
}

export default App
