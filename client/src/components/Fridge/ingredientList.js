import React, { createElement } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import "./ingreList.scss";

export default function IngredientList(props) {
  const { state } = useApplicationData();

  // creating this in the useApplicationData hook
  const removeIngredient = () => {};

  return (
    <div className="ingredientList">
      {console.log("STATE", state)}

      <p>
        {state.ingredients
          ? state.ingredients.map((ingredient, i) => {
              if (true) {
                return (
                  <div key={i} className="ingreList">
                    <h6 className="ingreName">{ingredient.name}</h6>
                  </div>
                );
              }
            })
          : null}
      </p>
    </div>
  );
}
