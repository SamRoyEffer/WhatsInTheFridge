import React, { createElement } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import "./ingreList.scss";

export default function IngredientList(props) {
  const { state, deleteIngredient, setState } = useApplicationData();

  return (
    <div className="ingredientList">
      <div>
        {props.ingredients.length
          ? props.ingredients.map((ingredient, i) => {
              return (
                <div
                  key={i}
                  className="ingreList"
                  onClick={(e) => {
                    deleteIngredient(ingredient);
                    props.removeIngredient(ingredient);
                  }}
                >
                  <p>{ingredient.name}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
