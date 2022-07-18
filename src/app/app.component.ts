import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome ="Cássio Vinicius";
  text ="";

  pessoas = [
    {
      nome: "cassio",
      sobrenome: "Vinicius"
    },
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "João",
      sobrenome: "Pereira"
    }
  ];

  constructor (){

  }
  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() =>{
      this.count ++;
      if(this.count === 10){
        clearInterval(interval)
      }
    },1000)
  }

  clicou (nome:string) {
    console.log('clicou em mim',nome);
  }
}
