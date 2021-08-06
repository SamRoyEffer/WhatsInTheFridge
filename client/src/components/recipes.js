import React, {useState} from 'react'

const mockIngredientList = [
  {name: "banana"},
  {name: "chicken"},
  {name: "salt"},
  {name: "peppers"},
  {name: "onion"}
]


const Recipes = (recipeData) => {
  const {
    image,
    title,
    extendedIngredients,
    analyzedInstructions,
    sourceUrl,
    creditsText,
  } = recipeData;

  const [recipeList, setRecipeList] = useState([])

  // parse the received ingredients
  let ingredients = mockIngredientList.map((ingredient) => ingredient.name)

  const options = async (value) => {
    let resolved = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?includeNutrition=false&apiKey=8a5caab478484b4798b15918420d1e5e&ignorePantry=true&ingredients=${value}&ranking=2&number=5`)
    return resolved.json();
  };


  const callRecipies = () => {
    const foobar = options(ingredients)
    foobar.then((res) => {
      setRecipeList(res)
    })

    console.log("###", recipeList);
  }

  // console.log(recipeList)
  
  return (
    <div>
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <a href={sourceUrl}>{creditsText}</a>

      <button onClick={callRecipies}>generate</button>
    </div>
  )
}

export default Recipes