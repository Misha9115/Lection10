import React, { Component } from 'react';
import List from './List';
import getQery from './DataF'
//import s from './Navbar.module.css';
//import {Link} from "react-router-dom";

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            affairs: null
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }
    componentDidMount() {
        const fetchData = async () => {
            const result = await getQery()
            this.setState({
                affairs: result.data
            });
        }
        fetchData()
    }
    handleClick() {
        this.setState({ flag: 0 })
    }
    handleClick1() {
        this.setState({ flag: 1 })
    }
    handleClick2() {
        this.setState({ flag: 2 })
    }
    render() {

        return (
            <div>
         
                {
                    this.state.affairs ? <List 
                    dataPost={this.state.affairs} 
                    flag={this.state.flag}
                    all={this.handleClick} 
                    tr={this.handleClick1}
                    fl={this.handleClick2} /> : null
                }

            </div>
        );
    }
}

