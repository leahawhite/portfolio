import React, { Component } from 'react';
import classnames from 'classnames';
import '../SideDrawer/DrawerToggleButton';
import './Navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

export default class Navbar extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <header id="navbar" className={classnames("navbar", {
        "navbar--hidden": !this.state.visible
      })}>
        <nav className="navbar__navigation">
          <div className="navbar__logo"><a id="logo" href='/'>Leah White</a></div>
          <div className="spacer"/>
          <div className="navbar_navigation_items">
            <ul>
              <li><a id="item-1" className="about" href="#bio">About</a></li>
              <li><a id="item-2" className="" href="#portfolio">Projects</a></li>
              <li><a id="item-3" className="" href="#footer">Contact</a></li>
            </ul>
          </div>
          <div className="navbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    )
  }
}