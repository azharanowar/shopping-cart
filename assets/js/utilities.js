function productQuantityUpdate( isIncrease, productQuantityFieldId ) {
    const productQuantityField = document.getElementById( productQuantityFieldId );
    const productPreviusQuantity = parseInt( productQuantityField.value );
    let productCurrentQuantity = productPreviusQuantity;

    if ( isIncrease ) {
        productCurrentQuantity = productPreviusQuantity + 1;
    } else {
        if ( productPreviusQuantity > 0 ) {
            productCurrentQuantity = productPreviusQuantity - 1;
        }
    }

    return productQuantityField.value = productCurrentQuantity; 
}


function productPriceUpdate( price, quantity, productPriceId ) {
    const totalPrice = price * quantity;
    document.getElementById( productPriceId ).innerText = totalPrice;
}