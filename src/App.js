import './App.css';
import Navbar from './components/Nav'
import { Routes, Route } from "react-router-dom";
import Acecraft from './components/Acecraft';
import College from './components/College';
import School from './components/School';
import Enterprice from './components/Enterprice';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Arienmask from './components/Arienmask';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Acecraft />} />
        <Route exact path='School' element={<School />} />
        <Route exact path='College' element={<College />} />
        <Route exact path='Enterprice' element={<Enterprice />} />

        <Route exact path='Notes' element={<Notes />} />
        <Route exact path='Arienmask' element={<Arienmask />} />

      </Routes>

      <Footer/>






    </div>
  );
}

export default App;
