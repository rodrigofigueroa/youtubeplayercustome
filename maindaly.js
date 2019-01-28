
 var player = DM.player(document.getElementById('video-yt'), {
    video: 'x2axjp4',
    width: '100%',
    height: '100%',
    params: {
      autoplay: false,
      mute: true,
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
    
    console.log(player.seek(30));
  });
