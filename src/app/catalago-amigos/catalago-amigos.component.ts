import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalago-amigos',
  templateUrl: './catalago-amigos.component.html',
  styleUrls: ['./catalago-amigos.component.css']
})
export class CatalagoAmigosComponent implements OnInit {
  amigos = [
    {id:1,historia:'',mascota:'perros',sexo:'Macho',color:'cafe',edad:1,tamanio:'Mediano',nombre:'Trucho',foto:'https://vetme.com.mx/wp-content/uploads/2020/01/Untitled-1-25.jpg',numero:'+59 000 000 000'},
    {id:2,historia:'',mascota:'perros',sexo:'Macho',color:'negro con blanco',edad:1,tamanio:'Grande',nombre:'Manchas',foto:'https://t1.ea.ltmcdn.com/es/posts/0/2/5/16_pastor_leones_24520_15_600.jpg',numero:'+59 000 000 000'},
    {id:3,historia:'',mascota:'perros',sexo:'Macho',color:'cafe',edad:1,tamanio:'Grande',nombre:'Canelo',foto:'https://as01.epimg.net/diarioas/imagenes/2021/11/07/actualidad/1636307686_778477_1636307902_noticia_normal_recorte1.jpg',numero:'+59 000 000 000'},
    {id:4,historia:'Perdio sus patitas',mascota:'perros',sexo:'Hembra',color:'cafe',edad:1,tamanio:'Pequeño',nombre:'Patitas',foto:'https://www.srperro.com/media/post/c1742005-de9c-490f-b28a-e08f61ef04ac.600x429.png',numero:'+59 000 000 000'},
    {id:5,historia:'',mascota:'gatos',sexo:'Macho',color:'negro con blanco',edad:1,tamanio:'Mediano',nombre:'Ramon',foto:'https://www.diariodesevilla.es/2021/09/01/mascotas/Cosas-sabias-gatos_1606949991_143253883_667x375.jpg',numero:'+59 000 000 000'},
    {id:6,historia:'',mascota:'perros',sexo:'Macho',color:'negro con cafe',edad:1,tamanio:'Mediano',nombre:'Lolo',foto:'https://www.ambientum.com/wp-content/uploads/2020/07/perro-schafer-696x464.jpg',numero:'+59 000 000 000'},
    {id:7,historia:'',mascota:'gatos',sexo:'Hembra',color:'naranja',edad:1,tamanio:'Mediano',nombre:'Jupi',foto:'https://static.dw.com/image/59796587_401.jpg',numero:'+59 000 000 000'},
    {id:8,historia:'',mascota:'perros',sexo:'Macho',color:'negro con cafe',edad:1,tamanio:'Mediano',nombre:'Brono',foto:'https://static.nationalgeographic.es/files/styles/image_3200/public/01-stray-dogs-nationalgeographic_1927666.jpg?w=1600&h=900',numero:'+59 000 000 000'},
    {id:9,historia:'',mascota:'perros',sexo:'Macho',color:'blanco',edad:1,tamanio:'Pequeño',nombre:'conito',foto:'https://mxcity.mx/wp-content/uploads/2017/08/1-9.jpg',numero:'+59 000 000 000'}
   ];
buscados = [{id:1,historia:'',mascota:'perros',sexo:'',color:'cafe',edad:1,tamanio:'',nombre:'Trucho',foto:'https://vetme.com.mx/wp-content/uploads/2020/01/Untitled-1-25.jpg',numero:'+59 000 000 000'}]; 
colores = ['Todos'];
mascotas = ['Todas'];
sexo = ['Todos','Hembra','Macho'];
tamanios = ['Todos','Grande','Mediano','Pequeño'];
amigo = {id:1,historia:'',mascota:'',sexo:'',color:'',edad:1,tamanio:'',nombre:'Trucho',foto:'https://vetme.com.mx/wp-content/uploads/2020/01/Untitled-1-25.jpg',numero:'+59 000 000 000'};
filtro = {mascota:'', color:'',sexo:'', edadMin:0, edadMax:20, tamanio:''};
  constructor() {
    this.carga();
    
   }


  ngOnInit(): void {
  }

  seleciona(id:number):void {
    for(let i = 0;i < this.amigos.length;i++){
      if(id == this.amigos[i].id){
        this.amigo = this.amigos[i];
      }
    }
  }

  carga():void {
    for(let i = 0;i < this.amigos.length;i++){
      if(!this.existeColor(this.amigos[i].color)){
        this.colores.push(this.amigos[i].color);
      }
      if(!this.existeMascota(this.amigos[i].mascota)){
        this.mascotas.push(this.amigos[i].mascota);
      }      
    }
    
    this.buscaFiltro();
  }

  selecionaColor(color:string):void{
    this.filtro.color = color;
    this.buscaFiltro();
  }
  selecionaMascota(mascota:string):void{
    this.filtro.mascota = mascota;
    this.buscaFiltro();
  }
  selecionaSexo(sexo:string):void{
    this.filtro.sexo = sexo;
    this.buscaFiltro();
  }
  selecionaTamanio(tamanio:string):void{
    this.filtro.tamanio = tamanio;
    this.buscaFiltro();
  }

  buscaFiltro():void{
    console.log("-");
    this.buscados.splice(0,this.buscados.length);
    for(let i = 0;i < this.amigos.length;i++){
      if(this.amigos[i].mascota == this.filtro.mascota || this.filtro.mascota == 'Todas' || this.filtro.mascota == ''){
        if(this.amigos[i].color == this.filtro.color || this.filtro.color == 'Todos' || this.filtro.color == ''){
          if(this.amigos[i].sexo == this.filtro.sexo || this.filtro.sexo == 'Todos' || this.filtro.sexo == ''){
            if(this.amigos[i].tamanio == this.filtro.tamanio || this.filtro.tamanio == 'Todos' || this.filtro.tamanio == ''){
              if(this.amigo.edad >= this.filtro.edadMin && this.amigo.edad <= this.filtro.edadMax){
                this.buscados.push(this.amigos[i]);
              }
              
            }
            
          }
          
        }
      }
      
    }
  }

  existeColor(color:string):boolean {
    for(let i = 0;i < this.colores.length;i++){
      if(color==this.colores[i]){
        return true;
      }
    }
    return false;
  }
  existeMascota(mascota:string):boolean {
    for(let i = 0;i < this.mascotas.length;i++){
      if(mascota==this.mascotas[i]){
        return true;
      }
    }
    return false;
  }



}
