/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Heroes } from '../interfaces/Heroes';

@Injectable({
  providedIn: 'root',
})
export class ServicesHeroesService {
  private heroes: Heroes[] = [
    {
      idHeroe: '1',
      foto: 'https://depor.com/resizer/LCIVDXDyfD9qQFZmD8nFYPDKNMQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SWEI5ZNN3ZGYNNGOBTTQL6GUII.jpg',
      nombre: 'Clark Kent',
      alias: 'Superman',
      fechaNacimiento: new Date('1938-04-14'),
      nacionalidad: 'Estadounidense',
      residencia: 'Metrópolis',
      poderes: ['Super Fuerza', 'Volar', 'Rayos X'],
      nivel: 5,
    },
    {
      idHeroe: '2',
      foto: 'https://as01.epimg.net/meristation/imagenes/2021/07/30/noticias/1627638168_875906_1627638200_noticia_normal.jpg',
      nombre: 'Barry Allen',
      alias: 'Flash',
      fechaNacimiento: new Date('1989-03-14'),
      nacionalidad: 'Estadounidense',
      residencia: 'Central City',
      poderes: [
        'Mover, pensar y reaccionar a velocidad luz',
        'Romper la barrera del sonido',
        'Super velocidad',
      ],
      nivel: 4,
    },
    {
      idHeroe: '3',
      foto: 'https://www.limajiron.com/wp-content/uploads/2021/12/Spider-Man.jpg',
      nombre: 'Peter Parker',
      alias: 'Spiderman',
      fechaNacimiento: new Date('2001-08-10'),
      nacionalidad: 'Estadounidense',
      residencia: 'Metrópolis',
      poderes: [
        'Fuerza, velocidad',
        'Durabilidad',
        'Agilidad',
        'Sentido arácnido',
        'Reflejos',
        'Equilibrio y resistencia sobrehumanos',
      ],
      nivel: 5,
    },
    {
      idHeroe: '4',
      foto: 'https://as01.epimg.net/meristation/imagenes/2019/10/08/noticias/1570522585_909312_1570522675_noticia_normal.jpg',
      nombre: 'Robert Bruce Banner',
      alias: 'Hulk',
      fechaNacimiento: new Date('1969-12-18'),
      nacionalidad: 'Estadounidense',
      residencia: 'Augusta Hogan',
      poderes: [
        'Enorme fuerza y vigor superhumanos',
        'Reisitencia a las heridas',
        'Habilidad de saltar varios kilómetros de un solo impulso',
      ],
      nivel: 3,
    },
    {
      idHeroe: '5',
      foto: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/01/batman-michael-keaton.jpg?fit=1200%2C945&ssl=1',
      nombre: 'Bruce Wayne',
      alias: 'Batman',
      fechaNacimiento: new Date('1915-04-17'),
      nacionalidad: 'Estadounidense',
      residencia: 'Gotham City',
      poderes: ['Fuerza', 'Inteligencia', 'Armamento'],
      nivel: 4,
    },
  ];

  constructor() {}

  getHeroes(): Heroes[] {
    return this.heroes;
  }

  getHeroesByCodigo(codigo: string) {
    return this.heroes.find((item) => item.idHeroe === codigo);
  }

  addHeroe(data: Heroes) {
    const poder = [];
    const date = new Date(this.transformDate(data.fechaNacimiento));
    poder.push(data.poderes);
    this.heroes.push({
      idHeroe: this.heroes.length + 1 + '',
      foto: data.foto,
      nombre: data.nombre,
      alias: data.alias,
      fechaNacimiento: date,
      nacionalidad: data.nacionalidad,
      residencia: data.residencia,
      poderes: poder,
      nivel: data.nivel,
    });
  }

  updateHeroe(data: Heroes[]) {
    for (let index = 0; index < this.heroes.length; index++) {
      if (this.heroes[index].idHeroe === data[0].idHeroe) {
        this.heroes.splice(index, 1, data[0]);
      }
    }
  }

  deleteHeroe(id: string) {
    this.heroes = this.heroes.filter((item) => item.idHeroe !== id);
  }

  addPoder(id: string, poder: string) {
    for (let index = 0; index < this.heroes.length; index++) {
      if (this.heroes[index].idHeroe === id) {
        this.heroes[index].poderes.push(poder);
      }
    }
  }

  updatePoder(id: string, index: number, poder: string) {
    const heroe = [];
    heroe.push(this.getHeroesByCodigo(id));
    heroe[0].poderes.splice(index, 1, poder);
  }

  transformDate(date: Date) {
    const dateString = date.toString();
    const dateFormat = dateString.replace(/(\d+[-])(\d+[-])/, '$2$1');
    const newDate = new Date(dateFormat);
    return newDate;
  }
}
