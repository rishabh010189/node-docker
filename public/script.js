
function onFormSubmit(event){
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userName, password})
    }).then(res => res.json()).then(data => console.log(data));

}