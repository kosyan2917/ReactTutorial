import React from "react";
import './random-planet.css'
import SwapiService from "../../services/swapi-service";
export default class RandomPlanet extends React.Component {
    swapiService = new SwapiService();
    updatePlanet() {
        this.swapiService.getPlanet(Math.floor(Math.random()*5)+3).then((planet) => {
            console.log(planet);
            this.setState({
                name: planet.name,
                climate: planet.climate,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter:planet.diameter
            });
        })
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        name: null,
        climate: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    }
    render() {
        console.log("render happened")
        const {name, climate, population, rotationPeriod, diameter } = this.state;
        return <div className="main">
            <table>
                <thead>
                <tr>
                    <td><img href="#"/></td>
                    <td>
                        <h2>{name}</h2>
                        <div className="chars">
                            <p>Период обращения: {rotationPeriod}</p>
                            <p>Климат: {climate}</p>
                        </div>

                    </td>
                </tr>
                </thead>
            </table>
        </div>;
    }
}
