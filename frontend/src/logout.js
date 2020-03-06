
import publicFeed from './publicFeed.js'
function logoutForm(apiUrl){
    'use strict';
    localStorage.removeItem('token');
    document.getElementById('profile-button').style.display = 'none';
    document.getElementById("signupli").style.display = '';
    document.getElementById("searchli").style.display = '';
    document.getElementById('login').textContent = "LOG IN";
    document.getElementById('next_btn').style.display = 'none';
    document.getElementById('prev_btn').style.display = 'none';
    publicFeed(apiUrl);
}

export default logoutForm;