import { Routes, Route } from 'react-router-dom'
import LearnHOC from './pages/LearnHOC';
import Testing from './pages/Testing';
import Home from './pages/Home';

function App() {
  // const Button = (props) => <button style={props.style}>Click me</button>
  // const Text = (props) => <p style={props.style}>Testing</p>

  // const StyleButton = LearnHOC(Button)
  // const StyleText = LearnHOC(Text)

  return (
    <div>
      {/* <StyleButton text="test" />
      <Button />
      <StyleText /> */}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
