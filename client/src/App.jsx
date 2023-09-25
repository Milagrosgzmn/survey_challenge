import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './views/home/home';
import Consult from './views/consult/consult';
import Error from './views/error/error';
import Survey from './views/survey/survey';
import UpdateSurvey from './views/updateSurvey/updateSurvey';

import NavBar from './components/navBar/navBar';

import './App.css';

function App() {
  let location = useLocation();
  const allowedPaths = ['/', '/survey', '/consult'];

  return (
    <>
      {allowedPaths.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/survey' element={<Survey/>} />
        <Route path='/consult' element={<Consult/>} />
        <Route path='/survey/update' element={<UpdateSurvey/>} />
        <Route path='*' element={<Error/>} />
      </Routes>  
    </>
  );
}

export default App;
