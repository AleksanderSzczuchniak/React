import React from 'react'


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
