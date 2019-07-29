import React, {Component} from 'react';
import Projectitem from "./Projectitem";

class Projects extends Component {
    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(p => {

                return (
                    <Projectitem key={p.title} project={p}/>
                );


            });
            return (
                <div className="Projects">
                    {projectItems}
                </div>
            );
        }
    }
}

export default Projects;
