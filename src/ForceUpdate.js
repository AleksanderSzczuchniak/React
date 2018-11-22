import React from 'react'

// DO NOT DO CODE LIKE THIS
// render should depends only form props and state

class ForceUpdate extends React.Component {
  componentDidMount(){
    setInterval(
      () => this.forceUpdate() ,
      1000
    )
  }

  render(){
    return(
      <div>
        {String(new Date())}
      </div>
    )
  }
}
export default ForceUpdate
