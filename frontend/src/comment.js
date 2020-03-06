function comment(token, target, apiUrl){

    var modal = document.createElement('div');
    var span = document.createElement('span');
    var content = document.createElement('div');
    content.classList.add('modal-content');
    span.classList.add('close');
    span.textContent = 'X';
    modal.classList.add('modal');
    modal.appendChild(content);
    content.appendChild(span);
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
        p.textContent = 'comments:';
        content.appendChild(p);
        for(var i = 0; i<json.comments.length;i++){
            var p = document.createElement('p');
            p.textContent = json.comments[i].comment;
            content.appendChild(p);
        }
    })
    

}

export default comment