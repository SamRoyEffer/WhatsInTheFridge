import React, { useState } from "react";
import "./recipes.scss";

const mockIngredientList = [
  { name: "celery" },
  { name: "chicken" },
  { name: "beef" },
  { name: "peppers" },
  { name: "onion" },
  { name: "cheese" },
  { name: "bread" }
];

const Recipes = () => {
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
    window.location.assign(resolved.sourceUrl);
    return resolved;
  };

  // parse the received ingredients
  let ingredients = mockIngredientList.map((ingredient) => ingredient.name);

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
    <section>
      <div>
        <button onClick={callRecipies}>generate</button>
      </div>
      <div className="recipeContainer">
      {recipeList.map((recipe, i) => {
        return (
          <div className="recipe" onClick={() => selectRecipe(recipe.id)}>
            <div className="imageContainer" >
              <img
                className="recipeImage margin-hate"
                src={recipe.image}
                alt={recipe.title}
                key={i}
              />
            </div>
            <div className="textContainer" >
              <h2 className="recipeTitle" >{recipe.title}</h2>
              {recipe.missedIngredientCount ? <p className="missingAmmount" >Missing ingredients: <b>{recipe.missedIngredientCount}</b></p> : null }
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default Recipes;
