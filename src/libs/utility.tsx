interface ParametersRandomInt {
  seed: number,
  min?: number,
  max?: number
};

/**
 * Fully deterministic prng, with seed, min value, max value
 * Uses a simple xorshift algorithm
 * @param seed takes a starter seed
 * 
 * @param Integer 
 */
class randomInt {
  private _state: number;
  private _min: number = 0;
  private _max: number = ((2**32) - 1);

  constructor(parameters: ParametersRandomInt) {
    this._state = parameters.seed;
    this.next();
  };

  public get state() {
    return this._state;
  };

  /**
   * bitwise operation in Javascript or Typescript
   * Auto casts "numbers"(64bit floats) to 32bit integers
   * Some further reading and it turns out that bitwise operation
   * might be slower in some browsers (Chrome)
   * @link https://stackoverflow.com/questions/1908492/unsigned-integer-in-javascript
   */
  public next(): void {
    let x = this.state;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    this._state = x;
  };
};

export {
  randomInt,
};