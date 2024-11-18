import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element = { <ListStudentComponent />}></Route>
        <Route path='/employees' element =  { <ListStudentComponent />}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
