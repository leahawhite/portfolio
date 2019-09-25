import React from 'react';
import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span id="tog-1" className="toggle-button__line" />
    <span id="tog-2" className="toggle-button__line" />
    <span id="tog-3" className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;