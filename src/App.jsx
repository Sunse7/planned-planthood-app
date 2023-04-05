import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './Components/Header';
import PlantedPlants from './pages/PlantedPlants';
import SowTips from './pages/SowTips';

function App() {

  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plantedplants' element={<PlantedPlants />} />
      <Route path='/sowtips' element={<SowTips />} />
    </Routes>
   </Router>
  )
}

export default App
