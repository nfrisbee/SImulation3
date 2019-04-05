import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';


export default (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/new" component={Form} />
        <Route exact path="/post:postid" component={Post} />
    </Switch>
)
