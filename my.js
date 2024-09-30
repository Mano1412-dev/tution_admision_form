<<<<<<< HEAD
function saveEnrollment() {
    const form = document.getElementById('enrollmentForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    data.id = Date.now(); // Generate a unique ID based on the current timestamp
    console.log('Student Enrollment Data:', data);
    alert('Student details saved successfully!');
    // Here you would typically send the data to your server/database
}

function saveFamilyDetails() {
    const form = document.getElementById('familyForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    data.id = Date.now(); // Generate a unique ID based on the current timestamp
    console.log('Family Details Data:', data);
    alert('Family details saved successfully!');
    // Here you would typically send the data to your server/database
}
=======
function saveEnrollment() {
    const form = document.getElementById('enrollmentForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    data.id = Date.now(); // Generate a unique ID based on the current timestamp
    console.log('Student Enrollment Data:', data);
    alert('Student details saved successfully!');
    // Here you would typically send the data to your server/database
}

function saveFamilyDetails() {
    const form = document.getElementById('familyForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    data.id = Date.now(); // Generate a unique ID based on the current timestamp
    console.log('Family Details Data:', data);
    alert('Family details saved successfully!');
    // Here you would typically send the data to your server/database
}
>>>>>>> e46adc91ca8c8d98e3b7f752ce11103d71da8fba
