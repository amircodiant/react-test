import React, { Component } from 'react';
import WarningBanner from './WarningBanner';
import NumberList from './NumberList';

const numbers = [1, 2, 3, 4, 5];

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            isToggleOn: true
        }

        this.clickMe = this.clickMe.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() });
    }
    clickMe(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <WarningBanner warn={this.state.isToggleOn} />
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <a href="#" onClick={this.clickMe}>Click Me</a>

                <p>
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                </p>
                <div>
                    <NumberList numbers={numbers} />
                </div>
            </div>
        );
    }
}

export default Clock;