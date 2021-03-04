import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com';
  animacao: boolean = true;
  urlImagem: string = 'https://avatarfiles.alphacoders.com/209/209674.jpg';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20,
  };

  nomeAnime: string = 'Sword Art Online';
  valorInicial: number = 10;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getValor() {
    return 1;
  }

  getCurtirAnimacao() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
