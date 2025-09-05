function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#user-ingredients");
  let apiKey = "03oada558014fa953tfcffd791fbc3a6";
  let context =
    "You are a knowledgable AI assistant that knows all kinds of delicious recipes. Your mission is to provide the recipe in basic HTML with easy to read step by step instructions.";
  let prompt = `Generate a recipe that includes ${ingredientsInput.value} as an ingredient`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
