import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import 'aos/dist/aos.css'
function App() {
  return (
    <Router>
      <Routes>
        {/* Fallback for default URL, Redirect to /home */}
        <Route exact path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
