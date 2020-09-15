import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
    console.log('PrivateRoute', rest);
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login", state: { redirect: props.location.pathname } }} />)
            }
        />
    );
}

export default PrivateRoute;

