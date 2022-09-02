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
    document.getElementById( productPriceId ).innerText = productTotalPrice;
    updateEverythings();
}


function subtotalPriceUpdate() {
    let subtotalPrice = 0;
    const productsPrice = document.getElementsByClassName("products-price");
    for ( const productPrice of productsPrice ) {
        subtotalPrice += parseFloat(productPrice.innerText);
    }

    return document.getElementById("subtotalPrice").innerText = subtotalPrice;
}


function taxOfTotalPriceUpdate() {
    const subtotalPrice = subtotalPriceUpdate();
    const taxPercentage = 10;
    const taxOfTotalPrice = subtotalPrice * taxPercentage / 100;
    return document.getElementById("totalTaxAmount").innerText = taxOfTotalPrice;
}


function totalPriceUpdate() {
    return document.getElementById("totalPrice").innerText = subtotalPriceUpdate() + taxOfTotalPriceUpdate();
}


function removeProductById( productId ) {
    const removeProductId = document.getElementById( productId );
    removeProductId.parentNode.removeChild(removeProductId);
    updateEverythings();
}

function updateEverythings() {
    subtotalPriceUpdate();
    taxOfTotalPriceUpdate();
    totalPriceUpdate();
}

updateEverythings();

