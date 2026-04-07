'use strict';

const random_number_array = [...random_number_generator(1,50,5)]; 
const numbers_list = document.querySelector('#numbers-list');
const instructures = document.querySelector('#instructions');
const countdown = document.querySelector('#countdown');
const answers_form = document.querySelector('#answers-form');







for(let i = 0; i < random_number_array.length; i++){
    numbers_list.innerHTML += `<li>${random_number_array[i]}</li>`;
}


creaCountdown(5, countdown);