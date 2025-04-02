import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    console.log("Click");
  }
}
