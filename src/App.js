import React from 'react';
import './App.css';

import EmployeePanel from "./components/EmployeePanel"
import ComputerPanel from "./components/ComputerPanel"
import HirePanel from "./components/HirePanel"

const style={
  textAlign: "center"
}

function App() {
  return (
    <div>
      <ComputerPanel />
    </div>
  );
}

export default App;
