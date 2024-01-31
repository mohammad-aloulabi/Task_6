
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import Hero from './Component/Hero/Hero';
import Books from './Component/Books/Books';
import MapComp from './Component/MapComp/MapComp';
import Info from './Component/Info/Info';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Info/:id' element={<Info />} />
      </Routes>

    </>
  )
}

export default App


