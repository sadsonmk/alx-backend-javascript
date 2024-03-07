export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    if (new.target === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessag');
    } else if (new.target !== undefined) {
    this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
