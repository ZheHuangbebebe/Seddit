/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 * 
 * Updated 2019.
 */

// import your own scripts here.
import loginForm from './login.js'
import logoutForm from './logout.js'
import signupForm from './signup.js'
import publicFeed from './publicFeed.js'
import upvote from './upvote.js';
import comment from './comment.js'
import newPost from './newPost.js'
import init from './init.js'
// your app must take an apiUrl as an argument --
// this will allow us to verify your apps behaviour with 
// different datasets.
function initApp(apiUrl) {
  localStorage.removeItem('token');
  localStorage.setItem('page', '1');
  publicFeed(apiUrl);
  init();

  document.getElementById("login").addEventListener('click', () => {
    if(localStorage.getItem('token') == null){
      loginForm(apiUrl);
    }
    else{
      logoutForm(apiUrl);
    }
  });

  document.getElementById('post-button').addEventListener('click', () =>{
    if(localStorage.getItem('token') != null){
      newPost(localStorage.getItem('token'),apiUrl);
    }
  });

  document.getElementById('feed').addEventListener('click', function(event) {
    if(localStorage.getItem('token') != null){
      if(event.target.id == 'vote'){
        upvote(localStorage.getItem('token'), event.target.parentElement.id, apiUrl);
      }
      if(event.target.id == 'comment'){
        comment(localStorage.getItem('token'), event.target.parentElement.parentElement.id, apiUrl);
      }
    }
  });

  document.getElementById("signup").addEventListener('click', () => {
    signupForm(apiUrl);
  });

}

export default initApp;
