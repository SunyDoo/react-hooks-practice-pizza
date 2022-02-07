import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

const [pizzaList, setPizzas] = useState([])
const [selectPizza, setSelectPizza] = useState({})

useEffect(() => {
  fetch('http://localhost:3001/pizzas')
    .then((r) => r.json())
    .then((pizzas) => setPizzas(pizzas));
}, []);

const editPizza = (pizza) => {
  setSelectPizza(pizza)
}

function handlePizzaChange(updatedPizza) {
  fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPizza)
  })
  .then((r) => r.json())
  .then((updatedList) => console.log(updatedList))
  const updatedPizzaList = [...pizzaList].map(pizza=>{
      if(pizza.id===updatedPizza.id){
        return updatedPizza
      }else{
        return pizza
      }
    })
  setPizzas(updatedPizzaList)
}

  return (
    <>
      <Header />
      <PizzaForm selectPizza={selectPizza} handleChange={handlePizzaChange}/>
      <PizzaList pizzas={pizzaList} handleEdit={editPizza}/>
    </>
  );
}

export default App;
