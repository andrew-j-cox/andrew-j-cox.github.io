/* Simple code that changes buy page tab text to fit a mobile screen */
document.addEventListener('DOMContentLoaded', setupPage);
function setupPage() {
  textChange();
  window.addEventListener('resize', textChange);
  function textChange() {
    if (window.innerWidth <= 800) {
      document.getElementById('BLable').innerHTML = "BLU";
      document.getElementById('DLable').innerHTML = "DIGI";
    }
    else {
      document.getElementById('BLable').innerHTML = "Blu-ray";
      document.getElementById('DLable').innerHTML = "Stream";
    }
  }
}
