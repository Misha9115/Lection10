import React, { Component } from 'react';
import User from './User';
import getQery from './Reqest.js';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };

    }

    componentDidMount() {
        const fetchData = async () => {
            const result = await getQery()
            this.setState({
                userData: result.data
            });
        }
        fetchData()
    }
    render() {

        return (
            <div>
                {
                    this.state.userData ? <User dataU={this.state.userData} /> : null
                }
            </div>
        );
    }
}

