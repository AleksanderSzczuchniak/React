import React from 'react'
class UsersEmail extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false

    }
    componentDidMount() {
        fetch(`https://randomuser.me/api?results=${this.props.numberOfResults || 5}`)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results
            }))
    }

    render() {
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map(user => (
                        <div
                            key={user.email}
                        >
                            {user.email}
                        </div>
                    ))

                }
            </div>
        )
    }

}

export default UsersEmail