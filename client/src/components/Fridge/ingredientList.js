import React, { createElement } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import "./ingreList.scss";

export default function IngredientList(props) {
  const { state } = useApplicationData();

  return (
    <div className="ingredientList">
      {console.log("STATE", state)}

      <div>
        {props.ingredients.length
          ? props.ingredients.map((ingredient, i) => {
              return (
                <div key={i} className="ingreList">
                  <p>{ingredient.name}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
