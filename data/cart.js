const cart = [];

function addToCart (){

  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId){
      matchingItem = item;
    }
  });
  if (matchingItem){
    matchingItem += quantity;
  }
}