document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    const productOneCurrentQuantity = productOneQuantity( true );
    productOnePriceUpdate( 1250, productOneCurrentQuantity );
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    const productOneCurrentQuantity = productOneQuantity(false);
    productOnePriceUpdate( 1250, productOneCurrentQuantity );
});


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