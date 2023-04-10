const nav=document.querySelector("nav");

window.addEventListener("scroll",()=> {
    if (window.pageYOffset>60) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})

// booking module


var modal = document.getElementById("booking-modal");

// Get the button that opens the modal
var btn = document.getElementById("book-taxi-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Animation

const videoContainer = document.querySelector('.video-container');
const videos = videoContainer.querySelectorAll('video');
const thumbnailContainer = document.querySelector('.thumbnail-container');
const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail');
let currentVideoIndex = 0;

function loadVideo(index) {
  videos.forEach((video) => video.pause());
  videos[index].play();
}

function showVideo(index) {
  videoContainer.style.backgroundImage = `url(${thumbnails[index].getAttribute('src')})`;
  currentVideoIndex = index;
  thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));
  thumbnails[index].classList.add('active');
  loadVideo(index);
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const index = parseInt(thumbnail.getAttribute('data-video-index'));
    showVideo(index);
  });
});

showVideo(0);

