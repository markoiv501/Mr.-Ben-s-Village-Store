"use strict";

// NIZ SA SVIM ARTIKLIMA:
const products = [
  { name: "Apple Pie", price: 5.99, category: "Baked Goods", stock: 10 },
  { name: "Fresh Milk", price: 1.5, category: "Dairy", stock: 20 },
  { name: "Organic Eggs", price: 3.99, category: "Dairy", stock: 15 },
  // { name: "Sourdough Bread", price: 4.5, category: "Baked Goods", stock: 12 },
  // { name: "Green Tea", price: 2.99, category: "Beverages", stock: 25 },
  // { name: "Almond Butter", price: 7.5, category: "Spreads", stock: 8 },
  // { name: "Olive Oil", price: 12.0, category: "Cooking Essentials", stock: 5 },
  // { name: "Chocolate Bar", price: 1.99, category: "Snacks", stock: 30 },
  // { name: "Granola", price: 4.75, category: "Snacks", stock: 18 },
  // { name: "Orange Juice", price: 3.5, category: "Beverages", stock: 14 },
];

// TASK 1
function listAllProd(products) {
  const productsList = document.getElementById("products-list");

  productsList.innerHTML = "      <h2>Mr.Ben's All Products:</h2>";

  products.forEach((product) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<strong>Product:</strong> ${product.name}<br> <strong>Price:</strong> ${product.price}<br>  <strong>Category:</strong>${product.category} <br> <strong>Stock:</strong> ${product.stock}<br><br>`;
    productsList.appendChild(newElement);
  });
}

listAllProd(products);

// TASK 2
function findProduct(productName) {
  let found = false;
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";

  products.forEach((product) => {
    if (product.name.toLocaleLowerCase() === productName.toLocaleLowerCase()) {
      const newElement = document.createElement("div");
      newElement.innerHTML = `<br><strong>Product:</strong> ${product.name}<br> <strong>Price:</strong> ${product.price}<br>  <strong>Category:</strong>${product.category} <br> <strong>Stock:</strong> ${product.stock}`;
      searchResults.appendChild(newElement);
      found = true;
    }
  });
  if (!found) {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<br>Product "${productName}"
  not found.`;
    searchResults.appendChild(newElement);
  }
}

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const productName = searchInput.value;
  findProduct(productName);
});

// TASK 3
const restockInputName = document.getElementById("restock-input-name");
const restockInputStock = document.getElementById("restock-input-stock");
const restockButton = document.getElementById("restock-button");
const restockResults = document.getElementById("restock-results");

function restockProduct(productName, productStock) {
  let found = false;
  products.forEach((product) => {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      product.stock += parseInt(productStock);
      found = true;
      const newElement = document.createElement("div");
      newElement.innerHTML = `<br>You have added ${productStock} stocks to "${product.name}".`;
      restockResults.appendChild(newElement);
    }
  });

  if (!found) {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<br>There's no "${productName}" product.`;
    restockResults.appendChild(newElement);
  }
}

restockButton.addEventListener("click", () => {
  restockResults.innerHTML = ``;
  const restockInputNameValue = restockInputName.value;
  const restockInputStockValue = restockInputStock.value;

  restockProduct(restockInputNameValue, restockInputStockValue);
  listAllProd(products);
});

// TASK 4
const inputAddName = document.getElementById("input-add--name");
const inputAddPrice = document.getElementById("input-add--price");
const inputAddCategory = document.getElementById("input-add--category");
const inputAddStock = document.getElementById("input-add--stock");
const addButton = document.getElementById("add--button");
const addResult = document.getElementById("add--result");

function addProducts(name, price, category, stock) {
  const newProduct = {
    name: name,
    price: parseFloat(price),
    category: category,
    stock: parseInt(stock),
  };

  products.push(newProduct);
  const lastInArray = products[products.length - 1];
  const newElement = document.createElement("div");
  newElement.innerHTML = `<br>New Product Added!</strong><br><strong>Product:</strong> ${lastInArray.name}<br> <strong>Price:</strong> ${lastInArray.price}<br>  <strong>Category:</strong>${lastInArray.category} <br> <strong>Stock:</strong> ${lastInArray.stock}`;
  addResult.appendChild(newElement);
}

addButton.addEventListener("click", () => {
  addResult.innerHTML = ``;
  const inputAddNameValue = inputAddName.value;
  const inputAddPriceValue = inputAddPrice.value;
  const inputAddCategoryValue = inputAddCategory.value;
  const inputAddStockValue = inputAddStock.value;
  addProducts(
    inputAddNameValue,
    inputAddPriceValue,
    inputAddCategoryValue,
    inputAddStockValue
  );
  listAllProd(products);
});
