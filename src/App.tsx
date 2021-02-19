import React from 'react';
import { styled } from './stitches.config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './Pages/Home';

// Styles
var AppContainer = styled('div', {
	background: '$black',
	height: '100%',
	width: '100%',
});

// Component
function App() {
    return (
        <AppContainer className="app">
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/about">

                    </Route>
                    <Route path="/projects">

                    </Route>
                </Switch>
            </Router>
        </AppContainer>
    );
}

export default App;
