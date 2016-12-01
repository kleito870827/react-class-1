import React from 'react';
import  {Link, IndexLink } from 'react-router';
import NavLink from './NavLink';



export default React.createClass({
  render(){
    return(
      <div>
      <h1>FVI</h1>
      <ul role="nav">
      <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/repos'>Repos</NavLink></li>
      </ul>

        {this.props.children}

      </div>
    );
  }
});
