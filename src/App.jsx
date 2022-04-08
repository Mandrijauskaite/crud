// import { useEffect, useState } from 'react';
import './App.css';
import Paspirtukai from './Components/crud/Paspirtukai';
// import axios from 'axios';



function App() {
  return (

    <div className="App">
      <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "60px" }}>Paspirtukų nuoma</h1>
      <Paspirtukai></Paspirtukai>

    </div>

  );
}
export default App;