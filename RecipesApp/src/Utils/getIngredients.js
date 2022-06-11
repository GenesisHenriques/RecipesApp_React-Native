function getIngredients(data) { // strIngredient
  const newArray = []
  Object.keys(data).forEach(function(item){
    if (item.includes("strIngredient") && data[item] !== "" && data[item] !== null) {
      newArray.push(data[item])
    }
   });
   return newArray;
};

export {
  getIngredients,
};

