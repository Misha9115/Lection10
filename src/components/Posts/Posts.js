import React, { Component } from 'react';
import Post from './Post';
//import s from './Navbar.module.css';
//import {Link} from "react-router-dom";

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };

    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        
                        post: result
                    });
                })
    }

    render() {
//console.log(this.state.post)
        return (
            <div>{
                this.state.post?  <Post dataPost={this.state.post}/>:null
                }

            </div>
        );
    }
}

