import React, { Component } from 'react';

export default class Time extends Component {
    render() {
        const { date } = this.props;

        const curr_date = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const curr_month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const curr_year = date.getFullYear();

        return (
              <div>
                {curr_date}.{curr_month}.{curr_year}
              </div>
        );
    }
}
