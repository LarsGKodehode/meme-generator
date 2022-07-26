/**
 * Fully deterministic prng, with seed
 * 
 * @param seed takes a starter seed
 * @param Integer 
 */
class randomInt {
  readonly state: number;

  constructor(seed: number) {
    this.state = seed;
  };

  next(): void {
    
  };
};

export {
  randomInt,
};