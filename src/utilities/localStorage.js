function addItemsToLocalStorage(id) {
  let cartValue = getItemsToLC();

  let quantity = cartValue[id];
  if (quantity) {
    quantity = quantity + 1;
    cartValue[id] = quantity;
  } else {
    cartValue[id] = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cartValue));
}

function getItemsToLC() {
  let cartValue = {};
  let localcart = localStorage.getItem("cart");
  if (localcart) {
    cartValue = JSON.parse(localcart);
  }
  return cartValue;
}

export { addItemsToLocalStorage, getItemsToLC };
