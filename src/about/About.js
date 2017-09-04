import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {getIsActive} from '../shared/nav.helper';
import RouteWithSubRoutes from '../routes/RouteWithSubRoutes';


class About extends Component {

  componentWillMount() {
    let history = this.props.history;

    if( history.location.pathname === '/about' ) {
      history.push( '/about/aboutus' );
    }
  }

  render() {
    const { routes } = this.props;

    return (
        <div className="page flex expand">
          <div className="sidebar flex col">

            {routes.map(
                ( route ) => {
                  return (
                      <NavLink isActive={getIsActive}
                               key={route.path}
                               activeClassName="active"
                               to={route.path}>{route.label}</NavLink>
                  )
                }
            )}

          </div>

          <div className="page flex expand">
            {routes.map( ( route, i ) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ) )}
          </div>

        </div>
    )
  }
}

export default About;