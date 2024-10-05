// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;
