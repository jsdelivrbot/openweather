import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    if (!name) { return };
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp => temp - 273));
    const { lon, lat } = cityData.city.coord;
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="blue" units="C" /></td>
        <td><Chart data={humidity} color="red" units="%" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
      </tr>
    )
  }
  render() {
    console.log('this.props.weather: ', this.props.weather)

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (HpA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
