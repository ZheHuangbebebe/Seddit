
function publicFeed(apiUrl){
    'use strict';
    while(document.getElementsByClassName('post').length != 0){
        document.getElementsByClassName('post')[0].remove();
    }
    const url = ''.concat(apiUrl,"/post/public")
    const init = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }
    fetch(url,init)
    .then(resp => resp.json())
    .then(function(json){
            return json.posts;
    })
    .then(function(posts){
        var j = 0;
        for(var i =0;i<posts.length;i++){
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
            vote.id = 'vote';
            vote.setAttribute('data-id-upvotes','');
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
            

            content.appendChild(post_title);
            content.appendChild(post_text);
            content.appendChild(post_image);
            content.appendChild(post_author);
            content.appendChild(post_comment);
            post.appendChild(vote);
            post.appendChild(content);
            
            post_author.textContent = ''.concat('Posted by @',author);
            vote.textContent = upvote;
            post_title.textContent = title;
            post_text.textContent = text;
            post_comment.textContent = ''.concat(comment,' comments');
            document.getElementById('feed').appendChild(post);
           
        }
    });
}

export default publicFeed;