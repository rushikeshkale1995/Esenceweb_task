import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Krustycone from "./Component/Krustycone";
import { Navbar } from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Krustycone />
    </div>
  );
}

export default App;
