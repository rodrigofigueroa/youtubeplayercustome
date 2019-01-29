
 var idDailyM = 'x71g0lf';
 var player = DM.player(document.getElementById('video-yt'), {
    video: idDailyM,
    width: '100%',
    height: '100%',
    params: {
      autoplay: false,
      controls: false,
      'queue-autoplay-next': false,
      'queue-enable': false,
      'sharing-enable': false,
      'ui-logo': false,
      'ui-start-screen-info': false
    }
  });

  $('.button-video i').click(function(){
    var clases = document.querySelector('.button-video').children;
    var clas = clases[0].classList    
    if(clas[1] == 'fa-play-circle'){
      clases[0].className = 'far fa-pause-circle';
      player.play();
    }else if(clas[1] == 'fa-pause-circle'){
      clases[0].className = 'far fa-play-circle';
      player.pause();
    }
    //player.togglePlay();
  console.log(player.duration);
  });


function togglePlayPause(){
  var video = document.getElementById('video-yt'),
  // var video = document.querySelector('.video-ju'),
      button = document.querySelector('.button-video').children;        
      // console.log(video.paused);
      var videoDuration = video.duration;
      $("#range-video").attr('max',videoDuration);
      if(video.paused){
          button[0].className = 'far fa-pause-circle'; 
          video.play();
      }else{
          button[0].className = 'far fa-play-circle'; 
          video.pause();
      }

      
}

videoTime();
rangePlay();
function videoTime(){
  var video = document.getElementById('video-yt');
  // var video = document.querySelector('.video-ju');
  video.addEventListener('timeupdate', function(){
      var barJuice = document.querySelector('.orange-juice');
      var juicePos = video.currentTime /video.duration;
     var button = document.querySelector('.button-video').children;        
      barJuice.style.width = juicePos * 100 + '%';
      if(video.currentTime == player.duration){
          button[0].className = 'far fa-play-circle';
          player.load(idDailyM, {
            autoplay: false,
            start: 0
          });
      }
  });

}

function rangePlay(){
  var video = document.getElementById('video-yt');
  // var video = document.querySelector('.video-ju');
  var range = document.querySelector('#range-video');

  range.addEventListener('change', function(){
      var seekto = video.duration * (range.value/100);
      video.currentTime = seekto;
      video.seek(seekto);
  });
  video.addEventListener('timeupdate', function(){
      var nt = video.currentTime * (100 / video.duration);
      range.value = parseInt(nt);
      console.log(video.currentTime);      
      console.log(video.duration);      
      console.log(nt);
      // console.log(range.value);
      if(video.paused){ 
          $('#range-video').attr('value',nt);
          console.log('stop');
      }else if(video.currentTime == player.duration){
          $('#range-video').attr('value',nt);
          console.log('stop');
          player.load(idDailyM, {
            autoplay: false,
            start: 0
          });
      }
      window.onbeforeunload = function(e){
          $('#range-video').attr('value',nt);
              return confirm("Confirm refresh");

          };
  });
}
