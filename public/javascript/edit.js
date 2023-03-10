async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    //const for title and post
    const title = document.querySelector('#edit-title-input').value;
    const post_content = document.querySelector('#edit-post-content-input').value;
    //use the edit api 
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        document.location.replace('/dashboard');
    }

}
//if click on edit submit
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);