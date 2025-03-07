import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Navigate to ='/Inicio' />} />
        <Route path="/Inicio" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
      
   
  )
}

export default App
