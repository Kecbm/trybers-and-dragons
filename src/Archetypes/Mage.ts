import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public energyType: EnergyType;
  protected static instances = 0;

  constructor(name: string) { 
    super(name);
    Mage.instances += 1;
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;