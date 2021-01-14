import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Privateroute = ({ component : Component, isAuthenticated, ...rest}) =>(
    <Route {...rest} render={props =>(
        isAuthenticated
        ?
        (<Component {...props}/>)
        :
        (<Redirect to ={{pathname: "/", state: { from: props.location}}} />)
    )}/>
);

export default Privateroute;