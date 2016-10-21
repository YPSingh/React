/**
 * Created by Yashpal on 10/18/2016.
 */

import React, {Component} from 'react' ;
import {connect} from 'react-redux';

class home extends Component {
    render() {

        return (
            <div>
                <p>Home Page</p>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(home);

