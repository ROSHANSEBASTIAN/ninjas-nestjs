import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja-dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Roshan', weapon: 'Sword' },
    { id: 1, name: 'Jesslin', weapon: 'Spear' },
  ];

  getNinjas(weapon?: 'Sword' | 'Spear') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    console.log('Received id is ', id);
    const selNinja = this.ninjas.find((ninja) => ninja.id === id);
    console.log('Found ninja ', selNinja);
    if (!selNinja) {
      throw new Error('Ninja not found');
    }

    return selNinja;
  }

  addNinja(ninja: CreateNinjaDto) {
    const newNinja = { ...ninja, id: Date.now() };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinja: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinja };
      }

      return ninja;
    });
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const ninjaToBeRemoved = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return ninjaToBeRemoved;
  }
}
