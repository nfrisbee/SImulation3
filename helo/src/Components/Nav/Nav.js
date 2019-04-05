import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props){
    super();

    }


    render() { 
        return(
        <div>
            { this.props.location.pathname === '/' ? null : <div/> }
                <Link to="/dashboard"><button className="home">Home</button></Link>
                <Link to="/post:postid"><button className="new post">New Post</button></Link>
                <Link to="/auth"><button className="logout">Logout</button></Link>
        </div>
        )
    }
}

export default withRouter(Nav);