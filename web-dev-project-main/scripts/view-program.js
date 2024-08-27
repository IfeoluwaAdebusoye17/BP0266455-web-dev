import { currentSelectedPath, removeFromCart } from "../data/selected-path-status.js";
import { paths } from "../data/paths.js"; 



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
  
  if (startDate) {
    document.getElementById('start-date').innerHTML = startDate;
  }

});


let cartSummaryHTML = '';

currentSelectedPath.forEach((item) => {
  const pathId = item.pathId;

  let matchingPath;

  paths.forEach((item) => {
    if(item.id === pathId) {
      matchingPath = item;
    }
  });

  paths.forEach((item) => {
    if(item.id === currentSelectedPath.id) {
      matchingPath === item;
    }
  });

  
  cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingPath.id}">
      <div class="delivery-date">
        This is the ‘Welcome to ${matchingPath.name} training path’ complete the courses to understand your role
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingPath.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingPath.name}
          </div>
          <div class="product-quantity">
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingPath.id}">
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
              name="delivery-option-${matchingPath.id}">
            <div>
              <div class="delivery-option-date">
                Course One: Get started
              </div>
              <div class="delivery-option-price">
                ${matchingPath.courseOne}
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingPath.id}">
            <div>
              <div class="delivery-option-date">
                Course Two: Get setup
              </div>
              <div class="delivery-option-price">
                In this course we will discuss how we can get setup in this environment called engineering alright you will be able to see how we can accurately show our passions for
                this topic.
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingPath.id}">
            <div>
              <div class="delivery-option-date">
                Course Three: Attempt lab
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


document.querySelector('.js-learning-path-summary')
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




