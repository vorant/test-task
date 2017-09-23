import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../models/pet.model";

@Pipe({
  name: 'vegetarianFilter'
})
export class VegetarianFilterPipe implements PipeTransform {

  transform(pets: Pet[], args?: boolean): Pet[] {
    return !args ? pets : pets.filter(pet => pet.isVegetarian);
  }
}
