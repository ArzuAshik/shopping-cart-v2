function plusBtn(unitePrice, productName) {
    const productQuantity = document.getElementById(productName + "Quantity");
    let productCount = parseInt(productQuantity.value);
    productCount++;
    productQuantity.value = productCount;

    priceUpdate(unitePrice, productName);
    
}

function minusBtn(unitePrice, productName) {
    const productQuantity = document.getElementById(productName + "Quantity");
    let productCount = parseInt(productQuantity.value);
    if(productCount > 1){
        productCount--;
        productQuantity.value = productCount;

        priceUpdate(unitePrice, productName);
    }
}

function priceUpdate(unitePrice, productName){
    const productQuantity = parseInt(document.getElementById(productName + "Quantity").value);
    const price = unitePrice * productQuantity;
    document.getElementById(productName + "Price").innerText = "$" + price;
    totalCalculation();
}

function totalCalculation(){
    const productOnePrice = parseInt(document.getElementById('phnQuantity').value);
    const productTwoPrice = parseInt(document.getElementById('caseQuantity').value);

    const subTotal = productOnePrice * 1219 + productTwoPrice * 59;
    const tax = subTotal * 0.15;
    const grandTotal = Math.round(subTotal + tax);

    document.getElementById('subTotal').innerText = "$" + subTotal;
    document.getElementById('tax').innerText = "$" + tax.toFixed(2);
    document.getElementById('grandTotal').innerText = "$" + grandTotal;
}

function dltBtn(productName){
    const dltBtn = document.getElementById(productName);
    document.getElementById(productName + 'Quantity').value = 0;
    totalCalculation();
    dltBtn.style.display = 'none';
}

totalCalculation();