//We are using imports so that we can use functions from those files

import { currentSelectedPath, removeStoredPath } from "../data/selected-path-status.js";
import { paths } from "../data/paths.js"; 


//Loaded information that was inputted by the user at previous stage getting the items that were stored in local storage
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

//Using for each loop to check if the selected path id matches one of the id's of all of the paths stored in the array of objects generates HTML and dynamically fills data
let learningPathSummaryHTML = '';

currentSelectedPath.forEach((item) => {
  const pathId = item.pathId;

  let matchingPath;

  paths.forEach((item) => {
    if(item.id === pathId) {
      matchingPath = item;
    }
  });

  
  learningPathSummaryHTML += `
    <div class="selected-path-container 
    js-selected-path-container-${matchingPath.id}">
      <div class="path-title">
        This is the ‘Welcome to ${matchingPath.name} training path’ complete the courses to understand your role
      </div>

      <div class="selected-path-details-grid">
        <img class="path-image"
          src="${matchingPath.image}">

        <div>
          <div class="path-name">
            ${matchingPath.name}
          </div>
          <div>
            <span class="link-primary js-delete-link" data-path-id="${matchingPath.id}">
              Unenroll
            </span>
          </div>
        </div>

        <div class="course-options">
          <div class="course-options-title">
            Courses in program:
          </div>
          <div class="course-option">


          <!--
            This is to allow the different courses to be selected with the radio element
            with their unique id's in their name so it remains selected.
          -->

            <input type="radio" checked
              class="course-option-input"
              name="course-option-${matchingPath.id}">
            <div>
              <div class="course-title">
                Course One: Get started
              </div>
              <div class="course-descriptions">
                ${matchingPath.courseOne}
              </div>
            </div>
          </div>
          <div class="course-option">
            <input type="radio"
              class="course-option-input"
              name="course-option-${matchingPath.id}">
            <div>
              <div class="course-title">
                Course Two: Get setup
              </div>
              <div class="course-descriptions">
                In this course we will discuss how we can get setup in this environment you will be able to see how we can accurately show our passions for
                this topic.
              </div>
            </div>
          </div>
          <div class="course-option">
            <input type="radio"
              class="course-option-input"
              name="course-option-${matchingPath.id}">
            <div>
              <div class="course-title">
                Course Three: Attempt lab
              </div>
              <div class="course-descriptions">
                This is the final course where we will attempt the lab and round up.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

//Using DOM to display HTML

document.querySelector('.js-learning-path-summary')
  .innerHTML = learningPathSummaryHTML;


/*Using for each to add event listener to check if unenroll link clicked. That will remove the custom html element that is being stored for the selected path and it calls function to clear local
storage so if page is reloaded it is still removed.
*/
document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const pathId = link.dataset.pathId;
      removeStoredPath();

      const container = document.querySelector(
        `.js-selected-path-container-${pathId}`
      )

      container.remove();
    })
  });




