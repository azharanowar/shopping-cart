function productOneQuantity( isIncrease ) {
    const productOneQuantityField = document.getElementById("productOneQuantity");
    const productOnePreviusQuantity = parseInt( document.getElementById("productOneQuantity").value );
    let productOneCurrentQuantity = productOnePreviusQuantity;
    if ( isIncrease ) {
        productOneCurrentQuantity = productOnePreviusQuantity + 1;
    } else {
        if ( productOnePreviusQuantity > 0 ) {
            productOneCurrentQuantity = productOnePreviusQuantity - 1;
        }
    }

    return productOneQuantityField.value = productOneCurrentQuantity;
}


function productOnePriceUpdate(price, quantity ) {
    const totalPrice = price * quantity;
    document.getElementById("productOnePrice").innerText = totalPrice;
}


function productTwoQuantity( isIncrease ) {
    const productTwoQuantityField = document.getElementById("productTwoQuantity");
    const productTwoPreviusQuantity = parseInt( productTwoQuantityField.value );
    let productTwoCurrentQuantity = productTwoPreviusQuantity;

    if ( isIncrease ) {
        productTwoCurrentQuantity = productTwoPreviusQuantity + 1;
    } else {
        if ( productTwoPreviusQuantity > 0 ) {
            productTwoCurrentQuantity = productTwoPreviusQuantity - 1;
        }
    }

    return productTwoQuantityField.value = productTwoCurrentQuantity; 
}


function productTwoPriceUpdate( price, quantity ) {
    const totalPrice = price * quantity;
    document.getElementById("productTwoPrice").innerText = totalPrice;
}