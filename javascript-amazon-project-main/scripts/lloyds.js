import {program, selectProgram} from "../data/program.js";
import {products} from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productsHTML = '';


function displayProducts(filteredProducts) {
  productsHTML = '';
  //products.forEach((product) => {
  filteredProducts.forEach(product => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${formatCurrency(product.priceCents)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <a href="program.html">
          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-course-id="${product.id}">
            View Course
          </button>
        </a>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;



  document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const courseId = button.dataset.courseId;

      selectProgram(courseId);
        
    });
  });
}



// Function to display products
//function displayProducts(filteredProducts) {
  //const productList = document.getElementById('productList');
  //productList.innerHTML = '';
//  filteredProducts.forEach(product => {
    //const productItem = document.createElement('div');
    //productItem.textContent = `${product.name} `;
    //- ${product.category}
    //productList.appendChild(productItem);
//  });
//}

// Initial display of all products
displayProducts(products);

// Search functionality
document.getElementById('searchBar').addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) 
    //|| product.category.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
});


// Drop down functionality
document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const selectedOption = document.getElementById('myDropdown').value.toLowerCase();

  const filteredProducts = products.filter(product => 
    product.name.toLocaleLowerCase().includes(selectedOption)
  );
  
  displayProducts(filteredProducts);
});