import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="#bio">About</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  )

}

export default sideDrawer;