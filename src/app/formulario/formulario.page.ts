import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { ReservaService } from "../services/reserva.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.page.html",
  styleUrls: ["./formulario.page.scss"]
})
export class FormularioPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.criaForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.reservaService.create(this.form.value).subscribe(
        sucess => {
          this.presentToast("Reserva efetuada com sucesso!");
          this.router.navigate(["/home"]);
        },
        error => {
          this.presentToast("Erro ao efetuar reserva!");
          this.form.reset();
        }
      );
    } else {
      this.presentToast("Preencha os campos corretamente!");
    }
  }

  criaForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(6)]],
      telefone: [null, [Validators.required]]
    });
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}
