/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Weather() =>
(
	fetch('https://weatherapp.eficode.fi/api/forecast')
  .then(function(response) {
    return response.json();
  })
  .then(function(Weather) {
    console.log(JSON.stringify(Weather));
  });
);

class App extends Component {
 render() {
  return (
    <Weather />
   );
  }
}


/****** CODE FOR WEATHER APP STARTS HERE ******/



/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
