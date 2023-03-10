async function signupFormHandler(event) {
    event.preventDefault();
    //signup form const
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //post username and password
    if (username && password) {
        const response = await fetch('/api/user/signup', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check the response status
        
        if (response.ok) {

            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText)
        }
    }
}
//submit button
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
