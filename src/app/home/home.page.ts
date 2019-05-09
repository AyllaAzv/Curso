import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { DetalhesQuartoComponent } from "../components/detalhes-quarto/detalhes-quarto.component";
import { QuartoService } from "../services/quarto.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  quartos: any;

  constructor(
    private popoverController: PopoverController,
    private quartoService: QuartoService
  ) {}

  ngOnInit() {
    this.quartoService.listaTodos().subscribe(res => {
      this.quartos = res;
      console.log(res);
    });
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
