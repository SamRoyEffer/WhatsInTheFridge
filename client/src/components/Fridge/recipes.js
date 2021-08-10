import React, { useState, Fragment } from "react";
import "./recipes.scss";
import { Button } from "react-bootstrap";
import useApplicationData from "../../hooks/useApplicationData";

const Recipes = () => {
  const { state } = useApplicationData();
  const [recipeList, setRecipeList] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState(null);

  const selectRecipe = (value) => {
    setRecipeSelected(value);
    linkToPage(value);
  };

  const linkToPage = async (id) => {
    let resolved = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=8a5caab478484b4798b15918420d1e5e&includeNutrition=false`
    ).then((res) => res.json());
    window.open(resolved.sourceUrl);
    return resolved;
  };

  // parse the received ingredients
  let ingredients = state.ingredients.map((ingredient) => ingredient.name);

  const options = async (value) => {
    let resolved = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?includeNutrition=false&apiKey=8a5caab478484b4798b15918420d1e5e&ignorePantry=true&ingredients=${value}&ranking=2&limitLicense=true&number=6`
    );
    return resolved.json();
  };

  const callRecipies = () => {
    const foobar = options(ingredients);
    foobar.then((res) => {
      setRecipeList(res);
    });
  };

  // console.log(recipeList)

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
