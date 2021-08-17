const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const Motor_toggleBtn = document.querySelector('.Motor_toggleBtn');
const Invertor_toggleBtn = document.querySelector('.Invertor_toggleBtn');
const DC_Reactor_toggleBtn = document.querySelector('.DC-Reactor_toggleBtn');
const Invertor_list = document.querySelector('.Invertor');
const Motor_list = document.querySelector('.Motor');
const DC_Reactor_list = document.querySelector('.DC-Reactor');

toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });

Motor_toggleBtn.addEventListener('click', () => {
        Motor_list.classList.toggle('active');
    });

Invertor_toggleBtn.addEventListener('click', () => {
        Invertor_list.classList.toggle('active');
    });

DC_Reactor_toggleBtn.addEventListener('click', () => {
        DC_Reactor_list.classList.toggle('active');
    });
    