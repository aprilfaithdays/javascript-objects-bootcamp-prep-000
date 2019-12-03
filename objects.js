var playlist = {
  Drake: "Views"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artistName]: songTitle} )
}