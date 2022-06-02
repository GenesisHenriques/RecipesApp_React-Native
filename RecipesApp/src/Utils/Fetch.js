const fetchFilteredItems = async (userType, userFilter, userInput) => { // userType, userFilter, userInput
  const type = userType === 'comidas' ? 'themealdb' : 'thecocktaildb';
  const errorMessage = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  let filter = '';
  switch (userFilter) {
  case 'ingredient':
    filter = 'filter.php?i=';
    break;
  case 'name':
    filter = 'search.php?s=';
    break;
  case 'first-letter':
    filter = 'search.php?f=';
    break;
  case 'filter':
    filter = 'filter.php?c=';
    break;
  default:
    filter = 'filter.php?s=';
    break;
  } //  https://www.themealdb.com/api/json/v1/1/search.php?f=3  'comidas', 'first-letter', 3
  if (userFilter === 'first-letter' && userInput.length > 1) {
    global.alert(`https://www.${type}.com/api/json/v1/1/${filter}${userInput}`);
  } else {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') // 'https://www.themealdb.com/api/json/v1/1/search.php?s='
      .then((result) => result.json())
      .then((obj) => {
        if (obj[Object.keys(obj)]) {
          return obj;
        } else {
          global.alert(errorMessage);
        }
      });
  }
};

export {
  fetchFilteredItems,
};

