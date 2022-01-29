import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ServicesHeroesService } from '../../services/services-heroes.service';
import { Heroes } from '../../interfaces/Heroes';

export class Heroe {
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
  selector: 'app-update-heroe',
  templateUrl: './update-heroe.component.html',
})
export class UpdateHeroeComponent implements OnInit {
  @Input() idHeroe: string;
  heroe = new Heroe();
  dataHeroes: Heroes[] = [];
  fecha = '';
  heroeById: Heroes;
  poderes = [];

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private servicesHeroesService: ServicesHeroesService
  ) {}

  ngOnInit() {
    this.getHeroeByCodigo(this.idHeroe);
  }

  getHeroeByCodigo(id) {
    this.heroeById = this.servicesHeroesService.getHeroesByCodigo(id);
    this.heroe.foto = this.heroeById.foto;
    this.heroe.nombre = this.heroeById.nombre;
    this.heroe.alias = this.heroeById.alias;
    this.heroe.fechaNacimiento = this.heroeById.fechaNacimiento;
    this.heroe.nacionalidad = this.heroeById.nacionalidad;
    this.heroe.residencia = this.heroeById.residencia;
    this.heroe.nivel = this.heroeById.nivel;
  }

  getHeroe(id) {
    return this.servicesHeroesService.getHeroesByCodigo(id);
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  updateHeroe(data) {
    const dataHeroe = [];
    dataHeroe.push(this.getHeroe(this.idHeroe));
    for (let index = 0; index < dataHeroe[0].poderes.length; index++) {
      this.poderes.push(dataHeroe[0].poderes[index]);
    }
    this.dataHeroes.push({
      idHeroe: this.idHeroe,
      foto: data.value.foto,
      nombre: data.value.nombre,
      alias: data.value.alias,
      fechaNacimiento: this.servicesHeroesService.transformDate(
        data.value.fechaNacimiento
      ),
      nacionalidad: data.value.nacionalidad,
      residencia: data.value.residencia,
      poderes: this.poderes,
      nivel: data.value.nivel,
    });
    this.servicesHeroesService.updateHeroe(this.dataHeroes);
    this.dismissModal();
  }

  async alertUpdate(data) {
    const alert = await this.alertController.create({
      header: 'Modificar héroe',
      message: 'Desea modificar el héroe?',
      buttons: [
        {
          text: 'Modificar',
          handler: () => {
            this.updateHeroe(data);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }
}
