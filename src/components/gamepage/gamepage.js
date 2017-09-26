import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TheGameCon from './../../containers/thegamecon';


class GamePage extends Component {

  render() {
    
    return (
      <div className="container">
        <div className="row justify-content-center">

          <h1 className="gameHeader mt-3 mb-3">
              Welcome to Simple Virus War
          </h1>

          <p>
              See the 
              <Link to="/Users"> Usage/Rules </Link>
              page for more information on the rules of the game,
              and the options for programs. But basically, this is about a small
              number of programs competing for memory. Programs can 
              occupy memory or simply clean it out. And of course, programs do
              get terminated when their memory is cleaned out or otherwise
              occupied.
          </p>
          
        </div>

        <hr></hr>

        <div className="row">
          <TheGameCon />
        </div>

        <hr></hr>

        <div className="row">
          <p>
            You can also throw your own programs into the fray. The 
            <Link to="/Developers"> Developers </Link> 
            page explains how to provide a REST based web service that can act as a 
            player in this game.
          </p>
        </div>


      </div>
    );

  }
}

export default GamePage;