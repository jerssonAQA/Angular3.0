import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = 'ironman';
  public age: number=35;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name}-${this.age}`
  }

  changeHero():void{
    // throw 'Metodo no implementado'
     this.name="Spiderman";
  }
  changeAge():void{
    this.age=22;
  }
  resetForm():void{
    this.name='ironman';
    this.age=45;
  }

}
