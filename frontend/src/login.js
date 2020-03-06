import userFeed from './userFeed.js'

function loginForm(apiUrl){
    'use strict';
    if (document.getElementById("signupli").style.display !== 'none'){
        document.getElementById("signupli").style.display = 'none';
        document.getElementById("searchli").style.display = 'none';
        let unameli = document.createElement("li");
        let pswli = document.createElement("li");
        unameli.id = 'unameli';
        pswli.id = 'pswli';
        unameli.classList.add("nav-item");
        pswli.classList.add("nav-item");
        let uname = document.createElement("input");
        let psw = document.createElement("input");
        uname.id = "uname";
        psw.id = "psw";
        uname.placeholder = "Enter Username";
        psw.placeholder = "Enter Password";
        uname.required = true;
        psw.required = true;
        psw.type = 'password';
        unameli.appendChild(uname);
        pswli.appendChild(psw);
        document.getElementById("list").insertBefore(unameli, document.getElementById("list").childNodes[1]);
        document.getElementById("list").insertBefore(pswli, document.getElementById("list").childNodes[2]);
    }
    else{
        var payload = {
            username: uname.value,
            password: psw.value
        };
        const url = ''.concat(apiUrl,'/auth/login');
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json())
        .then(function(json){
            if(json.token == null){
                alert(json.message);
            }
            else{
                localStorage.setItem('token', json.token);
                document.getElementById("unameli").style.display = 'none';
                document.getElementById("pswli").style.display = 'none';
                document.getElementById('login').textContent = "LOG OUT";
                if(document.getElementById('profile-button') == undefined){
                    var profileli = document.createElement('li');
                    profileli.classList.add('nav-item');
                    var profile = document.createElement('button');
                    profile.textContent = 'PROFILE';
                    profile.id = 'profile-button';
                    profile.classList.add('button');
                    profile.classList.add('button-primary');
                    profileli.appendChild(profile);
                    document.getElementById('list').appendChild(profileli);
                }
                else{
                    document.getElementById('profile-button').style.display = '';
                }
                userFeed(json.token, apiUrl);
                document.getElementById('next_btn').addEventListener('click', () => {
                    var curr = parseInt(localStorage.getItem('page'))+1;
                    localStorage.setItem('page', curr.toString());
                    userFeed(json.token, apiUrl)
                });
                document.getElementById('prev_btn').addEventListener('click', () => {
                    var curr = parseInt(localStorage.getItem('page'))-1;
                    localStorage.setItem('page', curr.toString());
                    userFeed(json.token, apiUrl)
                });

                document.getElementById('profile-button').addEventListener('click', () => {
                    userProfile(json.token, apiUrl);
                });
            }
        });
    }   
}

function userProfile(token, url){
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
        var username = document.createElement('p');
        var posts = document.createElement('p');
        var followings = document.createElement('p');
        content.appendChild(username);
        content.appendChild(posts);
        content.appendChild(followings);
    const Url = ''.concat(url,'/user');
    const init = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('Token: ',token)
        },
        method: 'GET'
    }
    fetch(Url, init)
    .then(resp => resp.json())
    .then(function(json){
        username.textContent = ''.concat('username: ',json.username);
        posts.textContent = ''.concat('Number of post: ',json.posts.length);
        followings.textContent = ''.concat('Number of following: ',json.following.length);
    });
}

export default loginForm;