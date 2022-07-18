import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo:string = "yellow"; //o default e amarelo mais pode ser trocado pelo inpult diretamente na view//
  @Input() corDeTexto:string = "white"

  constructor(private elemento:ElementRef) { }
  ngOnInit() {
    this.mudarFundo();  
  }
  private mudarFundo(cor: string = "yellow"){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDeTexto;
    this.elemento.nativeElement.style.fontWeigth = 'bold';
  }
}
