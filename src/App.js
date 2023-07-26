import './App.css';
import {Routes,Route, } from 'react-router-dom'
import Public from './components/HomePage';
import Layout from './components/Layout';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Public />} >

        </Route>
        </Route>
      </Routes>
  );
}

export default App;
