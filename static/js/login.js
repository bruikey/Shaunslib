function login() {
    const form = document.getElementById('login-form'); // Get the form element by its id

    // Get the values of username and password from form elements
    const username = form.username.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to a new page or perform other actions for successful login
            console.log('Login successful');
            window.location.href = '/loggedin'; // Redirect to logged-in page
        } else {
            // Display an error message or perform other actions for failed login
            console.error('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

