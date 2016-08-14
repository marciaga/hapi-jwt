import React, { Component, PropTypes } from 'react'

export default class Login extends Component {
    handleClick(event) {
        const username = this.refs.username
        const password = this.refs.password
        const creds = { username: username.value.trim(), password: password.value.trim() }
        // this.props.onLoginClick(creds)
    }

    render() {
        const { errorMessage } = this.props

        return (
            <div>
                <input type='text' ref='username' placeholder='Username'/>
                <input type='password' ref='password' placeholder='Password'/>
                <button onClick={(event) => this.handleClick(event)}>
                Login
                </button>

                {errorMessage &&
                  <p>{errorMessage}</p>
                }
            </div>
        )
    }

}

Login.propTypes = {
  errorMessage: PropTypes.string
};
