'use strict';

const random_number_array = [...random_number_generator(1,50,5)]; 
const numbers_list = document.querySelector('#numbers-list');
const instructures = document.querySelector('#instructions');
const countdown = document.querySelector('#countdown');
const answers_form = document.querySelector('#answers-form');
const list_answers = document.querySelectorAll('#input-group input');
const result = document.querySelector('#message');
const btn_confirm = document.querySelector('#btn-confirm');




for(let i = 0; i < random_number_array.length; i++){
    numbers_list.innerHTML += `<li>${random_number_array[i]}</li>`;
}


creaCountdown(5, countdown);
btn_confirm.addEventListener('click',function(){
    answers_check(random_number_array,list_answers);
});