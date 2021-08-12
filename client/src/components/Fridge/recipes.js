import React, { useState, Fragment } from "react";
import "./recipes.scss";
import { Button } from "react-bootstrap";

const Recipes = (props) => {
  const { state } = props;
  const [recipeList, setRecipeList] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState(null);
  console.log("&&&", props);
  const selectRecipe = (value) => {
    setRecipeSelected(value);
    linkToPage(value);
  };

  const linkToPage = async (id) => {
    let resolved = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=68003bba9d494646b4800cc73362cef6&includeNutrition=false`
    ).then((res) => res.json());
    window.open(resolved.sourceUrl);
    return resolved;
  };

  // parse the received ingredients
  let ingredients = state.ingredients.map((ingredient) => ingredient.name);

  const options = async (value) => {
    let resolved = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?includeNutrition=false&apiKey=68003bba9d494646b4800cc73362cef6&ignorePantry=true&ingredients=${value}&ranking=2&limitLicense=true&number=6`
    );
    return resolved.json();
  };

  const callRecipies = () => {
    const foobar = options(ingredients);
    console.log("hello", state);
    foobar
      .then((res) => {
        setRecipeList(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Fragment>
      <div className="buttonDiv">
        <Button variant="info" onClick={callRecipies}>
          Generate Recipes
        </Button>{" "}
      </div>
      <div className="recipeContainer">
        {recipeList.map((recipe, i) => {
          return (
            <div
              key={i}
              className="recipe"
              onClick={() => selectRecipe(recipe.id)}
            >
              <div className="imageContainer">
                <img
                  className="recipeImage margin-hate"
                  src={recipe.image}
                  alt={recipe.title}
                  key={i}
                />
              </div>
              <div className="textContainer">
                <h2 className="recipeTitle">{recipe.title}</h2>
                {recipe.missedIngredientCount ? (
                  <p className="missingAmmount">
                    Missing ingredients: <b>{recipe.missedIngredientCount}</b>
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Recipes;
