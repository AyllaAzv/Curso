import { Component, OnInit } from "@angular/core";
import { PopoverController } from '@ionic/angular';
import { DetalhesQuartoComponent } from '../components/detalhes-quarto/detalhes-quarto.component';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  quartos = Array();

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    this.quartos = [
      {
        hotel: "Hotel Pedra dos Ventos",
        localizacao: "Jijoca de Jericoaquara - Ce",
        descricao:
          "Quarto com uma cama de casal e uma de solteiro com vista para o mar.",
        extras: "Café da manhã incluso e frigibar.",
        imagens: [
          "assets/imgs/quarto1imagem1.jpg",
          "assets/imgs/quarto1imagem2.jpg"
        ]
      },
      {
        hotel: "Hotel das Long Beach",
        localizacao: "Canoa Quebrada, Aracati - Ce",
        descricao:
          "Quarto com uma cama de casal.",
        extras: "Café da manhã incluso e tv à cabo.",
        imagens: [
          "assets/imgs/quarto2imagem1.jpg",
          "assets/imgs/quarto2imagem2.jpg"
        ]
      },
      {
        hotel: "Hotel Falésias",
        localizacao: "Praia das Fontes, Beberibe - Ce",
        descricao:
          "Quarto com duas camas de casal.",
        extras: "Café da manhã incluso.",
        imagens: [
          "assets/imgs/quarto3imagem1.jpg",
          "assets/imgs/quarto3imagem2.jpg"
        ]
      },
      {
        hotel: "Hotel Oceani",
        localizacao: "Praia das Dunas, Aquiraz - Ce",
        descricao:
          "Quarto com uma cama de casal e uma de solteiro com vista para o mar.",
        extras: "Café da manhã incluso e tv à cabo.",
        imagens: [
          "assets/imgs/quarto5imagem1.jpg",
          "assets/imgs/quarto4imagem2.jpg"
        ]
      }
    ];
  }

  async presentPopover(ev: any, data) {
    const popover = await this.popoverController.create({
      component: DetalhesQuartoComponent,
      componentProps: {
        quarto: data
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
