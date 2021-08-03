// import react, {useState} from "react"
// // import SpoonacularApi from 'spoonacular_api';
// import Select from "react-dropdown-select";
// // import axios from "axios"

// export default function AutoComplete(props) {
//   const { state, setState } = useState

//   // let defaultClient = SpoonacularApi.ApiClient.instance;
//   // // Configure API key authorization: apiKeyScheme
//   // let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
//   // apiKeyScheme.apiKey = '9768625974324441a01777879d94c9b2';
//   // // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//   // //apiKeyScheme.apiKeyPrefix = 'Token
//   // let apiInstance = new SpoonacularApi.DefaultApi();
//   // let query = state; // String | The partial or full ingredient name.
//   // let opts = {
//   //   '_number': 5, // Number | The number of results to return (between 1 and 100).
//   //   'metaInformation': false, // Boolean | Whether to return more meta information about the ingredients.
//   //   // 'intolerances': 'egg' /* user profile intol's */ // String | A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
//   // };
//   // const ingredientSearchAuto = apiInstance.autocompleteIngredientSearch(query, opts, (error, data, response) => {
//   //   if (error) {
//   //     console.error(error);
//   //   } else {
//   //     console.log('API called successfully. Returned data: ' + data);
//   //     return data
//   //   }
//   // });

//   const options = [
//     {
//       "id": 1,
//       "name": "Loyce Veum",
//       "username": "Elisha74",
//       "email": "Sibyl23@gmail.com",
//       "address": {
//         "street": "Marisa Stravenue",
//         "suite": 14843,
//         "city": "East Chaz",
//         "zipcode": "25519",
//         "geo": {
//           "lat": "-63.0619",
//           "lng": "129.1105"
//         }
//       },
//       "phone": "(434) 710-7087 x05623",
//       "website": "dock.info",
//       "company": {
//         "name": "Roberts - Osinski",
//         "catchPhrase": "Function-based background pricing structure",
//         "bs": "integrated orchestrate e-services"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Delfina Brown",
//       "username": "Gaylord.Schumm88",
//       "email": "Sherman76@gmail.com",
//       "address": {
//         "street": "Stamm Cape",
//         "suite": 97728,
//         "city": "Camrynton",
//         "zipcode": "11743-0194",
//         "geo": {
//           "lat": "27.6428",
//           "lng": "-71.0685"
//         }
//       },
//       "phone": "(139) 659-6166 x8415",
//       "website": "arvid.net",
//       "company": {
//         "name": "Mante Inc",
//         "catchPhrase": "Synergistic needs-based superstructure",
//         "bs": "front-end reinvent e-services"
//       }
//     }]

//   // let apiTest = fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=9768625974324441a01777879d94c9b2&query=appl&number=5`)
//   // .then((res) => res.json())
//   // .then((data) => {setState(data)})
//   // .catch(() => console.log("error"))

//   return (
//     <form>
//   <Select options={options} onChange={(values) => this.onChange(values)} searchBy={'name'}
//     labelField={"name"}
//     valueField={"name"}
//   />
//   <button>Add</button>
//     </form>
//   )
// }
