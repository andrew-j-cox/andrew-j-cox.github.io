/* Video player on the media page */
//------------------------Wait--For--DOM----------------------------------------
document.addEventListener('DOMContentLoaded', function() {
//--------------------Variable--Declarations------------------------------------
  var video = document.getElementById("video");
  var videoBox = document.getElementById("videoBox");
  var vidNav = document.getElementById("vidNav");
  var timeLine = document.getElementById("timeLine");
  var time = "0";
  var timeValue = "0";
  var volumeSet = document.getElementById("volume");
  var mute = document.getElementById("mute");
  var play = document.getElementById("playButton");
  var yT = document.getElementById("Youtube");
  var back = document.getElementById("back");
  var forward = document.getElementById("forward");
  var fullscreen = document.getElementById("fullScreen");
  var forward = document.getElementById("forward");
  var back = document.getElementById("back");
  var mute = document.getElementById("mute");
//----------------------Event Listners------------------------------------------
  play.addEventListener("click", playAndPause);                      //Line 33
  yT.addEventListener("click", youTLink);                            //Line 44
  back.addEventListener("click", skipBack);                          //Line 48
  back.addEventListener("dblclick", restart);                        //Line 52
  forward.addEventListener("click", skipFor);                        //Line 62
  mute.addEventListener("click", muteTog);                           //Line 66
  volumeSet.addEventListener("change", volChange);                   //Line 80
  fullscreen.addEventListener("click", fullS);                       //Line 89
  timeLine.addEventListener("change", timeSet);                      //Line 101
  video.addEventListener("timeupdate", timeUpdate);                  //Line 106
                                                      //Timeline fixes Line 112
//--------------------------PLAY------------------------------------------------
  function playAndPause() {
    if (video.paused) {
        video.play();
        document.getElementById("playButton").className="fa fa-pause";
    }
    else {
      video.pause();
      document.getElementById("playButton").className="fa fa-play";
    }
  }
//-------------------------------YouTube--Link----------------------------------
  function youTLink() {
    window.location='https://m.youtube.com/watch?v=LjLamj-b0I8';
  }
//--------------------------Skip--Back------------------------------------------
  function skipBack() {
    video.currentTime = video.currentTime - 5;
  }
//-----------------------------Restart------------------------------------------
  function restart() {
    video.currentTime = 0;
    document.getElementById("back").className="fa fa-fast-backward";
    window.setTimeout(restart2,1000);
  }
  function restart2() {
    /* Returns skip forward to its orignal icon  */
    document.getElementById("back").className="fa fa-backward";
  }
//--------------------------Skip--Forward---------------------------------------
  function skipFor() {
    video.currentTime = video.currentTime + 5;
  }
  //--------------------------------Mute------------------------------------------
  function muteTog() {
    if (volumeSet.value == 0) {
      volumeSet.value = 1;
      mute.className="fa fa-volume-up"
    }
    else {
      mute.className="fa fa-volume-off"

      volumeSet.value = 0;
    }
    video.volume = volumeSet.value;
  }
//---------------------------Volume--slider-----------------------------------
  function volChange() {
    if (volumeSet.value == 0) {
      mute.className="fa fa-volume-off"
    }
    else {
      mute.className="fa fa-volume-up"
    }
    video.volume = volumeSet.value;
  }
//--------------------------FullScreen------------------------------------------
  function fullS(){
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    /* Firefox */
    else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    }
    /* Chome/Opera */
    else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  }
//------------------------Timeline--set--time-----------------------------------
  function timeSet() {
      video.currentTime = video.duration * (timeLine.value / 100);
    }
//------------------------Timeline--update--time--------------------------------
  function timeUpdate() {
      timeLine.value = (100 / video.duration) * video.currentTime;
    }
//------------------------Timeline--stutter--fix--------------------------------
    /* This function pauses the video while the user moves the timeline bar. */
    /* Otherwise the timeline tries to auto-update its position while held */
    timeLine.addEventListener("mousedown", function() {
      video.pause();
      document.getElementById("playButton").className="fa fa-play";
    });
    timeLine.addEventListener("mouseup", function() {
      video.play();
      document.getElementById("playButton").className="fa fa-pause";
    });
});
