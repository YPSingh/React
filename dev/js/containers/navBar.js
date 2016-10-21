import React, {Component} from 'react' ;
import {Link} from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li><link to="" activeClassName="active"></link></li>
                    <li><Link  to="/home" activeClassName="active">Home</Link></li>
                    <li><Link  to="/employee" activeClassName="active">Employee</Link></li>
                    <li><Link  to="/department" activeClassName="active">Department</Link></li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default NavBar;
