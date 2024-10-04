import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})


export class DbzService {

  public characters: Character []=[{


    id:uuid(),
    name: 'krilin',
    power: 1000


    },{
      id:uuid(),
    name: 'goku',
    power: 90000


    },{
    id:uuid(),
    name: 'vegeta',
    power: 7000

    }

    ];

    addCharacter(character: Character):void{

    const newCharacter:Character ={id:uuid(),...character}



    this.characters.push(character);

    }

    // onDeleteCharacter(index:number):void{

    // this.characters.splice(index,1);


    // }


    deletedCharacterById(id:string){

      this.characters =this.characters.filter(character=> character.id !==id);
    }



}
