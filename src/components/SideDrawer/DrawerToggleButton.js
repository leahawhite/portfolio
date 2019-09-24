import React from 'react';
import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div id="tog-1" className="toggle-button__line" />
    <div id="tog-2" className="toggle-button__line" />
    <div id="tog-3" className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;