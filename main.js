const field = document.querySelector('.field');
const numbers = document.querySelectorAll('.num');
document.getElementById('erase').value = 'erase';

// Генерация цифр в калькуляторе
const numsTemplate = `<input class='num button' type='button' value='%NUMBER%'>`
numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0]
numbersList.forEach(num => {
    document.querySelector('.nums').innerHTML += numsTemplate.replace('%NUMBER%', `${num}`)
});

// Выдача всем кнопкам обработчика на клик
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => writeToField(button));
})


prevPressed = ''
function writeToField(elem) {
    val = elem.value;
    console.log(`Нажато: ${val}, ${elem.className}`);
    console.log(`В прошлый раз: ${prevPressed}`);

    if (prevPressed === 'operand button' && elem.className === 'operand button') {
        return;
    } else if (val === 'C') {
        field.value = '';
    } else if (val === 'erase') {
        field.value = field.value.slice(0, -1);
        prevPressed = '';
    } else if (val === '=') {
        try {
            result = eval(field.value);
            field.value = result;
        } catch (error) {
            field.value = 'Ошибка';
        }
    } else {
        prevPressed = elem.className;
        field.value += val;
    }
}
