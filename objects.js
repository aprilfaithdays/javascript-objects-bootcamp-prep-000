var playlist = {
  Drake: "Views",
  Logic: "Under Pressure"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, {playlist[artistName]:songTitle})
}