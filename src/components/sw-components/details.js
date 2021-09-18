import React from "react"
import ItemDetails, {Record} from "../ItemDetails";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
          { ({getPerson, getImagePerson}) => {
              return(
                <ItemDetails itemId={itemId}
                             getData={getPerson}
                             getImageUrl={getImagePerson}>
                    <Record label="Gender" field="gender"/>
                    <Record label="Birth Year" field="birthYear"/>
                    <Record label="Eye Color" field="eyeColor"/>
                </ItemDetails>
              )
          } }
      </SwapiServiceConsumer>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
          {
              ({getPlanet, getImagePlanet}) => {
                  return (
                    <ItemDetails itemId={itemId}
                                 getData={getPlanet}
                                 getImageUrl={getImagePlanet}>
                        <Record label="Population" field="population"/>
                        <Record label="Rotation period" field="rotationPeriod"/>
                        <Record label="Diameter" field="diameter"/>
                    </ItemDetails>
                  )
              }
          }
      </SwapiServiceConsumer>
    )
}

const StarshipDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
          {
              ({getStarship, getImageStarship}) => {
                  return (
                    <ItemDetails itemId={itemId}
                                 getData={getStarship}
                                 getImageUrl={getImageStarship}>
                        <Record label="Model" field="model"/>
                        <Record label="Manufacturer" field="manufacturer"/>
                        <Record label="Length" field="length"/>
                        <Record label="Passengers" field="passengers"/>
                    </ItemDetails>
                  )
              }
          }
      </SwapiServiceConsumer>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
