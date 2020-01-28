import axios from "axios";

export const getCollection = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}/discogs/collection/user/${this.state.username}`
      )
      .then(response => {

        this.setState({
          collection: response.data.releases,
          //album: response.data.releases.basic_information.title,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const getAlbumId = () => {

axios.get(
    `${process.env.REACT_APP_API_BASE}/spotify/album/thickfreakness`
    //`https://api.spotify.com/v1/search?q=thickfreakness&type=track`

)
    .then(response => {
        this.setState({
            albumId: response.data.tracks.items[0].album.id,
            albumInfo: response.data.tracks.items,
            albumTitle: response.data.tracks.items[0].name,
            artist: response.data.tracks.items[0].artists[0].name,
            albumCover: response.data.tracks.items[0].album.images[1].url,
            error: null
        });
    })
    .catch((err) => { console.log("ERROR DURING AXIOS", err) })
};

export const getTrackList = () => {
axios.get(
    `${process.env.REACT_APP_API_BASE}/spotify/album/tracklist/0GJH6shkenNdqkpGdsY8aa`
)
    .then(response => {

        this.setState({
            trackList: response.data.items,
            error: null
        });
    })
    .catch((err) => { console.log("ERROR DURING AXIOS", err) })
}