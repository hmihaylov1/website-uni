// Select the workshop section and get all workshop buttons
const workshopSection = document.querySelector('.workshops');
const workshopButtons = workshopSection.querySelectorAll('.workshop-button');

// Loop through each workshop button and add a click event listener
workshopButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the workshop ID from the data-workshop attribute of the clicked button
    const workshopId = event.target.dataset.workshop;

    // Select the lesson list for the clicked workshop
    const lessonList = document.querySelector(`#workshop-${workshopId} .lesson-list`);

    // Hide all other lesson lists
    const allLessonLists = document.querySelectorAll('.lesson-list');
    allLessonLists.forEach((list) => {
      if (list !== lessonList) {
        list.style.display = 'none';
      }
    });

    // Toggle the display of the clicked lesson list
    lessonList.style.display = (lessonList.style.display === 'none') ? 'block' : 'none';
  });
});

// Loop through each lesson button and add a click event listener
const lessonButtons = document.querySelectorAll('.lesson-button');
lessonButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the lesson ID from the data-lesson attribute of the clicked button
    const lessonId = event.target.dataset.lesson;

    // Select the worksheet list for the clicked lesson
    const worksheetList = document.querySelector(`#lesson-${lessonId} .worksheet-list`);

    // Hide all other worksheet lists
    const allWorksheetLists = document.querySelectorAll('.worksheet-list');
    allWorksheetLists.forEach((list) => {
      if (list !== worksheetList) {
        list.style.display = 'none';
      }
    });

    // Toggle the display of the clicked worksheet list
    worksheetList.style.display = (worksheetList.style.display === 'none') ? 'block' : 'none';
  });
});
