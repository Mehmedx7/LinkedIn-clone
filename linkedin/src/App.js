import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './pages/Body';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Body/>}/>
        <Route path='/jobs' element={<Body/>}/>
        <Route path='/myNetwork' element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
