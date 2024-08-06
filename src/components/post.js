import React, { Component } from 'react';

export default class Post extends Component {



    render() {
        return (
            <li className="recent-post">
                <div className="recent-post__title">
                    {this.props.title}
                </div>
                <div className="recent-post__topics">
                    {this.props.body.slice(0, 10)}
                </div>
            </li>
        )
    }
}
