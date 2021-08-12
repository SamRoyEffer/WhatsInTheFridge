import React from "react";
import "./ingreList.scss";

export default function IngredientList(props) {
  return (
    <div className="ingredientList">
      <div className="anger">
        {props.ingredients.length
          ? props.ingredients.map((ingredient, i) => {
              return (
                <div
                  key={i}
                  className="ingreList"
                  onClick={(e) => {
                    props.deleteIngredient(ingredient);
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
