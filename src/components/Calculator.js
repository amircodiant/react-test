import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const toCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};
const tryConvert = function (temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { scale } = this.props;
    const { temperature } = this.props;
    if (scale === 'c' && temperature >= 100) {
      return (
        <p>
[
          {scale}
] The water would boil.
        </p>
      );
    }
    if (scale === 'f' && temperature >= 212) {
      return (
        <p>
[
          {scale}
] The water would boil.
        </p>
      );
    }
    return (
      <p>
[
        {scale}
] The water would not boil.
      </p>
    );
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const { temperature } = this.props;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>
          Enter temperature in
          {scaleNames[scale]}
:
        </legend>
        <input value={temperature} onChange={this.handleChange} />

        <BoilingVerdict temperature={parseFloat(temperature)} scale={scale} />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { scale } = this.state;
    const { temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

export default Calculator;
