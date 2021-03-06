// App page does both routing and passes state, no need for main.jsx it's overkill for a static page

import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './app.scss';
// import components
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import HomeHero from './components/Heroes/Home/HomeHero';
import MoviesHero from './components/Heroes/Movies/MoviesHero';
import TVshowsHero from './components/Heroes/Shows/ShowsHero';
import MusicHero from './components/Heroes/Music/MusicHero'; 
import NewsHero from './components/Heroes/News/NewsHero';
import AboutHero from './components/Heroes/About/AboutHero';
import HomeDetails from './components/Details/Home/HomeDetails';
import MoviesDetails from './components/Details/Movies/MoviesDetails'; 
import TVshowsDetails from './components/Details/Shows/ShowsDetails';
import MusicDetails from './components/Details/Music/MusicDetails'; 
import NewsDetails from './components/Details/News/NewsDetails';
import AboutDetails from './components/Details/About/AboutDetails';
// import assets
import KideaLogo from './assets/Logo/Logo-kidea.png';

class App extends React.Component  {
  state = {
    siteLogo: KideaLogo,
    video: {
      image: KideaLogo,
      source: 'youtube.com'
    }
  }
  render () {
    return (
      <BrowserRouter>
      <div className="App">
          <Nav logo={this.state.siteLogo} />
          <Route path="/" exact>
            <HomeHero />
          </Route>
          <Route path="/movies" exact>
            <MoviesHero video={this.state.video}/>
          </Route>
          <Route path="/shows" exact>
            <TVshowsHero video={this.state.video} />
          </Route>
          <Route path="/music" exact>
            <MusicHero />
          </Route>
          <Route path="/news" exact>
            <NewsHero video={this.state.video}/>
          </Route>
          <Route path="/about" exact>
            <AboutHero />
          </Route>
        <div className="details">
          <Route path="/login" exact component = {Login}/>
          <Route path="/" exact>
            <HomeDetails />
          </Route>
          <Route path="/movies" exact>
            <MoviesDetails />
          </Route>
          <Route path="/shows" exact>
            <TVshowsDetails />
          </Route>
          <Route path="/music" exact>
            <MusicDetails />
          </Route>
          <Route path="/news" exact>
            <NewsDetails />
          </Route>
          {/* <Route path="/about" exact>
            <AboutDetails />
          </Route> */}
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
