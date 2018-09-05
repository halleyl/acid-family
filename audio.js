let songs = [
  { 
    duration: 32,
    name: "I'm Hepatitis",
    url: "./audio/002.mp3",
    playing: false
  },
  { 
    duration: 24,
    name: "Missing",
    url: "./audio/003.mp3",
    playing: false
  },
  { 
    duration: 44,
    name: "Better for Me", 
    url: "./audio/006.mp3",
    playing: false
  },
  { 
    duration: 64,
    name: "Black Out", 
    url: "./audio/007.mp3",
    playing: false
  },
  { 
    duration: 39,
    name: "I've Got You Babe",
    url: "./audio/008.mp3",
    playing: false
  },
  { 
    duration: 32,
    name: "Bed on Fleas", 
    url: "./audio/009.mp3",
    playing: false
  },
]

// Initialize audio element
var currentURL = document.createElement('audio')
// Init variable for previously played song
var lastX

function playSong(x) {
  // Set variables to the audio track clicked
  currentURL.src = songs[x].url
  var currentSong = songs[x].name
  var playState = songs[x].playing
  var buttonState = document.querySelector('.S'+x)
  var lastButton = document.querySelector('.S'+lastX)
  
  
  // If nothing is playing, play the track that's clicked
  if (!this.playState) {
    this.playState = true
    currentURL.play()
    buttonState.classList.remove('fa-play')
    buttonState.classList.add('fa-pause')
    console.log('Now playing: '+ currentSong)
    console.log(songLength)
    lastX = x
    currentURL.onended = function() {
      buttonState.classList.remove('fa-pause')
      buttonState.classList.add('fa-play')
    }
  } 
  // If something else is playing, stop it and play the new one
    else if (x != lastX) {
    currentURL.pause()
    lastButton.classList.remove('fa-pause')
    lastButton.classList.add('fa-play')
    currentURL.play()
    buttonState.classList.remove('fa-play')
    buttonState.classList.add('fa-pause')
    console.log('Now playing: '+ currentSong)
    lastX = x
    currentURL.onended = function() {
      buttonState.classList.remove('fa-pause')
      buttonState.classList.add('fa-play')
    }
  } 
  // If you click the playing track, pause it
    else if (this.playState) {
    this.playState = false
    currentURL.pause()
    buttonState.classList.remove('fa-pause')
    buttonState.classList.add('fa-play')
    console.log('Paused song: '+ currentSong)
    lastX = x
  }
}