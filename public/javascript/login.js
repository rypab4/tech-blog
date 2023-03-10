async function loginFormHandler(event) {
  event.preventDefault();
//const for the form when entering username and password
  const username = document.querySelector("#username-input-login").value.trim();
  const password = document.querySelector("#password-input-login").value.trim();
 
  if (username && password) {

    const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
       
        document.location.replace('/dashboard');
        
    } else {
        alert(response.statusText);
    }
}
}
//login form submit button
document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
