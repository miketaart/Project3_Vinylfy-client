import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./List.css";

//GET MY COLLECTION FROM DISCOGS
export default class List extends Component {
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
      albumCover: ""
    };
  }

  getCollection = () => {
    axios
      .get(
        `https://api.discogs.com/users/${this.state.username}/collection/folders/0/releases`
      ) //username moet dynamisch
      .then(response => {
        debugger;
        this.setState({
          collection: response.data.releases,
          album: response.data.releases[0].basic_information.title,
          artist: response.data.releases[0].basic_information.artists[0].name,
          year: response.data.releases[0].basic_information.year,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  };

  getVinylCover = title => {
    axios.get(`localhost:3000/spotify/album/covers/${title}`).then(response => {
      debugger;
      this.setState({
        albumInfo: response.data.tracks.items,
        albumCover: response.data.tracks.items[0].album.images[0].url,

        error: null
      });
    });
  };

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
    this.getVinylCover();
  }

  render() {
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

        <div className="album">
          {this.state.collection.map((album, index) => {
            return (
              <div className="info" key={index}>
                <img src="../images/LP_vinyl3.png" alt="lp" />

                <div className="">
                  <h3>
                    Album: {album.basic_information.title} (
                    {album.basic_information.year})
                  </h3>
                  <p>Artist: {album.basic_information.artists[0].name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Link to={"/"}>Back to home</Link>
      </div>
    );
  }
}
