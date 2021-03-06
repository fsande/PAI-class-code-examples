/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Private and protected properties and methods
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#read-only-power}
 */

'use strict';

class CoffeeMachine {
  waterAmount_ = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error('Negative amount of water');
    this.waterAmount_ = value;
  }

  get waterAmount() {
    return this.waterAmount_;
  }

  get power() {
    return this._power;
  }

  constructor(power) {
    this._power = power;
    console.log( `Created a coffee-machine, power: ${power}` );
  }

}

// Create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
console.log(`Power is: ${coffeeMachine.power}W`);   // Power is: 100W

// add water
// coffeeMachine.waterAmount = -10; // Error: Negative water
// coffeeMachine.waterAmount = 10; // Error: Negative water

// coffeeMachine.power = 25; // Error (no setter)
