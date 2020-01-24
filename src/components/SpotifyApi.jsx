import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default class SpotifyApi extends Component {


    getCollection = () => {
        axios
          .get(
            `https://api.discogs.com/users/${this.state.username}/collection/folders/0/releases`
          ) //username moet dynamisch
          .then(response => {
            this.setState({
              collection: response.data.releases,
              error: null
            });
          })
          .catch(error => {
            this.setState({
              error: error
            });
          });
      };

    render() {
        
        return (
            <div>
                
            </div>
        )
    }
}