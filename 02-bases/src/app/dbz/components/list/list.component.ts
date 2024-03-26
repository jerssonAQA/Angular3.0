import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  onDeleteCharacter:EventEmitter <Number> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:100
  }
  ]



  onDelete(index:Number):void{
    this.onDeleteCharacter.emit(index);
    console.log({index});
  }
}
