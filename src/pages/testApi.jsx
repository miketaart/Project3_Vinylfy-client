import React, { Component } from 'react'

export default class testApi extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testApi")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
            <div>
                <p className="App-intro">;{this.state.apiResponse}</p>
            </div>
        )
    }
}
