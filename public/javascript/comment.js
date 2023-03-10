async function commentFormHandler(event) {
    event.preventDefault();
    //create const for comment and trim
    const comment_text = document.querySelector('#new-comment').value.trim();
    // extracts the last segment of the current URL path,
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    //if comment available post in api/comments else error
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);