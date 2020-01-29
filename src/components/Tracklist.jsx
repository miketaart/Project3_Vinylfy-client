import React, { Component } from 'react';
import axios from "axios";
import '../pages/Collection.css';
//import { Link } from "react-router-dom";

export default class Tracklist extends Component {
    constructor(props) {
        super(props)
        this.getAlbumId = this.getAlbumId.bind(this);
        this.getTrackList = this.getTrackList.bind(this);
        this.getAlbumInfo = this.getAlbumInfo.bind(this);

        this.state = {
            albumId: "",
            trackList: [],
            albumInfo: {},
            albumTitle: "",
            albumCover: "",
        }
    }

    getAlbumId = () => {
       
        axios.get(
            `${process.env.REACT_APP_API_BASE}/spotify/album/${this.props.match.params.album_name}`
            //`https://api.spotify.com/v1/search?q=thickfreakness&type=track`

        )
            .then(response => {
                this.setState({
                    albumId: response.data.tracks.items[0].album.id,
                    albumInfo: response.data.tracks.items,
                    albumTitle: response.data.tracks.items[0].album.name,
                    artist: response.data.tracks.items[0].artists[0].name,
                    albumCover: response.data.tracks.items[0].album.images[1].url,
                    error: null
                });
                console.log(this.state.albumTitle)
            })
            .catch((err) => { console.log("ERROR DURING AXIOS", err) })
    };

    getTrackList = () => {
        axios.get(
            `${process.env.REACT_APP_API_BASE}/spotify/album/tracklist/0GJH6shkenNdqkpGdsY8aa`
            //${this.state.albumId}
        )
            .then(response => {

                this.setState({
                    trackList: response.data.items,
                    error: null
                });
            })
            .catch((err) => { console.log("ERROR DURING AXIOS", err) })
    }

    getAlbumInfo() {
        
        this.getAlbumId();
        this.getTrackList();
        console.log("TEST",this.state.albumId)
    }

    componentDidMount() {
        this.getAlbumInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.album_name !== prevProps.match.params.album_name) {
            this.getAlbumInfo();
        }
    }

    render() {
        
        return (
            <div className="tracklist">
                <div className="release" >

                    <div>
                        <img src={this.state.albumCover} />
                        <h2>{this.state.albumTitle}</h2>
                        <h3>{this.state.artist}</h3>

                        {this.state.trackList.map((track, index) =>
                            <p key={index}>{index + 1}. {track.name}</p>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}
