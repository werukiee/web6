function updatePrice() {
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let quantity = Number(document.getElementById('vibor').value);
    let Element = document.querySelectorAll('#Element input');
    Element.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {price += propPrice;}
        }
    });
    let Radiofru = document.getElementsByName('Radiofru');
    Radiofru.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptionz[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
                
            }
        }
});


    let cou = document.getElementById('vibor');
    cou.addEventListener('input',function (){updatePrice();});
    let s = document.getElementsByName('type');
    s[0].addEventListener('change', function (event) {
        let select = event.target;
        let Rradio = document.getElementById('Rradio');
        let Elemm = document.getElementById('Elemm');
        if (select.value === '1') {
            Rradio.style.display = 'none';
            Elemm.style.display = 'none';
            whoiam();
            Elem_hide();
            document.getElementById('price').innerHTML =
                'Цена: ' + prices.prodTypes[0]*quantity + ' рублей';
        }
        else if (select.value === '2') {
            Elem_hide();
            Rradio.style.display = 'block';
            Elemm.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Цена: ' + prices.prodTypes[1]*quantity + ' рублей.';
        }
        else if (select.value === '3') {
            Rradio.style.display = 'none';
            Elemm.style.display = 'block';
            whoiam();
            document.getElementById('price').innerHTML =
                'Цена: ' + prices.prodTypes[2]*quantity + ' рублей.';
        } else {
        }
    });
    let price_pr = document.getElementById('price');
    price_pr.innerHTML = 'Цена: ' + price * quantity + ' рублей.';
}
function getPrices() {
    return {
        prodTypes: [100, 1000, 5000],
        prodOptionz: {
            Blueberry: 130,
            Cherry: 120,
            Dates: 300,
        },
        prodProperties: {
            Banana: 50,
            Orange: 80,
            Grape: 30,
        },
    };
}
let elm = document.getElementById('whoiam');
elm.style.display = 'none';
function whoiam() {
    elm.checked = !elm.checked;
}
function Elem_hide() {
    document.getElementById('Banana').checked = false;
    document.getElementById('Orange').checked = false;
    document.getElementById('Grape').checked = false;
}


window.addEventListener('DOMContentLoaded', function () {

    let radioDiv = document.getElementById('Rradio');
    radioDiv.style.display = 'none';

    let Elemm = document.getElementById('Elemm');
    Elemm.style.display = 'none';

    let s = document.getElementsByName('type');
    let select = s[0];

    select.addEventListener('change', function () {
        updatePrice();
    });
    let prodOptionz = document.getElementsByName('prodOptionz');
    prodOptionz.forEach(function (radio) {
        radio.addEventListener('change', function () {updatePrice();});
    });
    let sniper_option = document.querySelectorAll('#Element input');
    sniper_option.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {updatePrice();});
    });
    updatePrice();
});