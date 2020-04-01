import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form className="Form">
       <legend>Tell us what you did today</legend>
       <label htmlFor='sleep'>How many hours of sleep did you have today?</label>
       <input id='sleep'></input>
       <label htmlFor='exercise'>How many minutes of exercise did you have today?</label>
       <input id='exercise'></input>
       <label htmlFor='meals'>How many meals did you have today?</label>
       <input id='meals'></input>
       <label htmlFor='reading'>How much did you read today?</label>
       <input></input>
      </form>
    );
  }
}