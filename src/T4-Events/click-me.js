/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 31.01.2020
 * @desc Present Example
 * onClick: executes when the button is clicked
 */

'use strict';

const onClick = function() { 
  console.log('Executing the event listener: Button has been clicked');
}

const BUTTON = document.querySelector('button');
BUTTON.addEventListener('click', onClick);
