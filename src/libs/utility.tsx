interface ParametersRandomInt {
  seed: number,
  min?: number,
  max?: number,
};

class randomInt {
  #state: number;
  #min: number = 0;
  #max: number = ((2**32) - 1);

  /**
   * Fully deterministic prng, with seed, min value, max value
   * Uses a simple xorshift algorithm
   * @param parameters require min < max
   */
  constructor(parameters: ParametersRandomInt) {
    this.#state = parameters.seed;
    if((parameters.min && parameters.max) && (parameters.min < parameters.max)) {
      this.#min = parameters.min;
      this.#max = parameters.max;
    };

    // gets random number rather than initial seed
    this.next;
  };

  public get number() {
    let newNumber = Math.abs(this.#state);

    // fits number into given range
    newNumber = newNumber % (this.#max - this.#min);
    newNumber = newNumber + this.#min;

    return newNumber;
  };

  
  // bitwise operation in Javascript or Typescript
  // Auto casts "numbers"(64bit floats) to 32bit integers
  // Some further reading and it turns out that bitwise operation
  // might be slower in some browsers (Chrome)
  // @link https://stackoverflow.com/a/1909320
  public get next(): number {
    let x = this.#state;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    this.#state = x;
    return this.number;
  };
};

export {
  randomInt,
};