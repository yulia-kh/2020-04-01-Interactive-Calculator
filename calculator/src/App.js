import React from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
