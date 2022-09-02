import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }
  selectPokemon(pokemonId: string) {

    const pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    this.pokemonSelected = pokemon;

  }
}
