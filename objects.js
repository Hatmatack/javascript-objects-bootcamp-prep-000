var playlist = {
  VanHalen: "Jump", 
  PinkFloyd: "The Wall",
  Weezer: "Feels Like Summer"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, PinkFloyd) {
  return delete playlist.PinkFloyd
}