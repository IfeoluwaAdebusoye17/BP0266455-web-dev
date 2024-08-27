import {selectProgram} from "../data/selected-path-status.js";
import {paths} from "../data/paths.js";


let pathsHTML = '';


export function displayPaths(filteredPaths) {
  //Need to clear so previous paths dont continue to show
  pathsHTML = '';
  filteredPaths.forEach(item => {
    pathsHTML += `
      <div class="path-container">
        <div class="path-image-container">
          <img class="path-image"
            src="${item.image}">
        </div>
        <div class="path-name">
          ${item.name}
        </div>
        <div class="path-rating-container">
          <img class="path-rating-stars"
            src="images/ratings/rating-${item.rating.stars * 10}.png">
          <div class="path-rating-count link-primary">
            ${item.rating.count}
          </div>
        </div>

        <div class="path-spacer"></div>

        <a href="courses.html">
          <button class="go-to-path-button button-primary js-go-to-path"
            data-path-id="${item.id}">
            View Path
          </button>
        </a>
      </div>
    `;
  });

  //This allows to locate what they have selected it is a custom html attribute that has been brought into the js to identify the item it the id
  document.querySelector('.js-paths-grid').innerHTML = pathsHTML;

  document.querySelectorAll('.js-go-to-path')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const pathId = button.dataset.pathId;

      selectProgram(pathId);
        
    });
  });
}

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

      const newFilteredPaths = paths.filter(item => 
        item.name.toLocaleLowerCase().includes(selectedOption)
      );
      
      //console.log(newFilteredPaths);
      displayPaths(newFilteredPaths);
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