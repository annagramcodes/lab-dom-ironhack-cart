// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotalPrice = price.innerHTML * quantity.value;

  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;
console.log(price)
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
 
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  // const product2 = document.getElementsByClassName('product')[1];
  products.forEach((product) => { updateSubtotal(product) })
  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);
  // }

}
  

  
  // ITERATION 3
  //... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
