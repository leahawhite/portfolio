import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Bio from '../Bio/Bio';
import Project from '../Project/Project';
import gotdesk from '../../images/gotdesk.png';
import similar1 from '../../images/similar1.jpg';
import PlacePage from '../../images/PlacePage.jpg';
import NoteView from '../../images/NoteView.jpg';
import Footer from '../Footer/Footer';
import $ from 'jquery';
import './App.css';

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  componentDidMount() {
    const top1 = $('#gradient-container').offset().top;
    const top2 = $('#main').offset().top;
    
    $(document).scroll(function() {
      const scrollPos = $(document).scrollTop();
      if (scrollPos >= top1 && scrollPos >= top2) {
        $('#navbar').css('background-color', '#ffffff');
        $('#logo').css('color', '#595959');
        $('#item-1').css('color', '#595959');
        $('#item-2').css('color', '#595959');
        $('#item-3').css('color', '#595959');
        $('#tog-1').css('background', '#595959');
        $('#tog-2').css('background', '#595959');
        $('#tog-3').css('background', '#595959');
      } else {
        $('#navbar').css('background-color', 'transparent');
        $('#logo').css('color', '#fffff6');
        $('#item-1').css('color', '#fffff6');
        $('#item-2').css('color', '#fffff6');
        $('#item-3').css('color', '#fffff6');
        $('#tog-1').css('background', '#fffff6');
        $('#tog-2').css('background', '#fffff6');
        $('#tog-3').css('background', '#fffff6');
      }
    });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <div id="gradient-container" className="gradient-container">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <header className="hero">
            <div className="inner">
              <h1>Full-stack developer.<span>Where do we go from here?</span></h1>
            </div>
          </header>
        </div>  
        <main id="main">
          <div className="container">
            <Bio />
            <section id="portfolio">
              <Project 
                imageSrc={NoteView}
                imageAlt="Desktop view of the dashboard, featuring notes for what to watch."
                projectTitle="Someday"
                projectSubtitle="Notes App"
                projectDesc="A full-stack app for storing media and culture recommendations and reminders. 
                Built with React, Node.js and PostgreSQL."
                ghLink1="https://github.com/leahawhite/someday"
                demoLink="https://someday.leahawhite.now.sh/"
              >
              </Project>
              <Project
                imageSrc={PlacePage}
                imageAlt="Desktop view of the place page, featuring Crystal Springs Rhododendron Garden."
                projectTitle="Kid-Friendly PDX"
                projectSubtitle="Recommendation App"
                projectDesc="A full-stack review and recommendation guide for kid-friendly places in Portland, Oregon. 
                Built with React, Node.js and PostgreSQL."
                ghLink1="https://github.com/leahawhite/kid-friendly-pdx"
                demoLink="https://kid-friendly-pdx.leahawhite.now.sh/"
              >
              </Project>
              <Project 
                imageSrc={similar1}
                imageAlt="a screenshot of the Next app featuring 'Still Life With a Gilt Cup'"
                projectTitle="Next"
                projectSubtitle="Art Gallery Web App"
                projectDesc="A self-guided art gallery application 
                that lets viewers explore 
                works of art in the public domain. 
                Built with JavaScript and jQuery."
                ghLink1="https://github.com/leahawhite/Next"
                demoLink="https://leahawhite.github.io/Next/"
              >
              </Project>
              <Project
                imageSrc={gotdesk}
                imageAlt="Desktop view of the quiz shows a question and four answer options."
                projectTitle="Game of Thrones Quiz"
                projectSubtitle="Trivia Quiz Web App"
                projectDesc="A trivia game created in anticipation 
                of the series finale.
                Built with JavaScript and jQuery."
                ghLink1="https://github.com/leahawhite/Game-of-Thrones-Quiz"
                demoLink="https://leahawhite.github.io/Game-of-Thrones-Quiz/"
              >
              </Project>
            </section>
          </div>
      </main>
      <Footer />
    </div>
    );
  }
}