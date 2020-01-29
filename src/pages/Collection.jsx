import React, { Component } from "react";
import { Route } from "react-router-dom";
import './Collection.css';
import Navbar from "../components/Navbar.jsx"
import AlbumList from "../components/AlbumList.jsx"
import Tracklist from "../components/Tracklist.jsx"


//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {

  render() {
    //let albumUri = encodeURI(this.state.album)
    return (
      <div className="page-wrapper">
        <Navbar />
        <AlbumList />
        <Route path="/collection/:album_name" component={Tracklist} />
      </div>
    );
  }
}
