export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error();
    }
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](clue) {
    if (clue === 'number') {
      return this._size;
    } if (clue === 'string') {
      return this._location;
    }
    return undefined;
  }
}
