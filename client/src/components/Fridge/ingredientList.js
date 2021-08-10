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
                  <h6 className="ingreName">{ingredient.name}</h6>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
