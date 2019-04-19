import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: '',
            textValue:'Please write an essay about your favorite DOM element.',
            selectValue:'coconut'
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeInput(event) {
        this.setState({ inputValue: event.target.value.toUpperCase() });
    }
    handleChangeText(event) {
        this.setState({ textValue: event.target.value });
    }
    handleChangeSelect(event) {
        this.setState({ selectValue: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.inputValue );
        console.log(this.state.textValue);
        console.log(this.state.selectValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>    
                    <label>
                        Name:
                        <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput} />
                    </label>
                </div>

                <div>
                    <label>
                        Essay:
                        <textarea value={this.state.textValue} onChange={this.handleChangeText} />
                    </label>
                </div>

                <div>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.selectValue} onChange={this.handleChangeSelect}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default NameForm;