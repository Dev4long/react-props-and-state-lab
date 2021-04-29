import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div Pet={this.props.Pet}className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  }
}

export default PetBrowser
// {this.props.pets}