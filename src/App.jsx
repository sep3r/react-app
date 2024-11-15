import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  
  return (
    <>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </>
  )
}

export default App
