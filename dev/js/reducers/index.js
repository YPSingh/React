/**
 * Created by Yashpal on 10/20/2016.
 */

import {combineReducers} from 'redux';
import employee from './Employee'
import department from './Department'


const allReducers = combineReducers(
    {
        employee,
        department
    });

export default  allReducers;
