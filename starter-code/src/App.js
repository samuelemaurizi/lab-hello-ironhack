import React, { Component } from "react";
import "./App.css";

// //////////////////////////////
// MAIN CONTAINER
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Cards />
      </div>
    );
  }
}

// //////////////////////////////////////////////////
// LANDING
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <MainText />
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
      </div>
    );
  }
}

class MainText extends Component {
  render() {
    return (
      <div className="info">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninka
          Developer.
        </p>
        <button>Awesome!</button>
      </div>
    );
  }
}

// //////////////////////////////////////////////////
// CONTENT
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h2> {props.title} </h2>
      <p> {props.text} </p>
    </div>
  );
}

class Cards extends Component {
  render() {
    return (
      <div className="cards-container">
        <Card
          img="/images/icon1.png"
          title="Declarative"
          text="React makes it painless to create interactive UIs."
        />
        <Card
          img="/images/icon2.png"
          title="Components"
          text="Build encapsulated components that manage their state."
        />
        <Card
          img="/images/icon3.png"
          title="Single-Way"
          text="A set of immutable values are passed to the component's."
        />
        <Card
          className="card"
          img="/images/icon4.png"
          title="JSX"
          text="Satically-typed designed to run on modern browsers."
        />
      </div>
    );
  }
}

export default App;
