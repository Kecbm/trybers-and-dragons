import Race from './Race';

class Dwarf extends Race {
  public lifePoints: number;
  protected static instances = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.instances += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  public static createdRacesInstances(): number {
    return this.instances;
  }
}

export default Dwarf;