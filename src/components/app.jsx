import React, { Component } from 'react';
import AppHeader from './app_header/AppHeader'; 

/**
 * App Class
 */
class App extends Component {

  /**
   * Render component
   */
  render() {
    return (
      <div>
        <AppHeader /> 
        <div className="container">
          <h2>Easy setup for new React projects.</h2>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, 
          egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem 
          lacinia quam venenatis vestibulum.</p>
        </div>
      </div>
    );
  }
}

export default App;
