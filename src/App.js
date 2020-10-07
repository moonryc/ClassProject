import React from 'react';
import './App.css';

import ChatBot from './components/ChatBot.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import Other from './pages/Other';
import SqrtCalc from './pages/SqrtCalc';
import PopUps from './pages/PopUps';
import Game from "./pages/Game";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#304ffe",
      dark: "#0026ca",
      light: "#7a7cff"
    },
    secondary: {
      main: "#212121",
      dark: "#000000",
      light: "#484848"
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Game">
              <Game />
            </Route>
            <Route path="/PopUps">
              <PopUps />
            </Route>
            <Route path="/other">
              <Other />
            </Route>
            <Route path="/sqrtcalc">
              <SqrtCalc />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <ChatBot>
        </ChatBot>
      </div>
    </ThemeProvider>
  );
}

export default App;
