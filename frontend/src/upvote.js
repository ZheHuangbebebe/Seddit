function upvote(token, target, apiUrl){

    var modal = document.createElement('div');
    var span = document.createElement('span');
    var content = document.createElement('div');
    var button = document.createElement('button');
    button.classList.add('button-secondary');
    button.classList.add('button');
    button.id = 'upvote-button';
    button.textContent = 'VOTE';
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
    button.addEventListener('click', function(){
        addVote(token, target, apiUrl);
    });

    const url = new URL(''.concat(apiUrl,'/post')), params = {id: target}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const init = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('Token: ',token)
        },
        method: 'GET'
    };
    fetch(url,init)
    .then(resp => resp.json())
    .then(function(json){
        var p = document.createElement('p');
        p.textContent = 'user id:';
        content.appendChild(p);
        for(var i = 0; i<json.meta.upvotes.length;i++){
            var p = document.createElement('p');
            p.textContent = json.meta.upvotes[i];
            content.appendChild(p);
        }
    })
    

}

function addVote(token, id, apiUrl){
    const url = new URL(''.concat(apiUrl,'/post/vote')), params = {id: id}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const init = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('Token: ',token)
        },
        method: 'PUT'
    };
    fetch(url,init)
    .then(resp => resp.json())
    .then(function(json){
        alert(json.message);
    })
}

export default upvote