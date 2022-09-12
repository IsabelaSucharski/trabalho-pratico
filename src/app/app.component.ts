import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trabalho-pratico';

  showPedido: boolean = false;
  _tamanho: string = '';
  _acrescimos: string[] = [];

  setAcrescimo(e: any) {
    this._acrescimos = e.acrescimos;
  }

  setTamanho(e: any) {
    this._tamanho = e.tamanho;
  }

  showAcai() {
    this.showPedido = !this.showPedido;
  }
}
