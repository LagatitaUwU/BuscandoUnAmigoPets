import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalago-amigos',
  templateUrl: './catalago-amigos.component.html',
  styleUrls: ['./catalago-amigos.component.css']
})
export class CatalagoAmigosComponent implements OnInit {
  amigo = [
           {id:1,nombre:'Trucho',foto:'https://vetme.com.mx/wp-content/uploads/2020/01/Untitled-1-25.jpg',numero:'+59 000 000 000'},
           {id:2,nombre:'Manchas',foto:'https://t1.ea.ltmcdn.com/es/posts/0/2/5/16_pastor_leones_24520_15_600.jpg',numero:'+59 000 000 000'},
           {id:3,nombre:'Canelo',foto:'https://as01.epimg.net/diarioas/imagenes/2021/11/07/actualidad/1636307686_778477_1636307902_noticia_normal_recorte1.jpg',numero:'+59 000 000 000'},
           {id:4,nombre:'Patitas',foto:'https://www.srperro.com/media/post/c1742005-de9c-490f-b28a-e08f61ef04ac.600x429.png',numero:'+59 000 000 000'},
           {id:5,nombre:'Ramon',foto:'https://www.diariodesevilla.es/2021/09/01/mascotas/Cosas-sabias-gatos_1606949991_143253883_667x375.jpg',numero:'+59 000 000 000'},
           {id:6,nombre:'Lolo',foto:'https://www.ambientum.com/wp-content/uploads/2020/07/perro-schafer-696x464.jpg',numero:'+59 000 000 000'},
           {id:7,nombre:'Jupi',foto:'https://static.dw.com/image/59796587_401.jpg',numero:'+59 000 000 000'},
           {id:8,nombre:'Brono',foto:'https://static.nationalgeographic.es/files/styles/image_3200/public/01-stray-dogs-nationalgeographic_1927666.jpg?w=1600&h=900',numero:'+59 000 000 000'}
          ];
          id = 0;
          nombre = "";
          foto = "https://img.freepik.com/vector-gratis/fondo-invierno-hojas-pinceles-color-pastel_220290-42.jpg?size=626&ext=jpg";
          numero = "+59 000 000 000";
          descripcion = "";
          informacion = "";

  constructor() { }


  ngOnInit(): void {
  }

  seleciona(id:number):void {
    for(let i = 0;i < this.amigo.length;i++){
      if(id == this.amigo[i].id){
        this.id = this.amigo[i].id;
        this.nombre = this.amigo[i].nombre;
        this.foto = this.amigo[i].foto;
        this.numero = this.amigo[i].numero;
      }
    }
  }

}
