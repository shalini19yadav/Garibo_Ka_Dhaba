import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
