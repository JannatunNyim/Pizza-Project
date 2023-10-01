let Navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   Navbar.classList.toggle('active');
}

let Account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   Account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   Account.classList.remove('active');
}

let MyOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   MyOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   MyOrders.classList.remove('active');
}

let Cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   Cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   Cart.classList.remove('active');
}

window.onscroll = () =>{
   Navbar.classList.remove('active');
   MyOrders.classList.remove('active');
   Cart.classList.remove('active');
};

let Slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let Index = 0;

function next(){
   Slides[index].classList.remove('active');
   Index = (index + 1) % slides.length;
   Slides[index].classList.add('active');
}

function prev(){
   Slides[index].classList.remove('active');
   Index = (index - 1 + slides.length) % slides.length;
   Slides[index].classList.add('active');
}

let Accordion = document.querySelectorAll('.faq .accordion-container .accordion');

Accordion.forEach(acco =>{
   acco.onclick = () =>{
      Accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   account.classList.remove('active');
}

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
};

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});
