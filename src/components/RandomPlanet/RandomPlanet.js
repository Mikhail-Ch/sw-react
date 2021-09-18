import React from 'react'
import './RandomPlanet.css'
import SwapiService from "../../services/swapi-service";
import Loader from "../Loader";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        errorStatus: false
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onLoadedPlanet = (planet) => {
        this.setState({
            planet,
            loading: false,
        })
    }

    onError = (err) => {
        this.setState({
            errorStatus: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2
        this.swapiService.getPlanet(id)
          .then(this.onLoadedPlanet)
          .catch(this.onError)
    }

    render() {
        const {planet, loading, errorStatus} = this.state

        const spinner = loading ? <Loader/> : null
        const content = !loading && !errorStatus ? <PlanetView planet={planet}/> : null
        const errorMsg = errorStatus ? <ErrorMsg/> : null

        return (
          <div className="random-planet jumbotron rounded">
              {spinner}
              {content}
              {errorMsg}
          </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet

    return (
      <React.Fragment>
          <div className="random-planet__img">
              <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                   alt={name}/>
          </div>
          <div className="random-planet__content">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      <span className="term">Population</span>
                      <span>{population}</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Rotation Period</span>
                      <span>{rotationPeriod}</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Diameter</span>
                      <span>{diameter}</span>
                  </li>
              </ul>
          </div>
      </React.Fragment>
    )
}
