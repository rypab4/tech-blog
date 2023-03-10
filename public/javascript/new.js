async function newFormHandler(event) {
    event.preventDefault();
    //const for new post entered in form
    const title = document.querySelector('#title-input').value;
    const post_content = document.querySelector('#post-content-input').value;
    // connect to api
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {

        alert(response.statusText)
    }
}

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler)