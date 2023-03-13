import { Routes, Route } from 'react-router-dom'
import Testing from './pages/Testing';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
