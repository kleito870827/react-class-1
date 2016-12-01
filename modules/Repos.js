import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';


export default React.createClass({
  render(){
    return (
      <div>
          <h1>Repos</h1>
          <ul>
            <li><NavLink to='/repos/caleo/my-repo'>Caleo Repo</NavLink></li>
            <li><NavLink to='/repos/facebook/react'>Facebook React</NavLink></li>
            </ul>
            {this.props.children}
        </div>
    );
  }
});
