import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  //Switch,
  Route
  //NavLink
} from "react-router-dom";
import LandingPage from './components/MainPage/LandingPage';
import classes from './App.css';
import About from './components/MainPage/About';
import Education from './components/MainPage/Schooling/Education';
import Aux from './hoc/Auxiliary';
import Picture18 from './assets/img/Picture18.jpg';
import Picture7 from './assets/img/Picture7.jpg'
import PictureGallery from './components/GalleryPage/PictureGallery2';
//import Content from '../src/components/Content'
class App extends Component {

  render() {
    const onUpdate = () => {
      window.scrollTo(0, 0);
    }

    return (
      <Router>
        <div className={classes.App}>
          <Route path="/my-website/" exact render={
            () => {
              return (
                <Aux>
                  <LandingPage

                    styles={{ backgroundImage: `url(${Picture7})` }}
                    firstLine="John Paragas"
                    secondLine="Aspiring web developer">
                    {onUpdate()}
                  </LandingPage>
                  <About></About>
                  <hr className={classes.Divider} />
                  <Education></Education>
                </Aux>);
            }
          } />
          <Route path="/my-website/my-gallery" exact strict render={
            () => {
              return (
                <Aux>



                  <LandingPage
                    styles={{ backgroundImage: `url(${Picture18})` }}
                    firstLine="My favorite shots">
                    {onUpdate()}


                  </LandingPage>
                  <PictureGallery />

                </Aux>
              );
            }
          } />
          <Layout>


          </Layout>


        </div>
      </Router>
    );
  }
}

export default App;
