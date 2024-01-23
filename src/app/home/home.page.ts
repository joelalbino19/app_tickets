import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contentCards: any[] = [
    {
      img: "assets/img/moto1.jfif",
      titulo: "App para motos",
      contenido: "Esta es una app para visualizar motos de alto cilindraje",
      precio:"$180.000.000",
      alt: "imagen no encotrada",
      estilo: "card1"
    }
  ]
  constructor() {}

}
