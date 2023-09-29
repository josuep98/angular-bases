import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  /*Se recibe todo donde se instancia al componente */
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // deleteCharacterById(index: number): void {
  //   //TODO: Emitir el Id del personaje
  //   console.log({ index });
  //   this.onDelete.emit(index);
  // }

  deleteCharacterById(id?: string): void {
    console.log({ id });
    if (!id)
      return;
    this.onDelete.emit(id);
  }

}
