/**
 * Fully deterministic prng, with seed
 * Uses a simple xorshift algorithm
 * @param seed takes a starter seed
 * @param Integer 
 */
class randomInt {
  private state: number;

  constructor(seed: number) {
    this.state = seed;
  };

  /**
   * bitwise operation in Javascript or Typescript
   * Auto casts "numbers"(64bit floats) to 32bit integers
   * Some further reading and it turns out that bitwise operation
   * might be slower in some browsers (Chrome)
   * @link https://stackoverflow.com/questions/1908492/unsigned-integer-in-javascript
   */
  next(): void {
    let x = this.state;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    this.state = x;
  };
};

export {
  randomInt,
};