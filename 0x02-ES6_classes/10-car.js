const cloneSym = Symbol('clone');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSym]() {
    return new this.constructor();
  }

  cloneCar() {
    return this[cloneSym]();
  }
}
