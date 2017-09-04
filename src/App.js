import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header/Header';
import routes from './routes/routes';
import RouteWithSubRoutes from './routes/RouteWithSubRoutes';

import './App.css';


const App = () => (
    <Router>
      <div>
        <Header/>

        <div className="main-app flex">
          {routes.map( ( route, i ) => (
              <RouteWithSubRoutes key={i} {...route}/>
          ) )}
        </div>

      </div>
    </Router>
);

export default App;
