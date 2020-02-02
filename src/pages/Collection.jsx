import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import './Collection.css';
import Navbar from "../components/Navbar.jsx"
import AlbumList from "../components/AlbumList.jsx"
import Tracklist from "../components/Tracklist.jsx"
import {getUser} from "../utils/auth.jsx"
import Home from "../pages/Home"



//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {

  render() {
   let user = getUser()
    return (
      <Fragment>
        {user ?
          <div className="page-wrapper">
            <Navbar className="navFullWidth" />
            <AlbumList />
            <Route path="/collection/:album_name" component={Tracklist} />
          </div>
        :
        
        <Redirect to="/auth/login" />
        
        }
      </Fragment>
      
    );
  }
}
