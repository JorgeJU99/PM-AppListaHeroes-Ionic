import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesHeroesService } from '../../services/services-heroes.service';
import { Heroes } from '../../interfaces/Heroes';
import { UpdateHeroeComponent } from '../../components/update-heroe/update-heroe.component';
import { UpdatePoderComponent } from '../../components/update-poder/update-poder.component';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.page.html',
})
export class DetalleHeroePage implements OnInit {
  heroe: Heroes;
  poder = '';

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private servicesHeroesService: ServicesHeroesService
  ) {}

  ngOnInit() {
    this.getHeroeByCodigo();
  }

  getHeroeByCodigo() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.heroe = this.servicesHeroesService.getHeroesByCodigo(id);
    });
  }

  async updateHeroe() {
    const modal = await this.modalController.create({
      component: UpdateHeroeComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        idHeroe: this.heroe.idHeroe,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  deleteHeroe() {
    this.servicesHeroesService.deleteHeroe(this.heroe.idHeroe);
    this.router.navigate(['/heroes']);
  }

  async alertDelete() {
    const alert = await this.alertController.create({
      header: 'Eliminar héroe',
      message: 'Desea eliminar el héroe?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteHeroe();
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }

  addPoder(data) {
    this.servicesHeroesService.addPoder(this.heroe.idHeroe, data.value.poder);
    this.poder = '';
  }

  async updatePoder(id: number, poder: string) {
    const modal = await this.modalController.create({
      component: UpdatePoderComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        index: id,
        poderes: poder,
        idHeroe: this.heroe.idHeroe,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.getHeroeByCodigo();
  }
}
