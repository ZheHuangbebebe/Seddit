import upvote from './upvote.js'
function userFeed(token, apiUrl){
    'use strict';
    while(document.getElementsByClassName('post').length != 0){
        document.getElementsByClassName('post')[0].remove();
    }
    const currPage = parseInt(localStorage.getItem('page'));
    const n = currPage*10;
    const url = new URL(''.concat(apiUrl,'/user/feed')), params = {n: n.toString()}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const init = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''.concat('Token: ',token)
        },
        method: 'GET'
    }
    fetch(url,init)
    .then(resp => resp.json())
    .then(function(json){
            return json.posts;
    })
    .then(function(posts){
        if (posts == undefined) {return;}
        var j = 0;
        for(var i = posts.length-1;i>=0;i--){
            var id = posts[i].id;
            var title = posts[i].title;
            var text = posts[i].text;
            var upvote = posts[i].meta.upvotes.length;
            var author = posts[i].meta.author;
            var img = posts[i].image;
            var comment = posts[i].comments.length;
            var post = document.createElement('li');
            post.classList.add('post');
            post.id = id;
            post.setAttribute('data-id-post','');
            var vote = document.createElement('div');
            vote.classList.add('vote');
            vote.classList.add('upvote');
            vote.style.textDecoration = 'underline';
            vote.id = 'vote';
            vote.addEventListener('mouseenter', function(event){
                highlight_vote(event);
            });
            vote.addEventListener('mouseleave', function(event){
                highlight_vote(event);
            });
            var content = document.createElement('div');
            content.classList.add('content');
            let post_title = document.createElement('h4');
            post_title.classList.add('post-title');
            post_title.classList.add('alt-text');
            post_title.setAttribute('data-id-title','');
            var post_author = document.createElement('p');
            post_author.classList.add('post-author');
            post_author.setAttribute('data-id-author','');
            var post_text = document.createElement('p');
            post_text.classList.add('text');
            var post_image = document.createElement('img');
            if(img != null){
                post_image.src = ''.concat('data:image/png;base64,',img);
            }
            var post_comment = document.createElement('p');
            post_comment.classList.add('post-comment');
            post_comment.id = 'comment';
            post_comment.style.textDecoration = 'underline';
            post_comment.addEventListener('mouseenter', function(event){
                highlight_comment(event);
            });
            post_comment.addEventListener('mouseleave', function(event){
                highlight_comment(event);
            });
            

            content.appendChild(post_title);
            content.appendChild(post_text);
            content.appendChild(post_image);
            content.appendChild(post_author);
            content.appendChild(post_comment);
            post.appendChild(vote);
            post.appendChild(content);
            post_author.textContent = ''.concat('Posted by @',author);
            vote.textContent = upvote;
            vote.setAttribute('data-id-vote','');
            post_title.textContent = title;
            post_text.textContent = text;
            post_comment.textContent = ''.concat(comment,' comments');
            document.getElementById('feed').appendChild(post);
           
        }
    });

    if(document.getElementById('next_btn') == undefined){
        var next_btn = document.createElement('button');
        var prev_btn = document.createElement('button');
        var btn_div = document.createElement('div');
        btn_div.appendChild(prev_btn);
        btn_div.appendChild(next_btn);
        document.getElementById('feed').appendChild(btn_div);
        next_btn.classList.add('page-button');
        next_btn.id = 'next_btn';
        prev_btn.classList.add('page-button');
        prev_btn.id = 'prev_btn';
        next_btn.textContent = 'Next Page';
        prev_btn.textContent = 'Previous Page';
    }
    else{
        document.getElementById('next_btn').style.display = ''; 
        document.getElementById('prev_btn').style.display = ''; 
    }

}
function highlight_vote(){
    event.target.classList.toggle('highlight');
}
function highlight_comment(){
    event.target.classList.toggle('highlight');
}
export default userFeed