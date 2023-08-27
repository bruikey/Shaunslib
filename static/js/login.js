function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to a new page or perform other actions for successful login
            console.log('Login successful');
        } else {
            // Display an error message or perform other actions for failed login
            console.error('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
