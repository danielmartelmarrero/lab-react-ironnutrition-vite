import { useState } from "react";
import "./App.css";
import foodsJSON from "./foods.json"
import FoodBox from "./components/FoodBox";

function App() {

  const [foods, setFoods] = useState(foodsJSON)

  function deleteFood(foodId){
    const newlist = [...foods].filter((oneFood)=>{
      return oneFood.id != foodId
    })
    setFoods(newlist)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      {foods.map((oneFood)=>{
        return <FoodBox food={
          {
            id: oneFood.id,
            name: oneFood.name,
            calories: oneFood.calories,
            image: oneFood.image,
            servings: oneFood.servings,
          }}  
          deleteFood={()=>deleteFood(oneFood.id)}/>
      })}
      
      </div>
  );
}

export default App;
