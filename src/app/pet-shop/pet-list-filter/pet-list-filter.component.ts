import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Pet} from "../models/pet.model";
import {VegetarianFilterPipe} from "./vegetarian-filter.pipe";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-pet-list-filter',
  templateUrl: './pet-list-filter.component.html',
  styleUrls: ['./pet-list-filter.component.scss'],
  providers: [
    VegetarianFilterPipe
  ]
})
export class PetListFilterComponent implements OnInit {
  @Output() onPetsChosen = new EventEmitter<Pet[]>();

  pets: Pet[];
  selectedPet: Pet;
  isVegetarianOnly = false;

  constructor(
    private vegetarianFilterPipe: VegetarianFilterPipe,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.storageService.getPetsObservable().subscribe((pets) => {
      this.pets = pets;
    });
  }

  selectPet() {
    this.onPetsChosen.emit([this.selectedPet]);
  }

  vegetarianToggled() {
    if (this.selectedPet) {
      if (this.isVegetarianOnly && !this.selectedPet.isVegetarian) {
        this.selectedPet = null;
        this.updatePets();
      }
    } else {
      this.updatePets();
    }
  }

  private updatePets() {
    const newPets = this.vegetarianFilterPipe.transform(this.pets, this.isVegetarianOnly);

    this.onPetsChosen.emit(newPets);
  }
}
