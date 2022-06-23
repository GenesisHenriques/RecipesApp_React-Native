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

export async function fetchRecipeById(id, type) {
  const urlF = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const urlD = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(`${type === 'food' ? urlF : urlD}${id}`);
  const data = await response.json();
  return data;
}

export async function fetchOneRecipeRandom(type) { 
  const urlF = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const urlD = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(type === 'food' ? urlF : urlD);
  const data = await response.json();
  return data;
}

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

//'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
//'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
export async function fetchRecipesByArea(area, type) {
  const searchArea = area === '' ? 'Portuguese' : area;
  const urlType = type === 'food' ? 'www.themealdb.com' : 'www.thecocktaildb.com';
  const response = await fetch(`https://${urlType}/api/json/v1/1/filter.php?c=${searchArea}`);
  const data = await response.json();
  return data;
};

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
