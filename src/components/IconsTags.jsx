import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class IconsTags extends Component {
  constructor  (props){
    super(props)
  
  this.state = {log: []}
  }
  

  render() {
    const { active } = this.props

    return (
      <Button toggle onClick={this.props.method} value={this.props.value}>
          <img src={this.props.image_src} className={this.props.active} />
           <p>{this.props.text}</p>
      </Button>
    )
  }
}

export default IconsTags