import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class Tracklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumId: "",
            trackList: ""
        }
    }


    getTrackList = () => {
    
        axios.get(
        //`localhost:3000/spotify/album/${title}`
        `https://api.spotify.com/v1/search?q=${encodeURI(this.state.album)}&type=track&limit=1&offset=20`
        )
        .then(searchResponse => {
        debugger;
        this.setState({
            albumId: searchResponse.data,
            error: null
        });
        })
        .then(() => {
            axios.get(`https://api.spotify.com/v1/albums/${this.state.albumId}/tracks`)
        })
        .then(albumId => {
            this.setState({
                trackList: albumId.data
            })
        })
  };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
