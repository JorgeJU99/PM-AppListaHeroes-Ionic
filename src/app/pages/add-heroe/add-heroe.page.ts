import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesHeroesService } from '../../services/services-heroes.service';

export class Heroe {
  public idHeroe: string;
  public foto: string;
  public nombre: string;
  public alias: string;
  public fechaNacimiento: Date;
  public nacionalidad: string;
  public residencia: string;
  public poderes: string[];
  public nivel: number;
}

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.page.html',
})
export class AddHeroePage implements OnInit {
  heroe = new Heroe();
  fecha = '';

  constructor(
    private servicesHeroesService: ServicesHeroesService,
    private router: Router
  ) {}

  ngOnInit() {}

  addHeroe(data) {
    this.servicesHeroesService.addHeroe(data.value);
    this.router.navigate(['/heroes']);
  }
}
