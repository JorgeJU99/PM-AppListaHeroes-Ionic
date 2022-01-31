import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesHeroesService } from '../../services/services-heroes.service';
import { Heroes } from '../../interfaces/Heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
})
export class HeroesPage implements OnInit {
  heroes: Heroes[];

  constructor(
    private router: Router,
    private servicesHeroesService: ServicesHeroesService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.servicesHeroesService.getHeroes();
    console.log(this.heroes);
  }

  ionViewWillEnter() {
    this.getHeroes();
  }

  addHeroe() {
    this.router.navigate(['/add-heroe']);
  }
}
