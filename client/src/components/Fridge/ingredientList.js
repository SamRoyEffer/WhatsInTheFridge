import React, { createElement } from "react";
import useApplicationData from "../../hooks/useApplicationData";

export default function IngredientList(props) {
  const { state } = useApplicationData();

  return (
    <div className="ingredientList">
      {console.log("STATE", state)}
      <h2>testing ingredients list</h2>
      <p>
        {state.ingredients
          ? state.ingredients.map((ingredient, i) => {
              return (
                <div key={i}>
                  <p>{ingredient.name}</p>
                </div>
              );
            })
          : null}
      </p>
    </div>
  );
}
