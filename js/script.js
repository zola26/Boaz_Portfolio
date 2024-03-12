// // document.addEventListener('DOMContentLoaded', function() {
//   // let awardContainer = document.getElementById('awardContainer');
//   let cards = document.querySelectorAll('.award-card');
//   let prevButton = document.getElementById('prevBtn');
//   let nextButton = document.getElementById('nextBtn');
  
//   let currentIndex = 0;

//   // Show the initial three cards
//   showCards();

//   // Event listener for the next button
//   nextButton.addEventListener('click', function() {
//       currentIndex += 3;
//       showCards();
//   });

//   // Event listener for the previous button
//   prevButton.addEventListener('click', function() {
//       currentIndex -= 3;
//       showCards();
//   });

//   // Function to show/hide cards based on the current index
//   function showCards() {
//       cards.forEach((card, index) => {
//           if (index >= currentIndex && index < currentIndex + 3) {
//               card.style.display = 'block';
//           } else {
//               card.style.display = 'none';
//           }
//       });

//       // Enable/disable buttons based on the current index
//       prevButton.disabled = currentIndex === 0;
//       nextButton.disabled = currentIndex >= cards.length - 3;
//   }
// //  });
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};
/*===== scroll sections avtive Link====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top < offset + height) {
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});
};
});
/*===== scroll sections avtive Link====*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
// remove toggle icon and navbar when click navbar
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
};
/*====== ===== swiper ======*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*====== ===== scroll reveal ======*/
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    // ======_typed js ======
    const typed = new Typed('.multiple-text', {
    strings: ['an AI Enthusiast & Visionary', 'a Computer Engineer', 'an Application developer '],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });

    document.addEventListener('DOMContentLoaded', function () {
      const allNewsContainer = document.querySelector('.all-news-container');
      const allNewsCards = document.querySelectorAll('.all-news-card');
  
      let visibleCards = 5;
      let cardHeight = allNewsCards[0].offsetHeight + 20; // Include the margin
  
      allNewsContainer.addEventListener('scroll', function () {
          const scrollTop = allNewsContainer.scrollTop;
          const scrollOffset = scrollTop % cardHeight;
  
          if (scrollOffset === 0) {
              // Scroll position is at a multiple of cardHeight
              const startCardIndex = scrollTop / cardHeight;
  
              // Show/hide cards based on the scroll position
              allNewsCards.forEach((card, index) => {
                  card.style.display = (index >= startCardIndex && index < startCardIndex + visibleCards) ? 'flex' : 'none';
              });
          }
      });
     // Hide the scrollbar by adding a pseudo-element
    const style = document.createElement('style');
    style.textContent = '.all-news-container::-webkit-scrollbar { width: 0; }';
    document.head.appendChild(style);
  });
  
    const form = document.querySelector("form");
    const fullname = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const mess = document.getElementById("message");
    function sendEmail(){
      const bodyMessage = `FUll Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
      Email.send({
          SecureToken :"5b75a689-de5a-4f00-b920-ef565bc2fb44",
          To : 'boazict@gmail.com',
          From : "boazict@gmail.com",
          Subject : subject.value,
          Body : bodyMessage
    }).then(
      message => {
          if (message == "OK"){
            Swal.fire({
              title: "Success!",
              text: "message sent successfully!",
              icon: "success"
            });
    
          }
      }
    );
    }
    function checkInputs() {
      const items = document.querySelectorAll(".item");
      for (const item of items) {
      if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
      }
      if (items [1].value != "") { 
        checkEmail();
        }
        items [1].addEventListener("keyup", () => {
        checkEmail();
        });
      item.addEventListener("keyup", () => {
      if (item.value != "") {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
      }
      else {
      item.classList.add("error");
      item.parentElement.classList.add("error");
      }
      });
      }
      }
      function checkEmail() {
        const emailRegex =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");
        if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add ("error");
        if (email.value != "") {
        errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
        errorTxtEmail.innerText = "Email Address can't be blank";
        }
        }
        else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        }
        }
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        checkInputs()
        if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains ("error") && !mess.classList.contains("error")) {
           sendEmail();
           form.reset();
           return false;
        }
        // sendEmail();
    });
      
   





