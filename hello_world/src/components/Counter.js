import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return (
            <div>
                <input type="text" readOnly={ true } value={ this.state.counter } size={50} />
                <br />
                <br />
                <button onClick={ (e) => {
                    this.setState({
                        counter: this.state.counter + 1
                    })
                } } >Count Up!</button>
            </div>
        );
    }
}

/**
 * 1. React Component has a in build state object
 * 2. We can declare it inside the constructor
 * 3. We can bind state with components
 */