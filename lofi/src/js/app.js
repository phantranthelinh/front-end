const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const sunMode = $('.js-sun-mode')
const moonMode = $('.js-moon-mode')
const hideOnFullscreen = $$('.js-hide-on-fullscreen')
const btnChangeMode = $('#check')
const box = $('.box')
const ball = $('.ball')
const btnFullScreen = $('#js-full-screen')
const app = $('.app')
//handle change mode 
check.addEventListener('change',function(){
    if(this.checked == true){
        box.setAttribute('style','background-color:rgba(0,0,0,.25);')
        ball.setAttribute('style','transform: translateX(-100%);')
        moonMode.setAttribute('style','opacity: 1')
        sunMode.setAttribute('style','opacity: 0')
      
    }
    if(this.checked == false){
        box.setAttribute('style','background-color:#f3a952);')
        ball.setAttribute('style','transform: translateX(0%);')
        moonMode.setAttribute('style','opacity: 0')
        sunMode.setAttribute('style','opacity: 1')
    }
})
//handle full screen
btnFullScreen.addEventListener('change',function(){
    if(this.checked==true){
      if (app.requestFullscreen) {
        app.requestFullscreen()      
        } 
        else if (app.webkitRequestFullscreen) { /* Safari */
          app.webkitRequestFullscreen()
        } else if (app.msRequestFullscreen) { /* IE11 */
          app.msRequestFullscreen()
        }
      else if(app.fullScreenElement) {
        app.exitFullScreen()
      }
      hideOnFullscreen.forEach(i=> i.style.display = 'none')
    }
    if(this.checked==false){
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      hideOnFullscreen.forEach(i=> i.style.display = 'flex')
    }

})


// const url = "https://sheets.googleapis.com/v4/spreadsheets/1LHdX1CrJQct6f6t1Cx8IxvtdLUjwd5kG0yPH9R0saRY/values/'tracce%20custom'!A2:F100?key=AIzaSyCo3Wls8gIK0QuoUW3LlO4tbZD6DSxqe6g"
const musics = [
  ['./assets/music/chill1.mp3','/assets/music/chill2.mp3','./assets/music/chill3.mp3'],
  ['./assets/music/jazz1.mp3','./assets/music/jazz2.mp3','./assets/music/jazz3.mp3'],
  ['./assets/music/sleep1.mp3','./assets/music/sleep2.mp3','./assets/music/sleep3.mp3'],
]
const playBtn = $('.js-play')
const pauseBtn = $('.js-pause')
const audio = $('.main-audio')
audio.volume = 0.3
function changeToPauseBtn(){
  playBtn.style.display ='none'
  pauseBtn.style.display = 'block'
}
function changeToPlayBtn(){
  playBtn.style.display ='block'
  pauseBtn.style.display = 'none'
}
playBtn.onclick =  function(e){
  e.stopPropagation()
  changeToPauseBtn()
  audio.play()
}
pauseBtn.onclick = function(e){
  changeToPlayBtn()
  audio.pause()
}
const nextBtn = $('.js-next')
const prevBtn = $('.js-prev')
nextBtn.onclick = function(e){
  e.stopPropagation()
  playNextSong()
}
prevBtn.onclick = function(e){
  e.stopPropagation()
  playPrevSong()
}
function playNextSong(){
  let currentSong = musics[0].indexOf(audio.getAttribute('src'))
  if(currentSong !==musics[0].length-1){
    audio.setAttribute('src',musics[0][currentSong+1])
  }
  else{
    audio.setAttribute('src',musics[0][0])
  }
  changeToPauseBtn()
  audio.play()

}
function playPrevSong(){
  let currentSong = musics[0].indexOf(audio.getAttribute('src'))
  if(currentSong !== 0){
    audio.setAttribute('src',musics[0][currentSong-1])
  }
  else{
    audio.setAttribute('src',musics[0][musics[1].length-1])
  }
  changeToPauseBtn()
  audio.play()

}
