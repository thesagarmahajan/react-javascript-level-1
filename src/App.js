import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import UseCallbackExample1 from './hooks/use_callback/UseCallbackExample1';

function App() {


  
   return (
      <div style={{padding:"20px"}}>
        
        <UseCallbackExample1 />
      </div>
    );
}

export default App;
