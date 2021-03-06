import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn.constructor === Object && Object.keys(props.loggedIn).length !== 0) {
        return <Redirect to="/race" />;
    }

    return (
        <div className="home">
            <h2>Please Login</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({

    ////obj.constructor === Object && check has keys Object.keys(objuser).length!===0
    loggedIn: state.drone.user 
});

export default connect(mapStateToProps)(LandingPage);