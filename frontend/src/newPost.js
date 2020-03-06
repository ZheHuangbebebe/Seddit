function newPost(token, apiUrl){
var modal = document.createElement('div');
    var span = document.createElement('span');
    var content = document.createElement('div');
    var button = document.createElement('button');
    button.classList.add('button-secondary');
    button.classList.add('button');
    button.id = 'upvote-button';
    button.textContent = 'SUBMIT';
    content.classList.add('modal-content');
    span.classList.add('close');
    span.textContent = 'X';
    modal.classList.add('modal');
    modal.appendChild(content);
    content.appendChild(span);
    content.appendChild(button);
    document.getElementById('root').appendChild(modal);
    modal.style.display = 'block';
    span.onclick = function() {
        modal.style.display = "none";
      }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    var input_title = document.createElement('input');
    var input_text = document.createElement('input');
    var input_subseddit = document.createElement('input');
    var input_image = document.createElement('input');
    var div = document.createElement('div');
    input_title.placeholder = "Title";
    input_text.placeholder = "Text";
    input_subseddit.placeholder = "Subseddit";
    input_image.placeholder = "Image (base64)";
    div.appendChild(input_text);
    div.appendChild(input_title);
    div.appendChild(input_subseddit);
    div.appendChild(input_image);
    input_title.classList.add('new-post-input');
    input_text.classList.add('new-post-input');
    input_subseddit.classList.add('new-post-input');
    input_image.classList.add('new-post-input');
    content.appendChild(div);

    button.addEventListener('click', () =>{
        submit(apiUrl, token, input_title.value, input_text.value, input_subseddit.value, input_image.value);
        modal.style.display = "none";
    });
}

function submit(url, token, input_title, input_text, input_subseddit, input_image){
    var imageUrl = null;
    if(input_image != ''){
        imageUrl = input_image;
    }
    var payload = {
        title: input_title,
        text: input_text,
        subseddit: input_subseddit,
        image: imageUrl
    }

    const Url = ''.concat(url, '/post');
    const init = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('Token: ',token)
        },
        method: 'POST',
        body: JSON.stringify(payload)
    }
    fetch (Url, init);
}
export default newPost