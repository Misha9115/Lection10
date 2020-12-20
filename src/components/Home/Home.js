import Photo from './Photo';
import React from 'react';
import getQery from './Reqest.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null
        };
        localStorage.setItem('login', false)
    }
    componentDidMount() {
        const fetchData = async () => {
            const result = await getQery()
            this.setState({
                photo: result.data
            });
        }
        fetchData()
    }
    render() {

        return (
            <div>
                {
                    this.state.photo ? <Photo
                        photo={this.state.photo}
                    /> : null
                }

            </div>
        );
    }
}

