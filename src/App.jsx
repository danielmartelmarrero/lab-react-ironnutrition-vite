import { useState } from "react";
import "./App.css";
import foodsJSON from "./foods.json"


function App() {

  const [foods, setFoods] = useState(foodsJSON)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
