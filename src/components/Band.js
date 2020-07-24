import React, { Component } from 'react';

class Band extends Component {

  render() {
    const id = this.props.band.id
    return(
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
