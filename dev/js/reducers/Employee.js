import React from 'react';

export default function employee(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}
