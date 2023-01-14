import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './pages/Body';
import Login from './pages/Login';
import MyNetwork from './pages/MyNetwork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Body/>}/>
        <Route path='/jobs' element={<Body/>}/>
        <Route path='/myNetwork' element={<MyNetwork/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
