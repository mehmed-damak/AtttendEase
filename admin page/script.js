// This code block adds an event listener to the form with the id 'addStudentForm'
document.getElementById('addStudentForm').addEventListener('submit', function (event) {
    // Prevents the default form submission behavior
    event.preventDefault();

    // Retrieves values from input fields with the specified ids
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentCode = document.getElementById('studentCode').value;

    // Creates a new list item (li) element
    const newStudent = document.createElement('li');

    // Sets the text content of the new list item with the student information
    newStudent.textContent = `Student ${studentName}: ${studentCode}`;

    // Appends the new list item to the list with the id 'removeStudentsList'
    document.getElementById('removeStudentsList').appendChild(newStudent);

    // Resets the form with the id 'addStudentForm'
    document.getElementById('addStudentForm').reset();
});

// This code block adds an event listener to the button with the id 'removeStudentsBtn'
document.getElementById('removeStudentsBtn').addEventListener('click', function () {
    // Retrieves the element with the id 'removeStudentsList'
    const removeStudentsList = document.getElementById('removeStudentsList');

    // Toggles the display property of the 'removeStudentsList' between 'none' and 'block'
    if (removeStudentsList.style.display === 'none') {
        removeStudentsList.style.display = 'block';
    } else {
        removeStudentsList.style.display = 'none';
    }
});

// This code block adds an event listener to the form with the id 'addCourseForm'
document.getElementById('addCourseForm').addEventListener('submit', function (event) {
    // Prevents the default form submission behavior
    event.preventDefault();

    // Retrieves values from input fields with the specified ids
    const courseName = document.getElementById('courseName').value;
    const courseAvailability = document.getElementById('courseAvailability').value;

    // Creates a new list item (li) element
    const newCourse = document.createElement('li');

    // Sets the text content of the new list item with the course name
    newCourse.textContent = courseName;

    // If the courseAvailability is 'unavailable', sets a line-through style
    if (courseAvailability === 'unavailable') {
        newCourse.style.textDecoration = 'line-through';
    }

    // Appends the new list item to the list with the id 'removeCoursesList'
    document.getElementById('removeCoursesList').appendChild(newCourse);

    // Resets the form with the id 'addCourseForm'
    document.getElementById('addCourseForm').reset();
});

// This code block adds an event listener to the button with the id 'removeCoursesBtn'
document.getElementById('removeCoursesBtn').addEventListener('click', function () {
    // Retrieves the element with the id 'removeCoursesList'
    const removeCoursesList = document.getElementById('removeCoursesList');

    // Toggles the display property of the 'removeCoursesList' between 'none' and 'block'
    if (removeCoursesList.style.display === 'none') {
        removeCoursesList.style.display = 'block';
    } else {
        removeCoursesList.style.display = 'none';
    }
});
