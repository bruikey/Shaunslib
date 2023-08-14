
document.addEventListener('DOMContentLoaded', function() 
{
    var signupForm = document.getElementById('signupForm');
    var signupButton = document.getElementById('signupButton');
    var messageContainer = document.getElementById('message');

        signupButton.addEventListener('click', function() 
        {
            var username = signupForm.username.value;
            var email = signupForm.email.value;
            var password = signupForm.password.value;

            var message = `Username: ${username}<br>Email: ${email}<br>Password: ${password}`;
            messageContainer.innerHTML = message;
        });
});
