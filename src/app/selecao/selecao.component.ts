import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent {
  @Input('titulo') titulo!: string;
  @Input('opcoes') opcoes!: string[];
  @Input('escolhaAte') escolhaAte!: number;

  tamanho: string = '';
  acrescimos: string[] = [];
  _acrescimos: string[] = [];

  @Output() showAcrescimos = new EventEmitter();
  @Output() showTamanho = new EventEmitter();

  countAcrescimos(value: string) {
    this.acrescimos.push(value);
    this.showAcrescimos.emit({ acrescimos: this.acrescimos });
  }

  setTamanho(value: string) {
    this.tamanho = value;
    this.showTamanho.emit({ tamanho: value });
  }
}
