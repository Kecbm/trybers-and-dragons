import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public energyType: EnergyType;
  protected static instances = 0;

  constructor(name: string) { 
    super(name);
    Warrior.instances += 1;
    this.energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;