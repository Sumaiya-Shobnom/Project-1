import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About-us';


function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Home />}></Route>
      <Route exact path={'/About-us'} element={<AboutUs />}></Route>
    </Routes>
  );
}

export default App;
