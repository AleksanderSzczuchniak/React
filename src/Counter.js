import React from 'react'


class Counter extends React.Component {
    state = {
        number: this.props.startValue

    }
    maxHandler = () => {
        if (this.state.number >= this.props.max) return
        this.setState({ number: this.state.number + 1 })
    }
    minHandler = () => {
        if (this.state.number <= this.props.min) return
        this.setState({ number: this.state.number - 1 })

    }


    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.maxHandler}
                >
                    +
                </button>
                <button
                    onClick={this.minHandler}
                >
                    -
                </button>
            </div>
        )
    }
}
Counter.defaultProps = {
    startValue: 0,
    min: -5,
    max: 5
}
export default Counter