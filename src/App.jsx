import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <>
      <Navbar/>
     <AnimatedRoutes/>
    </>
  );
}

export default App;
