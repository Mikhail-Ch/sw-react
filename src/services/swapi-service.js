export default class SwapiService {

    _apiBase = `https://swapi.dev/api`;
    _imgBase = `https://starwars-visualguide.com/assets/img`

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`)
        if (!response.ok) {
            throw new Error(`Could not fetch. Status ${response.status}. ${response.statusText}`)
        }
        return await response.json()
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }

     getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }

    getImagePerson = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(el => this._transformPlanet(el))
    }

    getImagePlanet = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship)
    }

    getImageStarship = ({id}) => {
        return  `${this._imgBase}/starships/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet['rotation_period'],
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person['birth_year'],
            eyeColor: person['eye_color']
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship['cost_in_credits'],
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship['cargo_capacity']
        }
    }
}
