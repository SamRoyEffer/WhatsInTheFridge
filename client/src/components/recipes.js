import React, {useState} from 'react'

const mockIngredientList = [
  {name: "banana"},
  {name: "chicken"},
  {name: "salt"},
  {name: "peppers"},
  {name: "onion"}
]


const Recipes = (props) => {
  const [recipeList, setRecipeList] = useState([])

  const options = async (value) => {
    let resolved = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=9768625974324441a01777879d94c9b2&ignorePantry=true&ingredients=${value}&ranking=2&number=5`)
    .then((res) => {console.log("%%%", res.json); return res.json()})
    console.log("---", resolved)
    return resolved;
  };

  let ingredients = mockIngredientList.map((ingredient) => ingredient.name)

  const callRecipies = async () => {
    await setRecipeList(options(ingredients))
    console.log(recipeList)
  }
  
  return (
    <div>
      <button onClick={callRecipies}>generate</button>
    </div>
  )
}

export default Recipes