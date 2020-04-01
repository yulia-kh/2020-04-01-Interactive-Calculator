import React from 'react';
import Activities from './Activities';

export default class Form extends React.Component {
  state = {
    sleep: '',
    exercise: '',
    meals: '',
    reading: '',
    other: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    
    this.setState({
      sleep: this.state.sleep,
      exercise: this.state.exercise,
      meals: this.state.meals,
      reading: this.state.reading,
      other: this.state.other
    })

  }

  render() {
    return (
      <div>
      <form className="Form" onSubmit={this.handleSubmit}>
       <legend>Tell us what you did today</legend>
       <label htmlFor='sleep'>How many hours of sleep did you have today?</label>
       <input type='text' id='sleep' name='sleep' required onChange={this.handleOnChange} value={this.state.sleep}></input>
       <label htmlFor='exercise'>How many minutes of exercise did you have today?</label>
       <input type='text' id='exercise' name='exercise' required onChange={this.handleOnChange} value={this.state.exercise}></input>
       <label htmlFor='meals'>How much time in minutes you spent eating today?</label>
       <input type='text' id='meals' name='meals' required onChange={this.handleOnChange} value={this.state.meals}></input>
       <label htmlFor='reading'>How much time in minutes did you read today?</label>
       <input type='text' id='reading' name='reading' required onChange={this.handleOnChange} value={this.state.reading}></input>
       <label htmlFor='other'>How much time left untracked?</label>
       <input type='text' id='other' name='other' required onChange={this.handleOnChange} value={this.state.other}></input>
       <button type='submit'>Submit answers</button>
      </form>
      <Activities activities={this.state} />
      </div>
    );
  }
}