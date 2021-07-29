import React, { Component } from "react";
//import axios from "axios";

export default class App extends Component {
  componentDidMount() {
    fetch("https://pixabay.com/api/");
  }

  render() {
    return;
  }
}
