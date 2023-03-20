import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import References from "./pages/References"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Interest from "./pages/Interest"
import Skills from "./pages/Skills"
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/references' element={<References/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/interest' element={<Interest/>} />
          <Route path='/skills' element={<Skills/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
