import React, {Component} from 'react';
import Projects from './components/Projects'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: 'Business',
                    category: 'web design'
                },
                {
                    title: 'Oil',
                    category: 'drilling'
                },
                {
                    title: 'Oiiil',
                    category: 'drilliiing'
                }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                My app
                <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
