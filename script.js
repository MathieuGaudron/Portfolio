
const menu = document.querySelector(".header-menu");
const menuLinks = document.querySelectorAll(".header-menu li a");

const openMenu = () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
    
};

if (window.innerWidth <= 810) {
  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          menu.style.display = "none";
      });
  });}




let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
let video4 = document.getElementById('video4');
let video5 = document.getElementById('video5');
let video6 = document.getElementById('video6');

video1.addEventListener('mouseover', ()=> {                 
  video1.play();
});

video1.addEventListener('mouseout', ()=> {
  video1.pause();
  video1.currentTime = 0;
});


video2.addEventListener('mouseover', ()=> {
  video2.play(); 
});

video2.addEventListener('mouseout', ()=> {
  video2.pause();
  video2.currentTime = 0;
});


video3.addEventListener('mouseover', ()=> {
  video3.play();
});

video3.addEventListener('mouseout', ()=> {
  video3.pause();
  video3.currentTime = 0;
});


video4.addEventListener('mouseover', ()=> {
  video4.play();
});

video4.addEventListener('mouseout', ()=> {
  video4.pause();
  video4.currentTime = 0;
});


video5.addEventListener('mouseover', ()=> {
  video5.play();
});

video5.addEventListener('mouseout', ()=> {
  video5.pause();
  video5.currentTime = 0;
});


video6.addEventListener('mouseover', ()=> {
  video6.play();
});

video6.addEventListener('mouseout', ()=> {
  video6.pause();
  video6.currentTime = 0;
});





function openPopup() {
  let popup = document.getElementById("popupFormulaire");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("popupFormulaire");
  popup.style.display = "none";
}

window.onclick = function(event) {
  let popup = document.getElementById("popupFormulaire");
  if (event.target == popup) {
      popup.style.display = "none";
  }
}

document.onkeydown = function(event) {
  let popup = document.getElementById("popupFormulaire");
  if (event.key == "Escape") {
      popup.style.display = "none";
  }
}





function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function() {
  if (isMobile()) {
      var videos = document.querySelectorAll('.myVideo');
      videos.forEach(function(video) {
          video.removeAttribute('autoplay');

          video.addEventListener('click', function() {
              video.play();
          });
      });
  }
});