import React, { Component } from "react";
import logo from "../../assets/logo.svg";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "green",
          height: 300,
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            flexDirection: "column",
            flex: 1
          }}
        />
        <div
          style={{
            backgroundColor: "magenta",
            flexDirection: "column",
            flex: 1
          }}
        />

        <div
          style={{
            backgroundColor: "purple",
            flexDirection: "column",
            flex: 1
          }}
        />
        <div
          style={{
            backgroundColor: "blue",
            flexDirection: "column",
            flex: 1
          }}
        />
        <div
          style={{
            backgroundColor: "magenta",
            flexDirection: "column",
            flex: 1
          }}
        />

        <div
          style={{
            backgroundColor: "purple",
            flexDirection: "column",
            flex: 1
          }}
        />
      </div>
    );
  }
}

export default App;
