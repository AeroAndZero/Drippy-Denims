import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GenderPage from './pages/GenderPage';

function App() {
  return (
    <>
    <Header />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Men" element={<GenderPage gender="m" />} />
        <Route path="/Women" element={<GenderPage gender="w" />} />
      </Routes>
    </BrowserRouter>
    
    <Footer />
    </>
  );
}

export default App;
