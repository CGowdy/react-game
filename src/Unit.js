import React, {Component} from 'react';

export default class Unit extends Component{
    constructor(args){
        super(args);
        console.log('constructing unit');
    }

    render() {
        return(
            <p>I'm a unit</p>
        );
    }
}