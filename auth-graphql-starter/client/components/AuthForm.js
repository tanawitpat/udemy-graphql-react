import React, { Component } from 'react'

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }

    onSubmit(event) {
        event.preventDefault()

        const { email, password } = this.state
        this.props.onSubmit({ email, password })
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s6">
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}                        
                        />
                    </div>
                    <div className="errors">
                        { this.props.errors.map(error => <div>{error}</div>) }
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm
