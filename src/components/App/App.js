import React from 'react'
import Header from '../Header'
import RandomPlanet from "../RandomPlanet";
import swapiService from "../../services/swapi-service"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages/";
import {BrowserRouter as Router, Route} from "react-router-dom"

import "./App.css"
import {StarshipDetails} from "../sw-components";

export default class App extends React.Component {

    swapiService = new swapiService()


    render() {
        return (
          <ErrorBoundary>
              <SwapiServiceProvider value={this.swapiService}>
                  <Router>
                      <div className="container">
                          <Header/>
                          <RandomPlanet/>
                          <Route path="/"
                                 exact={true}
                                 render={() => <h2>Welcome to StarDB</h2>} />
                          <Route path="/people/:id?" component={ PeoplePage }/>
                          <Route path="/planets" component={ PlanetsPage }/>
                          <Route path="/starships" exact component={ StarshipsPage }/>
                          <Route path="/starships/:id"
                          render={ ({match})=> {
                              const { id } = match.params
                              return <StarshipDetails itemId={id} />
                          }}/>
                      </div>
                  </Router>
              </SwapiServiceProvider>
          </ErrorBoundary>
        )
    }
}
