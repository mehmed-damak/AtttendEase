// Fetch attendance data and display it in a table
function fetchAttendance() {
  const courseId = window.location.search.substring(1);
  fetch(`/api/attendance?courseId=${courseId}`)
    .then((response) => response.json())
    .then((data) => displayAttendance(data))
    .catch((error) => console.error("Error:", error));
}

// Display the attendance data in a table
function displayAttendance(data) {
  const table = document.createElement("table");
  table.innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Attendance</th>
        </tr>
        ${data.map(student => `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.attendance}%</td>
            </tr>
        `).join('')}
    `;
  document.getElementById('attendanceTable').appendChild(table);
}

// Add event listener to the back button
document.getElementById('backButton').addEventListener('click', goBack);

// Function to go back to the previous page
function goBack() {
  window.history.back();
}

// Function to generate a list of 5 students with randomly generated attendance states
function generateStudents() {
  const studentsList = document.getElementById('studentsList');
  const students = [];
  for (let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * 1000000);
      const name = 'Student ' + id;
      const attendance = Math.random() < 0.5 ? 'Absent' : 'Present';
      const student = { id, name, attendance };
      students.push(student);
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${name}</strong> - ${attendance}`;
      studentsList.appendChild(listItem);
  }
}

// Generate the list of students when the page loads
generateStudents();

// Fetch the attendance data when the page loads
fetchAttendance();
