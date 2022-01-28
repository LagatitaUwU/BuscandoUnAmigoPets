import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalago-amigos',
  templateUrl: './catalago-amigos.component.html',
  styleUrls: ['./catalago-amigos.component.css']
})
export class CatalagoAmigosComponent implements OnInit {
  amigo = [{id:0,nombre:'Manchas',foto:'https://t1.ea.ltmcdn.com/es/posts/0/2/5/16_pastor_leones_24520_15_600.jpg',numero:'+59 000 000 000'}];
  constructor() { }

  ngOnInit(): void {
  }

}
