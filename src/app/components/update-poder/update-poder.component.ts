import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ServicesHeroesService } from '../../services/services-heroes.service';

@Component({
  selector: 'app-update-poder',
  templateUrl: './update-poder.component.html',
})
export class UpdatePoderComponent implements OnInit {
  @Input() index: number;
  @Input() poderes: string;
  @Input() idHeroe: string;
  poder = '';

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private servicesHeroesService: ServicesHeroesService
  ) {}

  ngOnInit() {
    this.getPoder();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  getPoder() {
    this.poder = this.poderes;
  }

  updatePoder(data) {
    this.servicesHeroesService.updatePoder(
      this.idHeroe,
      this.index,
      data.value.poder
    );
    this.dismissModal();
  }

  async alertUpdate(data) {
    const alert = await this.alertController.create({
      header: 'Editar poder',
      message: 'Desea editar el poder?',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.updatePoder(data);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }
}
