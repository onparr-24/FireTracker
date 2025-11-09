import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Savings from './Screens/Savings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Savings" element={<Savings />} />
      </Routes>
    </Router>
  );
}

export default App;
