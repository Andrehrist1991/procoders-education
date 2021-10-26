// Modules
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

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
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Redirect from='/' to='/login'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
