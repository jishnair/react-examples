import React, {Component} from 'react';

class Projectitem extends Component {
    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        );
    }
}

export default Projectitem;
