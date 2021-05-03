import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { pokeData } from "./Pokedata";

var pokeDB;
pokeDB = pokeData.pokemon.map((p) => ({
  id: p.NUMBER,
  name: p.NAME,
  type: p.TYPE1,
  hp: p.HP,
}));

const populateHand = (hand) => {
  while (hand.length <= 3) {
    let randIndex = Math.floor(Math.random() * pokeDB.length);
    hand.push(pokeDB[randIndex]);
  }
};

class Pokegame extends Component {
  render() {
    let pokedex1 = [];
    let pokedex2 = [];
    populateHand(pokedex1);
    populateHand(pokedex2);
    console.log(pokedex1, pokedex2);

    let hp1 = pokedex1.reduce((hp, pokemon) => hp + pokemon.hp, 0);
    let hp2 = pokedex2.reduce((hp, pokemon) => hp + pokemon.hp, 0);

    return (
      <div>
        <Pokedex pokemon={pokedex1} hp={hp1} isWinner={hp1 > hp2} />
        <Pokedex pokemon={pokedex2} hp={hp2} isWinner={hp2 > hp1} />
      </div>
    );
  }
}

export default Pokegame;
