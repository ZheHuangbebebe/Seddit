function init(){
    //header elements
    let header = document.createElement('header');
    header.classList.add('banner');
    header.id = 'nav';
    let logo = document.createElement('h1');
    logo.id = 'logo';
    logo.classList.add('flex-center');
    logo.textContent = 'Seddit';
    let nav = document.createElement('ul');
    nav.id = 'list';
    nav.classList.add('nav');
    let searchli = document.createElement('li');
    searchli.id = 'searchli';
    searchli.classList.add('nav-item');
    let loginli = document.createElement('li');
    loginli.id = 'loginli';
    loginli.classList.add('nav-item');
    let signupli = document.createElement('li');
    signupli.id = 'signupli';
    signupli.classList.add('nav-item');
    header.appendChild(logo);
    nav.appendChild(searchli);
    nav.appendChild(loginli);
    nav.appendChild(signupli);
    header.appendChild(nav);
    let search = document.createElement('input');
    let login = document.createElement('button');
    let signup = document.createElement('button');
    search.id = 'search';
    login.id = 'login';
    signup.id = 'signup';
    search.setAttribute('data-id-search','');
    login.setAttribute('data-id-login','');
    signup.setAttribute('data-id-signup','');
    searchli.appendChild(search);
    loginli.appendChild(login);
    signupli.appendChild(signup);
    search.placeholder = 'Search Seddit';
    search.type = 'search';
    login.classList.add('button');
    login.classList.add('button-primary');
    signup.classList.add('button');
    signup.classList.add('button-secondary');
    login.textContent = 'Log In';
    signup.textContent = 'Sign Up';
    document.getElementById('root').appendChild(header);


    // main elements
    let main = document.createElement('main');
    main.setAttribute('role','main');
    let feed = document.createElement('ul');
    feed.id = 'feed';
    feed.setAttribute('data-id-feed','');
    main.appendChild(feed);
    let feed_header = document.createElement('div');
    feed_header.classList.add('feed-header');
    let feed_title = document.createElement('h3');
    feed_title.classList.add('feed-title');
    feed_title.classList.add('alt-text');
    feed_title.textContent = 'Popular posts';
    feed_header.appendChild(feed_title);
    let post_btn = document.createElement('button');
    post_btn.classList.add('button');
    post_btn.classList.add('button-secondary');
    post_btn.textContent = 'Post';
    post_btn.id = 'post-button';
    feed_header.appendChild(post_btn);
    document.getElementById('root').appendChild(main);
    feed.appendChild(feed_header);

}
export default init