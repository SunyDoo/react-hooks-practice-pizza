import React, { useEffect, useState } from "react";

function PizzaForm({ selectPizza, handleChange }) {
  
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("")
  const [vegetarian, setVegetarian] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    setId(selectPizza.id)
    setTopping(selectPizza.topping)
    setSize(selectPizza.size)
    setVegetarian(selectPizza.vegetarian)

  }, [ selectPizza ] )

    function handleSubmit(e){
      e.preventDefault()
      const updatedPizza = {
        id: id, 
        topping: topping, 
        size: size,
        vegetarian: vegetarian
      }
      handleChange(updatedPizza)
    }




  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={(e) => setTopping(e.target.value)}
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value = {size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={()=>setVegetarian(true)}  
              checked={vegetarian}            
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={()=>setVegetarian(false)}
              checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
