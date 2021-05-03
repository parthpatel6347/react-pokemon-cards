import React, { Component } from "react";
import "./Pokecard.css";

const pokeImgs_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"; //requires padded ID param to 3 digits

//function for padding number to 3 digits. ('1' becomes '001', '11' becomes '011', '111' stays '111')
const padId = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const imgSrc = `${pokeImgs_API}${padId(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{this.props.name}</h3>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <p className="Pokecard-text">Type: {this.props.type}</p>
        <p className="Pokecard-text">HP: {this.props.hp}</p>
      </div>
    );
  }
}

export default Pokecard;
