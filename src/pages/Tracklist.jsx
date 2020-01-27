import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class Tracklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumId: "x",
            trackList: ""
        }
    }


    getTrackList = () => {

        axios.get(
            `${process.env.REACT_APP_API_BASE}/spotify/album/thickfreakness`
            //`https://api.spotify.com/v1/search?q=thickfreakness&type=track&limit=1`

        )
            .then(searchResponse => {
                console.log('>>>>>>', searchResponse)
                this.setState({
                    albumId: searchResponse.data.tracks.items[0].album.id,
                    error: null
                });
            })

            // .then(() => {
            //     axios.get(
            //         //`https://api.spotify.com/v1/albums/${this.state.albumId}/tracks`
            //         `${process.env.REACT_APP_API_BASE}/spotify/album/thickfreakness/`
            //         )
            // })
            // .then(albumId => {
            //     this.setState({
            //         trackList: albumId
            //     })
            // })
            .catch((err) => { console.log("ERROR DURING AXIOS", err) })
    };

    render() {
        console.log("items>>>>>", this.state.albumId)
        return (
            <div>
                <h1>Album ID: {this.state.albumId}</h1>
                <button onClick={this.getTrackList} > SEARCH</button>
            </div>
        )
    }
}
