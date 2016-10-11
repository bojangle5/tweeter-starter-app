const $ = require('jquery');
const Backbone = require('backbone');
const Router = require('./router');

window.$ = window.jQuery = $;

const greeting = document.createElement('h2');

var username = $('[data-bootstrap]').data('bootstrap').username;

greeting.innerText = 'Hello ' + username + '! Welcome to Anti_Tweeter!';

app.appendChild(greeting);
const router = new Router();
Backbone.history.start();



// const $ = require('jquery');
//
// // Set jQuery in the window
// window.$ = window.jQuery = $;
//
// const app = document.querySelector('#app');
//
// // Set greeting
// const greeting = document.createElement('h2');
// greeting.innerText = 'Anti-Twitter!';
//
// app.appendChild(greeting);
