import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './views/home/home';
import Consult from './views/consult/consult';
import Error from './views/error/error';
import Survey from './views/survey/survey';
import UpdateSurvey from './views/updateSurvey/updateSurvey';
import Success from "./views/success/success";

import NavBar from './components/navBar/navBar';

import './App.css';

const apiBackUrl = import.meta.env.VITE_API_BACK_URL;
const urlApi = apiBackUrl || 'http://localhost:3001';
axios.defaults.baseURL = urlApi;

function App() {
  let location = useLocation();
  const allowedPaths = ['/', '/survey','/survey/success', "/survey/update",'/consult'];

  return (
    <>
    
      {allowedPaths.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/survey' element={<Survey/>} />
        <Route path='/consult' element={<Consult/>} />
        <Route path='/survey/update' element={<UpdateSurvey/>} />
        <Route path='*' element={<Error/>} />
        <Route path='/survey/success' element={<Success/>} />
      </Routes>  
    </>
  );
}

export default App;
