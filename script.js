function umn() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    var c = a * b;

    if( a<0||b<0)
    {
        alert('Вводить можно только положительные числа числа'); 
    }
    if(a===0||b===0)   
    {
        alert('Введите значения!');
    }

    if (isNaN(a)==true || isNaN(b)==true) 
        alert('Вводимые данные некорректны');
    else
        document.getElementById('result').innerHTML =c;
    
}
window.addEventListener('DOMContentLoaded', function (umn) {
    console.log("DOM fully loaded and parsed");
    let d = document.getElementById("result");
    d.addEventListener("click", umn);
 });
