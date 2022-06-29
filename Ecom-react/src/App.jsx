import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
