import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teste = "Me conta APP";
  boasvindasmeconta = "Bem vindo(a) ao aplicativo me conta!";
  mensagemEmpresa = "Fique a vontade carregador Yellow, preencha as pesquisas e acompanhe seu progresso.";
  constructor() {}

}
