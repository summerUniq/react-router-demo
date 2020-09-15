import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({location, isLogin, handleLogin}) => {
    console.log('location: ', location);
    const redirect = location.state.redirect || '/'
    if(isLogin) return <Redirect to={redirect} />
    return (
        <div>
            <p>用户登陆</p>
            <hr/>
            <button onClick={handleLogin}>登陆</button>
        </div>
     );
}
 
export default Login;