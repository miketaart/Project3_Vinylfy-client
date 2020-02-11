import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {getUser} from "../utils/auth";
import '../pages/Collection.css';


//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {
    constructor(props) {
        super(props);

        this.getCollection = this.getCollection.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

        this.state = {
            collection: [],
            username: "",
            basicInfo:{},
            header: "",
            search: ""
        };
    }


    getCollection = () => {
        axios
            .get(
                `${process.env.REACT_APP_API_BASE}/discogs/collection/user/${this.state.username}`
            )
            .then(response => {
                this.setState({
                    collection: response.data.releases,
                    header: "My vinyl collection",
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
            username: e.target.value.replace(/[^A-Z0-9]/ig, "")
        });
    }

    sortByTitle = () => {
        this.setState({
            collection: this.state.collection.sort(function(a, b) {
            return a.basic_information.title.localeCompare(b.basic_information.title);
            })
        });
    };

    sortByArtist = () => {
        this.setState({
            collection: this.state.collection.sort(function(a, b) {
            return a.basic_information.artists[0].name.localeCompare(b.basic_information.artists[0].name);
            })
        });
    };

    updateSearch(e){
        this.setState({
          search: e.target.value
        })
      }

    render() {
        let user = getUser();
        return (

            <div className="collection-wrapper">
                <div className="intro">
                    <h1>Hi, {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!</h1>
                    <h1>Import a vinyl collection and start listening to your favourites tunes, or your friends’. </h1>

                    <div className="discogs-input">
                        <input
                            name="username"
                            type="search"
                            pattern="[^'\x22]+"
                            title="Invalid input"
                            placeholder="Search by Discogs username"
                            onChange={this.handleInputChange}
                        />
                        <button className="search-button" onClick={this.getCollection}>Search</button>
                    </div>

                </div>



                <h1 className="title">{this.state.header}</h1>

                <div className="release-output-wrapper">
                    <div className="release">
                    <input className="input" type="text" placeholder="Filter by artist or release" value={this.state.search} onChange={this.updateSearch}/>
                        <div className="sort">
                            <button onClick={this.sortByTitle} className="sort-button">Sort by album</button>
                            <button onClick={this.sortByArtist} className="sort-button sort-button-active">Sort by artist</button>
                        </div>

                            {this.state.collection
                            .filter((release)=> 
                                release.basic_information.artists[0].name.toLowerCase()
                                .includes(this.state.search.toLowerCase()) || 
                                release.basic_information.title.toLowerCase()
                                .includes(this.state.search.toLowerCase()))
                            .map((release, index) => {

                            return (
                                <div className="release-details" key={index}>
                                    <Link to={`/collection/${release.basic_information.title}`}>
                                        <img className="cover" src={release.basic_information.cover_image} alt="lp" />
                                    </Link>

                                    <div className="">
                                    <Link to={`/collection/${release.basic_information.title}`}>
                                        <h4>
                                            {release.basic_information.title}
                                        </h4>
                                        </Link>
                                        <Link to={`/collection/${release.basic_information.title}`}>
                                        <p>{release.basic_information.artists[0].name}</p>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}