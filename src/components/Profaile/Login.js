import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
        this.handleChangeL = this.handleChangeL.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeL(event) {
        this.setState({
            login: event.target.value,
        });
    }
    handleChangeP(event) {
        this.setState({
            password: event.target.value,
        });
    }
    handleSubmit(event) {

        if (this.state.password === 'admin' && this.state.login === 'admin') {
            localStorage.setItem('login', true)
            return <Redirect to='/profile' />

        }
        event.preventDefault();

    }

    render() {
        const lg = localStorage.getItem('login')
        return (
            <div>
                <form >

                    <input type='text' value={this.state.login} onChange={this.handleChangeL} />
                    <input type='text' value={this.state.password} onChange={this.handleChangeP} />



                    <button onClick={this.handleSubmit} >Submit!</button>
                </form>
                {lg === "true" && <Redirect to='/profile' />}
            </div>
        );
    }
}