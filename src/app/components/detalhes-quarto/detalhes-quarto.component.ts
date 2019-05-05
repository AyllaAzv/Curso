import { Component, OnInit } from "@angular/core";
import { NavParams, PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-detalhes-quarto",
  templateUrl: "./detalhes-quarto.component.html",
  styleUrls: ["./detalhes-quarto.component.scss"]
})
export class DetalhesQuartoComponent implements OnInit {
  quarto: {};
  constructor(
    private nav: NavParams,
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.quarto = this.nav.get("quarto");
  }

  irParaFormulario() {
    this.router.navigate(["/formulario"]);
    this.close();
  }

  close() {
    this.popoverController.dismiss();
  }
}
