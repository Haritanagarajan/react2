import './App.css';
import Navbar from './components/Nav'
import { Routes, Route } from "react-router-dom";
import Acecraft from './components/Acecraft';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path='Homepage' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
