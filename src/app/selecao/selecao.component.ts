import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent  {

  @Input('titulo') titulo!:  string;
  @Input('opcoes') opcoes!:  string[];
  @Input('escolhaAte') escolhaAte!:  number;

  selecteds: string[] = []

  countSelected(value: string) {
    this.selecteds.push(value)

    console.log(this.selecteds)
  }

  showAcai() {


  }
  
  
}
