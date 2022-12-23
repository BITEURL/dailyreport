// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the form element
  const form = document.querySelector('#report-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', event => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form data
    const date = document.querySelector('#date').value;
    const location = document.querySelector('#location').value;
    const description = document.querySelector('#description').value;

    // Validate the form data
    if (!date || !location || !description) {
      alert('All fields are required!');
      return;
    }

    // Construct the report object
    const report = {
      date,
      location,
      description
    };

    // Save the report to local storage
    localStorage.setItem('report', JSON.stringify(report));

    // Display the report
    displayReport(report);
  });

  // Check for saved report in local storage
  const savedReport = localStorage.getItem('report');
  if (savedReport) {
    // Parse the saved report and display it
    displayReport(JSON.parse(savedReport));
  }
});

// Display the report
function displayReport(report) {
  // Get a reference to the output element
  const output = document.querySelector('#report-output');

  // Clear the output element
  output.innerHTML = '';

  // Create the report elements
  const dateElement = document.createElement('p');
  dateElement.textContent = `Date: ${report.date}`;
  const locationElement = document.createElement('p');
  locationElement.textContent = `Location: ${report.location}`;
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `Description: ${report.description}`;

  // Append the report elements to the output element
  output.appendChild(dateElement);
  output.appendChild(locationElement);
  output.appendChild(descriptionElement);
}
