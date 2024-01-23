import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})
export class IntroPage implements OnInit {

  contentCards: any[] = [
    {
      img: "assets/img/moto1.jfif",
      titulo: "ducati panigale v4",
      contenido: "La motocicleta Ducati Panigale V4 es una Motocicleta SuperDeportiva con un motor V4 de 998cc introducido por Ducati en 2018 como sucesor al motor V-Twin de 1299cc.",
      precio:"$180.000.000",
      alt: "imagen no encotrada",
      estilo: "card1"
    },
    {
      img: "assets/img/moto2.jfif",
      titulo: "ducati panigale ",
      contenido: "La Ducati Panigale es una familia de motocicletas deportivas fabricadas por Ducati desde 2011. La Panigale lleva el nombre de la pequeña ciudad industrial de Borgo Panigale. Todas las motocicletas de esta serie utilizan chasis monocasco. 899 Panigale,",
      precio:"$150.000.000",
      alt: "imagen no encotrada",
      estilo: "card2"
    },
    {
      img: "assets/img/moto3.jfif",
      titulo: "BMW S1000RR",
      contenido: "La BMW S1000RR es una moto deportiva orientada a las carreras fabricada inicialmente por BMW Motorrad para competir en el Campeonato Mundial de Superbikes de 2009, que ahora se encuentra en producción comercial.",
      precio:"$150.000.000",
      alt: "imagen no encotrada",
      estilo: "card3"
    },
  ]

  constructor() {
  }

  ngOnInit() {
    console.log('hola')
  }

}
