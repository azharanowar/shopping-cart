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
    const productTotalPrice = price * quantity;
    return document.getElementById( productPriceId ).innerText = productTotalPrice;
}



function subtotalPriceUpdate() {
    let subtotalPrice = 0;
    const productsPrice = document.getElementsByClassName("products-price");
    for ( const productPrice of productsPrice ) {
        subtotalPrice += parseFloat(productPrice.innerText);
    }

    return document.getElementById("subtotalPrice").innerText = subtotalPrice;
}

function taxOfTotalPrice() {
    const subtotalPrice = subtotalPriceUpdate();
    console.log( subtotalPrice )
}