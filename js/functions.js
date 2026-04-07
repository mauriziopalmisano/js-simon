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
    numbers_list.classList.toggle("d-none");
}

function answers_check(array_number, list_answers) {
    const array_answers = [];
    for (let i = 0; i < list_answers.length; i++) {
        array_answers.push(parseInt(list_answers[i].value))
    }
    let array_result = [];
    console.log(array_number);
    console.log(array_answers);
    for (let i = 0; i < array_number.length; i++) {
        if (array_number.includes(array_answers[i])) {
            array_result.push(array_answers[i]);
        }
    }
    result.innerText = `Hai memorizzato ${array_result.length} numeri e sono ${array_result}`;
}
