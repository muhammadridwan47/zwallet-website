import React from 'react';
import Routing from './Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>  
      <Routing/>
      <ToastContainer />
    </>
  );
}

export default App;
