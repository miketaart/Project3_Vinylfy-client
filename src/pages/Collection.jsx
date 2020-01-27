import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Collection.css';
import Navbar from "../components/Navbar.jsx"

//GET MY COLLECTION FROM DISCOGS --> TESTTESTTEST
export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.getCollection = this.getCollection.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      //collection: {},
      collection: [],
      username: "",
      album: "",
      artist: "",
      albumCover: "",
      year: ""
    };
  }

  getCollection = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}/discogs/user/${this.state.username}`
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

  handleInputChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  clickHandler() {
    this.getCollection();
  }

  render() {
    let albumUri = encodeURI(this.state.album)
    return (
      <div className="page-wrapper">
        <Navbar />
        <div className="collection-wrapper">
          <div className="intro">
            <h1>Hi, miketaart!</h1>
            <h1>Import a vinyl collection and start listening to your favourites tunes, or your friends’. </h1>

            <div className="discogs-input">
              <input
                name="username"
                type="text"
                placeholder="Search by Discogs username"
                onChange={this.handleInputChange}
              />
              <button onClick={this.clickHandler}>Search</button>
            </div>

          </div>

        

          <h1 className="title">My vinyl collection</h1>

          <div className="release-output-wrapper">
            <div className="release">
              {this.state.collection.map((release, index) => {
                //let albumUri = encodeURI(release.basic_information.title)
                return (
                  <div className="info" key={index}>
                    <Link to={encodeURIComponent(release.basic_information.title)}><img className="covers" src={release.basic_information.cover_image} alt="lp" /></Link>

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
        </div>
      </div>
    );
  }
}
