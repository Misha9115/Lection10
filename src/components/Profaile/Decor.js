import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Profaile from './Profaile.js'

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };

    }

    render() {
        const login = localStorage.getItem('login')

        if (login === "false") {

            return <Redirect to='/login' />
        }

        return (

            <div>
                <Profaile />
            </div>
        );
    }


}


