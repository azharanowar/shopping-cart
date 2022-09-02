document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    const productOneCurrentQuantity = productOneQuantity( true );
    productOnePriceUpdate( 1250, productOneCurrentQuantity );
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    const productOneCurrentQuantity = productOneQuantity(false);
    productOnePriceUpdate( 1250, productOneCurrentQuantity );
});


document.getElementById("productTwoQuantityIncrease").addEventListener('click', function() {
    const productTwoCurrentQuantity = productTwoQuantity(true);
    productTwoPriceUpdate( 50, productTwoCurrentQuantity );
});

document.getElementById("productTwoQuantityDecrease").addEventListener('click', function() {
    const productTwoCurrentQuantity = productTwoQuantity(false);
    productTwoPriceUpdate( 50, productTwoCurrentQuantity );
});


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