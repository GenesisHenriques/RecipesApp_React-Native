export async function fetchFoods() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  const data = await response.json();
  return data.meals;  // .slice(1, 2) para controlar a quantidade de receitas
}
