let songs = [
  { 
    name: "I'm Hepatitis",
    url: "./audio/002.mp3" 
  },
  { 
    name: "Missing",
    url: "./audio/003.mp3" 
  },
  { 
    name: "Better for Me", 
    url: "./audio/006.mp3" 
  },
  { 
    name: "Black Out", 
    url: "./audio/007.mp3" 
  },
  { 
    name: "I've Got You Babe",
    url: "./audio/008.mp3" 
  },
  { 
    name: "Bed on Fleas", 
    url: "./audio/009.mp3" 
  },
]

function playSong(x) {
  // Set variables to the audio track clicked
  var currentURL = new Audio(songs[x].url)
  var currentSong = songs[x].name
  
// TODO:
  // if song is not playing:
      // play it
      // change button to 'pause'
  // if song is playing:
      // pause it
      //change button to 'play'
  // when new song is played, pause any other songs
      // do this with classes maybe?
  
  
     
  // Log current song to console
  console.log('Now playing: '+ currentSong)
  
  currentURL.play()
  
}