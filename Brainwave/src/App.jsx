import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App