function updateProductNumber(product,price,isIncreaseing){
    const productInput = document.getElementById(product+'-number');
    const productNumberText = productInput.value;
    let productNumber = parseInt(productNumberText);
    if(isIncreaseing == true){
    productNumber = productNumber + 1;
    }
    else if(productNumber>0){
    productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
    //calculate total
    caculateTotal();
}

function getInputValue (product){
    const productInput =document.getElementById(product+'-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}

function caculateTotal(){
    /* const phoneInput =document.getElementById('phone-number');
    const phoneNumberText = phoneInput.value;
    const phoneNumber = parseFloat(phoneNumberText); */
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')* 59;
    const subTotal = phoneTotal + caseTotal;
    //tax
    const tax =  subTotal / 10;
    //total price
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// phone increase and decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
});
//phone decrease event
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
});
//case plus handle event
document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumberText = caseInput.value;
    // const caseNumber = parseInt(caseNumberText)
    // caseInput.value = caseNumber + 1;
    updateProductNumber('case',59,true);
});
//case minus
document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumberText = caseInput.value;
    // const caseNumber = parseInt(caseNumberText);
    updateProductNumber('case',59,false);
    // caseInput.value = caseNumber - 1;
});
