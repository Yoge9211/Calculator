let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '+') {
            buttonText = '+';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}














// var buttons=document.querySelectorAll('buttons');
// function func() {
//     console.log('value')
// }
// buttons.addEventListener('click ' ,func())


// var display=document.getElementById('display');
// var operand1= 0;
// var operand2=null;
// var operator=null;


// for(var i=0;i<buttons.length;i++){
//     buttons[i].addEventListener('click' ,function(){
//         var value=this.getAttribute('value');
//         if(value=='+'){
//             operator='+';
//             operand1=parseFloat(display.textContent);
//         }else if(value='='){

//         }else {
//             display.innerText +=value;
//         }
//     })
// }