// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});


app.get('/artists', (req, res) => {
  const allArtists = getAllArtists()
  res.json(allArtists)

});

app.post('/artists', (req, res) => {
 const newArtist =  addArtist(req.body);
  res.status(201);
  //res.set('Content-Type', 'application/json')
  res.json(newArtist)

});

app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist()
  res.json(latestArtist)
});

app.get('/artists/latest/albums', (req, res) => {
  const albumsForLatestArtist = getAlbumsForLatestArtist()
  res.json(albumsForLatestArtist)
});

app.get('/artists/*', (req, res) => {
  const artistId = req.url.split("/")[2]
  res.json(getArtistByArtistId(artistId))

});



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
