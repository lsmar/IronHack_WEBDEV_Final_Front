import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt={this.state.name} />
        <p key={this.state.id}>{this.state.name}</p>
      </div>
    )

  }
}

export default Profile;