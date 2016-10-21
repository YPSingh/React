import React from 'react';
import Employee from '../containers/employee'
import Department from '../containers/department'
import NavBar from '../containers/navBar'

require('../../styles/styles.css');

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="left w-70">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;