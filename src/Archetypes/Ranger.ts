import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public energyType: EnergyType;
  protected static instances = 0;

  constructor(name: string) { 
    super(name);
    Ranger.instances += 1;
    this.energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;