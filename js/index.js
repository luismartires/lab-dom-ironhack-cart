// ITERATION 1

function updateSubtotal(productRow) {
  console.log("Calculating subtotal, yey!");
  console.log(productRow);

  const price = productRow.querySelector(".price span");
  const quantity = productRow.querySelector(".quantity input");

  const priceQty = price.innerHTML * quantity.value;

  const subtotal = productRow.querySelector(".subtotal span");
  subtotal.innerHTML = priceQty;

  return priceQty;
}

// ITERATION 2

function calculateAll() {
  const multProducts = document.getElementsByClassName("product");
  const multProductsArray = [...multProducts];

  let subtotalPrice = 0;

  multProductsArray.forEach((product) => {
    subtotalPrice += updateSubtotal(product);
  });

  // ITERATION 3

  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = subtotalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const childEliminate = target.parentNode.parentNode;
  const allEliminate = childEliminate.parentNode;

  allEliminate.removeChild(childEliminate);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove");
  let removeButtonsArray = [...removeButtons];
  removeButtonsArray.forEach((remove) => {
    remove.addEventListener("click", removeProduct);
  });
});
