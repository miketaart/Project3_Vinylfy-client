import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../pages/Collection.css';
import {getUser} from "../utils/auth";


//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {
    constructor(props) {
        super(props);

        this.getCollection = this.getCollection.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.sortByName = this.sortByName.bind(this);

        this.state = {
            collection: [],
            username: "",
            //basic_information:[],
            header: ""
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
                    //basic_information: response.data.releases.basic_information,
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
            username: e.target.value.replace(/[^\w\s]/gi, "")
        });
    }

    // sortByName = () => {
    //     this.setState({
    //         basic_information: this.state.basic_information.sort(function(a, b) {
    //         return a.title.localeCompare(b.title);
    //         })
    //     });
    // };


    render() {
        let user = getUser();
        return (

            <div className="collection-wrapper">
                <div className="intro">
                    <h1>Hi, {user.username}!</h1>
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
                        <button onClick={this.getCollection}>Search</button>
                    </div>

                </div>



                <h1 className="title">{this.state.header}</h1>

                <div className="release-output-wrapper">
                    <div className="release">
                    {/* <button onClick={this.sortByName}>a-z</button> */}
                        {this.state.collection.map((release, index) => {

                            return (
                                <div className="release-details" key={index}>
                                    <Link to={`/collection/${release.basic_information.title}`}>
                                        <img className="cover" src={release.basic_information.cover_image} alt="lp" />
                                    </Link>

                                    <div className="">
                                        <h4>
                                            {release.basic_information.title}
                                        </h4>
                                        <p>{release.basic_information.artists[0].name}</p>
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