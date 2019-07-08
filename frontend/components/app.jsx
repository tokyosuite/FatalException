import React from 'react'; 

import Splash from './greeting/splash';
import { Route, Switch } from 'react-router-dom'; 

import NavBarContainer from './navbar/navbar_container'; 
import SignUpFormContainer from './sign_up/sign_up_form_container'; 
import SignInFormContainer from './sign_in/sign_in_form_container';
import SignInFormContainerDemo from './sign_in/sign_in_form_container_demo';
import ProfileContainer from './profile/profile_container'; 

import { AuthRoute, ProtectedRoute } from '../util/routeUtil'

const App = () => (
    <div className="app">
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={SignInFormContainer} />
            <AuthRoute exact path="/login/demo" component={SignInFormContainerDemo} />
            <ProtectedRoute exact path="/users/:userName" component={ProfileContainer} />
        </Switch>
    </div>
);

export default App; 