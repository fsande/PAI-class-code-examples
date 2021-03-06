/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 21.Mar.2021
 * @desc Private and protected properties and methods
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#protecting-wateramount}
 *           {@link https://google.github.io/styleguide/jsguide.html#features-classes-fields}
 */

'use strict';

/**
 * For power property, let’s make it read-only. 
 * It sometimes happens that a property must be set at creation time only, and then never modified.
 * That’s exactly the case for a coffee machine: power never changes.
 * To do so, we only need to make getter, but not the setter.
*/
class CoffeeMachine {
  /** @protected */
  waterAmount_ = 0;

  /**
   * Builds a new coffe machine
   * @param  {number} power - Power of the machine
   */
  constructor(power) {
    /** @protected @const */
    this.power_ = power;
  }

  /**
   * Sets the water amount
   * @param  {number} value - The water amount
   */
  setWaterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this.waterAmount_ = value;
  }

  /**
   * Gets the water amount
   */
  getWaterAmount() {
    return this.waterAmount_;
  }

  /**
   * Gets the power
   */
  getPower() {
    return this.power_;
  }

}

let coffeeMachine = new CoffeeMachine(100);
console.log(`Power is: ${coffeeMachine.getPower()}W`); 
coffeeMachine.setPower(25); // Error: no setter 
