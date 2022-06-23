export async function fetchFoods() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.meals;  // .slice(1, 2) para controlar a quantidade de receitas
}

export async function fetchDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.drinks;  // .slice(1, 2) para controlar a quantidade de receitas
}

export async function fetchFoodArea() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const data = await response.json();
  return data;
}

export async function fetchRecipeById(id) { // www.thecocktaildb.com/api/json/v1/1/lookup.php?i=52885
  const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data;
}

export async function fetchOneRecipeRandom(type) {
  const urlF = 'www.thecocktaildb.com/api/json/v1/1/random.php';
  const urlD = 'www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(type === 'food' ? urlF : urlD);
  const data = await response.json();
  return data;
}

export async function fetchByIngredients(type, name) {
  const urlType = type === 'food' ? 'www.themealdb' : 'www.thecocktaildb';
  const urlSearchF = name === '' ? 'chicken_breast' : name;
  const urlSearchD = name === '' ? 'Gin' : name;
  const response = await fetch(`https://${urlType}.com/api/json/v1/1/filter.php?i=${
    type === 'food' ? urlSearchF : urlSearchD
  }`);
  const data = await response.json();
  return data;
}

// comida ingrediente   www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
// bebida ingredientes  www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin


// comida nome area    www.themealdb.com/api/json/v1/1/list.php?a=list
// comida pega por area    www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
