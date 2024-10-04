import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

 @Input()
public characterList: Character[]=[{
  name: 'Trunks',
  power: 50000

}]





@Output()
public onDeleted:EventEmitter<string> = new EventEmitter();



onDeleteCharacter(id?:string):void{

// TODO:Emitir el Id del personaje;
if(!id) return;



console.log({id})





this.onDeleted.emit(id);


}



}
