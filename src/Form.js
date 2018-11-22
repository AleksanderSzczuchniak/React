import React from 'react'

class Form extends React.Component{
    state = {
        text: 'Initial value'
    }

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <input
                    type="text"
                    value={this.state.text}
                    onCharge={(event) => this.setState({ text: event.target.value })}
                />
                <input type="text"/>
                
                />

            </div>
        )
    }
}
export default Form