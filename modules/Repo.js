import React from 'react';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>{this.props.params.userName}</h1>
        <h1>{this.props.params.repoName}</h1>
      </div>
    );
  }
});
