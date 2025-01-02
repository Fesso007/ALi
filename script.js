let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


var jesonResult=[{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
},{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
},{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
},{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
},{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
},{
    "id":"1",
    "imageUrl":"images/p-4.jpg",
    "city":"Multan",
    "description":"Multan, the \"City of Saints,\" blends rich history, spiritual heritage, and vibrant culture in the heart of southern Punjab",
    "reting":"4.5",
    "price":"120.00",
    "discount":"90.50"
}
]


    var populetHtml='';
    jesonResult.forEach(function(item) {
        populetHtml += `
            <div class="box">
                <img src="${item.imageUrl}" alt="${item.city}" />
                <div class="content">
<h3> <i class="fas fa-map-marker-alt"></i>${item.city}</h3>
                <p>${item.description}</p>

 <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="price"> $${item.discount} <span>$${item.price}</span> </div>
        <a href="#" class="btn">book now</a>
            </div>
            </div>
        `;
    });

    document.getElementById("packagesList").innerHTML=populetHtml;

    


window.onscroll = () => {
 searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 loginForm.classList.remove('active');
}


menu.addEventListener('click', () => {
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 });


searchBtn.addEventListener('click', () => {
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
 });

 formBtn.addEventListener('click', () => {
 loginForm.classList.add('active');
 });

 formClose.addEventListener('click', () => {
 loginForm.classList.remove('active');
 });

videoBtn.forEach(btn =>{
 btn.addEventListener('click', ()=>{
  document.querySelector('.controls .active').classList.remove('active');
  btn.classList.add('active'); 
  let src = btn.getAttribute('data-src');
  document.querySelector('#video-slider').src= src;
 });
});

var swiper = new Swiper(".review-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  640: {
   slidesPerView: 1,
  },
  768: {
   slidesPerView: 2,
  },
  1024: {
   slidesPerView: 3,
  },
 },
});



var swiper = new Swiper(".brand-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  450: {
   slidesPerView: 2,
  },
  768: {
   slidesPerView: 3,
  },
  991: {
   slidesPerView: 4,
  },
  1200: {
   slidesPerView: 5,
  },
 },
});













