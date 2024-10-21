function calculate(){

let itemPrice1 = document.getElementById('input1').value;
let itemPrice2 = document.getElementById('input2').value;
let itemQuan1 = document.getElementById('quant1').value;
let itemQuan2 = document.getElementById('quant2').value;
let shippingChrg = 100;
let totalCost = document.getElementById('totalcost');
 

 let price1 = document.getElementById('price1');
 let price2 = document.getElementById('price2');
 let quan1 = document.getElementById('quan1');
 let quan2 = document.getElementById('quan2');

price1.innerHTML = (`Price of item 1 is ${itemPrice1}<br>`);
price2.innerHTML = (`Quantity of item 1 is ${itemQuan1}<br>`);
quan1.innerHTML = (`Price of item 2 is ${itemPrice2}<br>`);
quan2.innerHTML = (`Quantity of item 2 is ${itemQuan2}<br>`);
// shippingChrg.innerHTML = (`Shipping Charges ${shippingChrg}<br>`);
// (`Shipping Charges ${shippingChrg}`);
totalCost.innerHTML = (`Total cost of your order is ${(itemPrice1*itemQuan1)+(itemPrice2*itemQuan2)+shippingChrg
}`);

}