"use strict";

function random_number_generator(min, max, array_length) {
  let number_array = [];
  while (number_array.length < array_length) {
    let random_number = Math.floor(Math.random() * max - min + 1 + min);
    if (!number_array.includes(random_number)) {
      number_array.push(random_number);
    }
  }
  return number_array;
}

function creaCountdown(timer, countdown_id) {
  let tempo = timer;
  let display = countdown_id;
  let intervallo = setInterval(function () {
    display.innerText = tempo;
    tempo = tempo - 1;
    if (tempo < 0) {
      clearInterval(intervallo);
      d_none_toggle();
    }
  }, 1000);
}

function d_none_toggle() {
  countdown.classList.toggle("d-none");
  instructures.classList.toggle("d-none");
  answers_form.classList.toggle("d-none");
  numbers_list.classList.toggle('d-none');
}
