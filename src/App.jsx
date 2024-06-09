import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination';
import Trip from './pages/Trip/Trip';
import Contact from './pages/Conctact/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Head from './components/Head';
import Footer from './components/Footer'
import './App.css'
import Events from './Events'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Head/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/trip" element={<Trip/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
     <Footer />
    </>
  )
}

export default App
