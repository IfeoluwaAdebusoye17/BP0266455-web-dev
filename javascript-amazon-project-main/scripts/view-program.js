import { program, removeFromCart } from "../data/program.js";
import { products } from "../data/products.js"; 
import { formatCurrency } from "./utils/money.js";


document.addEventListener('DOMContentLoaded', () => {
  const firstName = localStorage.getItem('firstName');
  const middleName = localStorage.getItem('middleName');
  const lastName = localStorage.getItem('lastName');
  const startDate = localStorage.getItem('startDate');

  if (firstName) {
    document.getElementById('user-first-name').textContent = firstName;
  }

  if (middleName) {
    document.getElementById('user-middle-name').textContent = middleName;
  }

  if (lastName) {
    document.getElementById('user-last-name').textContent = lastName;
  }
  
  if (lastName) {
    document.getElementById('start-date').textContent = startDate;
  }

});


let cartSummaryHTML = '';

program.forEach((programItem) => {
  const programId = programItem.courseId;

  let matchingProgram;

  products.forEach((program) => {
    if(program.id === programId) {
      matchingProgram = program
    }
  });

  
  cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingProgram.id}">
      <div class="delivery-date">
        This is the ‘Welcome to ${matchingProgram.name} training path’ complete the courses to understand your role
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProgram.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProgram.name}
          </div>
          <div class="product-price">
            $${formatCurrency (matchingProgram.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${programItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProgram.id}">
              Unenroll
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Courses in program:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProgram.id}">
            <div>
              <div class="delivery-option-date">
                Get started
              </div>
              <div class="delivery-option-price">
                In this course we will discuss how engineering works in Lloyds
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProgram.id}">
            <div>
              <div class="delivery-option-date">
                Get setup
              </div>
              <div class="delivery-option-price">
                In this course we will discuss how we can get setup in this environment called engineerig alright you will be able to see how we can accurately show our passions for
                this topic.
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProgram.id}">
            <div>
              <div class="delivery-option-date">
                Attempt lab
              </div>
              <div class="delivery-option-price">
                This is the final course where we will eat the malt together and praise his name together you are worthy of praise JESUS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});


document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        )

        container.remove();
      })
    });




