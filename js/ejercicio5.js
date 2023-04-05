const ex5_first_number = document.getElementById('ex5_first_number');
const ex5_second_number = document.getElementById('ex5_second_number');
const ex5_third_number = document.getElementById('ex5_third_number');

const ex5_btn_calculate = document.getElementById('ex5_btn_calculate');

const ex5_list_numbers = document.getElementById('ex5_list_numbers');
const ex5_number_larger = document.getElementById('ex5_number_larger');
const ex5_number_short = document.getElementById('ex5_number_short');

ex5_btn_calculate.addEventListener('click',()=>{
    const num1 = parseInt(ex5_first_number.value)
    const num2 = parseInt(ex5_second_number.value)
    const num3 = parseInt(ex5_third_number.value)

    const mi_list = [num1,num2,num3]

    ex5_number_larger.innerHTML=`Número mayor : <b class="text-white">${Math.max(...mi_list)}</b>`
    
})