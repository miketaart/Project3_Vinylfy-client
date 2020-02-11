import React, { Component } from 'react';
import axios from "axios";
import ReactPlayer from 'react-player';
import '../pages/Collection.css';

export default class Tracklist extends Component {
    constructor(props) {
        super(props)
        this.getAlbumInfoWithTrackList = this.getAlbumInfoWithTrackList.bind(this);

        this.state = {
            music: {
                albumId: "",
                trackList: [],
                albumInfo: {},
                albumTitle: "",
                albumCover: "",
                play: "false"
            }
        }
    }

    getAlbumInfoWithTrackList() {
        var music = {};
        axios.get(`${process.env.REACT_APP_API_BASE}/spotify/album/${this.props.match.params.album_name}`)
        .then(({ data }) => {
            music = {
                ...data.albums,
                albumCover: data.albums.items[0].images[1].url,
                albumTitle: data.albums.items[0].name,
                artist: data.albums.items[0].artists[0].name
            };

            return axios.get(`${process.env.REACT_APP_API_BASE}/spotify/album/tracklist/${music.items[0].id}`)
            })
        .then(({ data }) => {
            music = { ...music, trackList: data.items }
            this.setState({ music })
        })
        .catch((err) => { console.log("ERROR DURING AXIOS", err) })
    }


    componentDidMount() {
        this.getAlbumInfoWithTrackList();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.album_name !== prevProps.match.params.album_name) {
            this.getAlbumInfoWithTrackList();
        }
    }


    render() {
        return (
            <div className="tracklist-wrapper">
                <div className="tracklist" >
                    <div className="tracklist-header">
                        <div className="tracklist-img">
                            <img src={this.state.music.albumCover} />
                        </div>
                        <div className="tracklist-title">
                            <h2>{this.state.music.albumTitle}</h2>
                            <h3>{this.state.music.artist}</h3>
                        </div>
                    </div>

                    <div className="tracklist-output">
                        {this.state.music.trackList.map((track, index) =>
                        
                            <p key={index}
                                onClick={this.onclickPlay}>
                            {track.track_number}. {track.name}
                            <ReactPlayer 
                            url={track.preview_url}  
                            controls={true}
                            width="144px" 
                            height="16px"/>
                            </p>
                            
                            
                        
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
