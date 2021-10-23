// Modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import LoginPage from "./Pages/LoginPage";
import NewsPage from "./Pages/NewsPage";
import ProfilePage from "./Pages/ProfilePage";


// Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
