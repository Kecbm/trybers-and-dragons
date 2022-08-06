import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public energyType: EnergyType;
  protected static instances = 0;

  constructor(name: string) { 
    super(name);
    Necromancer.instances += 1;
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}

export default Necromancer;