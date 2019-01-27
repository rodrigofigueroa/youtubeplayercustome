var tag = document.createElement('script');
 
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-youtube', {
      videoId: 'fZ3c3JCNzIQ',
    playerVars: {
        rel: 0,
        showinfo: 0,
        ecver: 2,
        controls: 0,
        modestbranding: 0
        // autoplay: 1
      },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
var ready = false;
function onPlayerReady(event) {
  ready = true;

  $('.button-video i').click(function() {

      
    var pst = player.getPlayerState();
    var button = document.querySelector('.button-video').children;        
      if(pst == 0 || pst == 2 || pst == 5) {
          player.playVideo();
          button[0].className = 'far fa-pause-circle'; 

      } else if (pst == 1) {
          player.pauseVideo();
          button[0].className = 'far fa-play-circle'; 
      }

  });
  
  var range = document.querySelector('#range-video');

    range.addEventListener('change', function(){
        var seekTo = player.getDuration() * (range.value/100);
        player.seekTo(seekTo, true);
        player.playVideo();
    });

}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    
      var timeVideo = player.getDuration();
      
      mytimer = setInterval(function() {
            timeElapsed = player.getCurrentTime();
            currentTime = ( timeElapsed / timeVideo ) * 100;
            var range = document.querySelector('#range-video');
            if(currentTime > 100) {
                range.value = 0;
            } else {
                range.value = currentTime;
                var barJuice = document.querySelector('.orange-juice');
                console.log('current',currentTime);
                console.log('timevideo',timeVideo);
                var juicePos = currentTime / timeVideo;
                console.log(juicePos);
                barJuice.style.width = currentTime + '%';
            }
        }, 100);
  }
}

function stopVideo() {
  player.stopVideo();
}

function playVideo() {
  if(ready) player.playVideo();
  else setTimeout(function(){ playVideo() },1000);
}

if($('.video-ju')[0]){
    videoTime();
    rangePlay();
}
