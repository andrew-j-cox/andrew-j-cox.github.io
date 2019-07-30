/* Gallery on the media page */
//------------------------Wait--For--DOM----------------------------------------
document.addEventListener('DOMContentLoaded', setupGallery);
  function setupGallery() {
  var gallery = document.getElementById('gallery')
  var back = document.getElementById('gallery-back');
  var next = document.getElementById('gallery-next');
  var groupCount = gallery.childElementCount;
  var currentGroup = 1;
  var groupWidth = "600";
  var pageTag = document.getElementById('pageTag');
  /* Sets default page value */
  pageTag.innerHTML = currentGroup + "/" + groupCount;
  var exitValue = 0;
  var images = gallery.getElementsByClassName('imgFg')
  // Back button
  back.addEventListener('click', function(){
    if(currentGroup != 1) {
      --currentGroup;
      pageTag.innerHTML = currentGroup + "/" + groupCount;
      gallery.style.marginLeft = groupWidth - (currentGroup * groupWidth) + 'px';
    }
  });
  // Next button
  next.addEventListener('click', function(){
    if(currentGroup != groupCount) {
      ++currentGroup;
      pageTag.innerHTML = currentGroup + "/" + groupCount;
      gallery.style.marginLeft = groupWidth - (currentGroup * groupWidth) + 'px';
    }
  });
  // Image zoom
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", zoom);
  }
  function zoom() {
    var current = this;
    if (exitValue == 0) {
      next.style.display = "none";
      back.style.display = "none";
      pageTag.style.display = "none";
      current.style.zIndex = 200;
      current.style.width = "600px";
      current.style.height = "400px";
      exitValue = 1;
    }
    else {
      next.style.display = "block";
      back.style.display = "block";
      pageTag.style.display = "block";
      current.style.width = "300px";
      current.style.height = "200px";
      setTimeout(function() {
        current.style.zIndex = 100;
      }, 500);
      exitValue = 0;
    }
  }
}
