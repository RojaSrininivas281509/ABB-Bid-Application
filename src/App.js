import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './Components/AuctionHeader';
import Home from './Components/Home';
import Auctions from '../src/Components/Auctions';
import Bid from '../src/Components/Biding';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/biding" element={<Bid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
