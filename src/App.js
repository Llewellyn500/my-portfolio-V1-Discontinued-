import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "./App.css";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/about_me'>
          <Navbar />
          <AboutMe />
        </Route>

        <Route path='/projects'>
          <Navbar />
          <Projects />
        </Route>

        <Route path="/contact_me">
          <Navbar />
          <ContactMe />
        </Route>
        
        <Route path="/">
      <Navbar />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}
