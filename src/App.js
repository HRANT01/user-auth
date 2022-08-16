import './App.css';
import Login from './Components/Login';
import ForgPass from './Components/ForgPass';
import { Routes, Route} from "react-router-dom"

function App() {

  return (
        
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='forg' element={<ForgPass/>}/>
        </Routes>
  )  
}
// 
export default App;
