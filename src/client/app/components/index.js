import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: true,
    errorMessage: ''
  }
};

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
        <div>
            <Login dispatch={ dispatch } errorMessage={ errorMessage } />
        </div>
    )
  }
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps)(App);
