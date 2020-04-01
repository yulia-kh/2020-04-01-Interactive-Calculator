import React from 'react';

export default class Navbar extends React.Component {

  render() {
      console.log(this.props.activities)
      const activities = this.props.activities;

    return (
      <div>
        <h1>Look at your day!</h1>
        {activities.sleep != '' && activities ? 
        <ul className='activities'>
          <li className='sleepBasis'>{activities.sleep}</li>
          <li className='exerciseBasis'>{activities.exercise}</li>
          <li className='mealsBasis'>{activities.meals}</li>
          <li className='readingBasis'>{activities.reading}</li>
          <li className='otherBasis'>{activities.other}</li>
        </ul> :
        <div>Submit form to see</div>}
      </div>
    );
  }
}