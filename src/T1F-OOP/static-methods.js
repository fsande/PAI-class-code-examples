/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Static methods example
 *
 * A static method is a function that is bound to the class, not an object. 
 * A static method cannot be called from an instance of the class.
 *
 * One of the core concepts of OOP is encapsulation. 
 * An important part of encapsulation is that data (object properties) should not be directly 
 * accessed or modified from outside the object. 
 * To access or modify a property we would use a getter (access) or a setter (modify)
 * 
 * The underscore in front of the properties is another example of a convention. 
 * It also prevents a stack overflow when calling our methods. 
 * Also, note that we are calling “mary.name” not “mary_name”. So the output is being returned from our getter.
 */

"use strict";

class User {
  constructor(name, age, email) {
	  this._name = name;
		this._age = age;
		this._email = email;
	}

	increaseAge() {
	  this._age += 1;
	}

	static staticMethod() {
	  console.log('I am a static method');
	}

	get name() {
	  return this._name;
	}

	set name(newName) {
	  this._name = newName;
	}

	get age() {
	  return this._age;
	}
}

const john = new User('John', 45, 'john@ull.es');
john.increaseAge();
console.log('Age: ', john.age);
User.staticMethod();
// john.staticMethod();		// Returns Typerror since staticMethod is not a john's method

const mary = new User('Mary', 25, 'mary@ull.es');
console.log(mary.name);
mary.name = 'Helen Mary';
console.log(mary.name);
