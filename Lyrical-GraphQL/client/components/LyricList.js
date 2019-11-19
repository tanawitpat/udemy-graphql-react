import React, { Component } from 'react'

class LyricList extends Component {
    renderLyrics() {
        return this.props.lyrics.map(({ id, content }) => {
            return (
                <li key={id}>{content}</li>
            )
        })
    }
    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

export default LyricList
