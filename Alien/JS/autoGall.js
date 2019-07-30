/* Automated gallery on the home page */
document.addEventListener('DOMContentLoaded', setupGallery);
function setupGallery() {
  var gallery = document.getElementById('autoGall');
  var picCount = gallery.childElementCount;
  var currentPic = 0;
  var pics = gallery.getElementsByClassName('autoGall-pic');
  var timer = document.getElementById('timer');
  /* Stops user from being about to click and drag loading bar */
  timer.disabled = true;
  var pageTag = document.getElementById('pageTag');
  pageTag.innerHTML = (currentPic + 1) + "/" + pics.length;

  cycle();
  timerBump();

  function cycle() /*Adapted from W3C slideshow ("W3.CSS Slideshow", 2017)*/ {
    /* Makes all the images hidden */
    for (var i = 0; i < picCount; i++) {
      pics[i].style.display = "none";
    }
    /* Detects if the gallery has reached the end then resets it */
    if (currentPic > picCount - 1) {
      currentPic = 0;
    }
    /* Makes the current picture in rotation visable */
    pics[currentPic].style.display = "block";
    /* Resets loading bar */
    timer.value = 0;
    /* Changes the currently selected image value */
    currentPic++
    /* updates the gallery page value */
    pageTag.innerHTML = (currentPic) + "/" + pics.length;
  }
  /* Moves the loading bar along and activates image cycling */
  function timerBump() {
    timer.value++
    setTimeout(timerBump, 1);
    if (timer.value >= 590) {
      cycle();
    }
  }
}
// References and Bibliography
// W3.CSS Slideshow. (2017). W3schools.com. Retrieved 10 April 2017, from https://www.w3schools.com/w3css/w3css_slideshow.asp
