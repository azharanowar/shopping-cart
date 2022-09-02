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