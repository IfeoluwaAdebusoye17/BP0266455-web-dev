import {program, selectProgram} from "../data/program.js";
import {products} from "../data/products.js";


let productsHTML = '';


export function displayProducts(filteredProducts) {
  productsHTML = '';
  //products.forEach((product) => {
  filteredProducts.forEach(product => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>
          ${product.name}
        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-spacer"></div>

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

// Initial display of all products(temp)
//displayProducts(products);


// Drop down functionality
//To check if element exists before adding event listener

export function filterRelevant() {
  const myForm = document.getElementById('myForm');
  if(myForm){
    myForm.addEventListener('submit', (event) => { 
      event.preventDefault(); // Prevent the form from submitting
      if (!validateForm()) {
        return;
      }

      const firstName = document.getElementById('js-first-name').value;
      localStorage.setItem('firstName', firstName);

      const middleName = document.getElementById('js-middle-name').value;
      localStorage.setItem('middleName', middleName);

      const lastName = document.getElementById('js-last-name').value;
      localStorage.setItem('lastName', lastName);


      const startDateInput = document.getElementById('js-date').value;
      const startDate = new Date(startDateInput);
      const formattedStartDate = formatDateToWords(startDate);
      localStorage.setItem('startDate', formattedStartDate);

      



      const selectedOption = document.getElementById('myDropdown').value.toLowerCase();

      const filteredProducts = products.filter(product => 
        product.name.toLocaleLowerCase().includes(selectedOption)
      );
      
      console.log(filteredProducts);
      displayProducts(filteredProducts);
    }); 
  }
}

filterRelevant();

export function isValidName(name) {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
}

function validateForm() {
  const firstNameInput = document.getElementById("js-first-name").value;
  const middleNameInput = document.getElementById("js-middle-name").value;
  const lastNameInput = document.getElementById("js-last-name").value;
  const dateInput = document.getElementById("js-date").value;

  if (!isValidName(firstNameInput)) {
    alert("Invalid name. Please use only alphabetic characters and spaces.");
    document.getElementById("js-first-name").value = '';
    return false;
  } else if (!isValidName(middleNameInput) && (middleNameInput !== '')) {
    alert("Invalid name. Please use only alphabetic characters and spaces.");
    document.getElementById("js-middle-name").value = '';
    return false;
  } else if (!isValidName(lastNameInput)) {
    alert("Invalid name. Please use only alphabetic characters and spaces.");
    document.getElementById("js-last-name").value = '';
    return false;
  }

  if (!isValidDate(dateInput)) {
    alert("Invalid date. Please select a future date or today's date.");
    document.getElementById("js-date").value = '';
    return false;
  }

  return true;
}


export function isValidDate(date) {
  const today = new Date();
  const inputDate = new Date(date);
  today.setHours(0, 0, 0, 0); // Set the time to midnight to compare only the date part
  return inputDate >= today;
}


// Function to format a date in "numbers and words" format
function formatDateToWords(date) {
  const day = date.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Get the ordinal suffix for the day
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  }
  else if (day === 2 || day === 22) {
    suffix = "nd";
  }
  else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return `${day}${suffix} of ${month} ${year}`;
}