import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Collection.css";

//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.getCollection = this.getCollection.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      //collection: {},
      collection: [],
      album: "",
      artist: "",
      username: "",
      albumCover: "",
      year: ""
    };
  }

  getCollection = () => {
    axios
      .get(
        `https://localhost:3000/discogs/user/${this.state.username}`
        //`https://api.discogs.com/users/${this.state.username}/collection/folders/0/releases`
      ) 
      .then(response => {
        
        console.log("response of: ", response.data.releases);
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

  /*getVinylCover = title => {
    axios.get(`localhost:3000/spotify/album/covers/${title}`).then(response => {
      debugger;
      this.setState({
        albumInfo: response.data.tracks.items,
        albumCover: response.data.tracks.items[0].album.images[0].url,

        error: null
      });
    });
  };*/

  componentDidMount() {
    this.getCollection();
  }

  handleInputChange(e) {
    // let usernameCopy = this.state.username;
    // usernameCopy = e.target.value;
    let albumCover = this.state.albumCover;
    console.log(albumCover);
    this.setState({
      username: e.target.value
    });
  }

  clickHandler() {
    this.getCollection();
    //this.getVinylCover();
  }

  render() {
    let albumUri = encodeURI(this.state.album)
    return (
      <div className="">
        <div>
          <div className="">
            <input
              className="lala"
              name="username"
              type="text"
              placeholder="Your Discogs username"
              onChange={this.handleInputChange}
            />
            <button onClick={this.clickHandler}>Search!</button>
          </div>
        </div>

        {this.state.collection.length === 0 && <h1>Loading...</h1>}

        <h1 className="title">My vinyl collection</h1>

        <div className="release">
          {this.state.collection.map((release, index) => {
            //let albumUri = encodeURI(release.basic_information.title)
            return (
              <div className="info" key={index}>
                <Link to={encodeURIComponent(release.basic_information.title)}><img src="../images/LP_vinyl3.png" alt="lp" /></Link>

                <div className="">
                  <h3>
                    Album: {release.basic_information.title} ({release.basic_information.year})
                  </h3>
                  <p>Artist: {release.basic_information.artists[0].name}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}
