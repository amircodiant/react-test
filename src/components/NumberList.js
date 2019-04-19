import React, { Component } from 'react';


class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {numbers: this.props.numbers}

        this.items = this.items.bind(this)
    }

    items(){
        return this.state.numbers.map(number => <li key={number}>{number}</li>)
    }


    render() {
        return (
            <ul>
                {this.items()}
            </ul>
        )
    }

}

export default NumberList;